// Horario habitual publicado en la web original. Revisar excepciones con el negocio.
const TIME_ZONE = "America/Mexico_City";
const SCHEDULE = [
  { open: 11 * 60 + 30, close: 15 * 60 }, // Domingo
  { open: 12 * 60 + 30, close: 20 * 60 }, // Lunes
  { open: 12 * 60 + 30, close: 20 * 60 }, // Martes
  { open: 12 * 60 + 30, close: 20 * 60 }, // Miércoles
  { open: 12 * 60 + 30, close: 20 * 60 }, // Jueves
  { open: 12 * 60 + 30, close: 20 * 60 }, // Viernes
  { open: 11 * 60 + 30, close: 20 * 60 }  // Sábado
];

const DAY_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const DAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function timeText(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function localParts(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return { day: DAY_INDEX[value.weekday], minute: Number(value.hour) * 60 + Number(value.minute) };
}

function businessStatus(date = new Date()) {
  const { day, minute } = localParts(date);
  const today = SCHEDULE[day];

  if (minute >= today.open && minute < today.close) {
    return { open: true, status: "Abierto ahora", detail: `Hoy cerramos a las ${timeText(today.close)}.` };
  }

  const nextOffset = minute < today.open ? 0 : 1;
  const nextDay = (day + nextOffset) % 7;
  const label = nextOffset === 0 ? "Hoy" : "Mañana";
  return {
    open: false,
    status: "Cerrado ahora",
    detail: `${label} abrimos a las ${timeText(SCHEDULE[nextDay].open)}.`
  };
}

function renderStatus() {
  const now = new Date();
  const state = businessStatus(now);
  const { day } = localParts(now);
  const today = SCHEDULE[day];
  const container = document.querySelector(".availability");
  container.dataset.state = state.open ? "open" : "closed";
  document.querySelector("#open-status").textContent = state.status;
  document.querySelector("#status-detail").textContent = state.detail;

  document.querySelector("#today-day").textContent = `Hoy, ${DAY_NAMES[day]}`;
  document.querySelector("#today-time").textContent = `${timeText(today.open)} – ${timeText(today.close)}`;
  document.querySelectorAll(".schedule-row").forEach(row => {
    const isToday = row.dataset.days.split(" ").includes(String(day));
    row.classList.toggle("is-today", isToday);
    row.querySelector(".schedule-current").hidden = !isToday;
  });
}

renderStatus();
// Vuelve a calcular al cambiar de minuto o cuando se recupera la pestaña.
setInterval(renderStatus, 60 * 1000);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) renderStatus();
});

// Se expone para poder verificar las horas límite sin dependencias.
window.HospitalHours = { businessStatus };

// Revela cada bloque una sola vez al entrar en pantalla.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("js-motion");
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
}
