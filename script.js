const events = [
  {
    date: "1 июня",
    title: "Фестиваль детства и юности",
    kind: "fest",
    description:
      "Большое открытие летней программы для детей, молодежи и всей семьи на площадках Исторического парка.",
    schedule: "1 июня · подробное время уточняется",
  },
  {
    date: "2 июня",
    title: "Открытие выставки «150 артистов»",
    kind: "fest",
    description:
      "Выставочный проект в рамках летнего фестиваля с работами участников и специальной программой открытия.",
    schedule: "2 июня · подробное время уточняется",
  },
  {
    date: "3 июня",
    title: "Литературная песочница",
    kind: "day",
    description:
      "Дневная встреча для детей и молодежи: чтение, творческие задания и живой формат знакомства с литературой.",
    schedule: "3 июня · дневная программа",
  },
  {
    date: "4 июня",
    title: "Показ фильма",
    kind: "evening",
    description:
      "Вечерний кинопоказ под открытым небом в спокойной атмосфере для отдыха после учебы и работы.",
    schedule: "4 июня · вечерняя программа",
  },
  {
    date: "5 июня",
    title: "Дворовые игры Первые",
    kind: "day",
    description:
      "Активные командные игры на свежем воздухе с понятными правилами и динамичным участием.",
    schedule: "5 июня · дневная программа",
  },
  {
    date: "5 июня",
    title: "Творческий вечер под гитару",
    kind: "evening",
    description:
      "Ламповая вечерняя встреча с живым исполнением, песнями и общением.",
    schedule: "5 июня · вечерняя программа",
  },
  {
    date: "6 июня",
    title: "Игротека Внастолку",
    kind: "day",
    description:
      "Настольные игры для разных возрастов: быстрые партии, командное взаимодействие и семейный формат.",
    schedule: "6 июня · дневная программа",
  },
  {
    date: "6 июня",
    title: "Показ фильма",
    kind: "evening",
    description: "Открытый вечерний кинопоказ для гостей фестиваля.",
    schedule: "6 июня · вечерняя программа",
  },
  {
    date: "6 июня",
    title: "Фестиваль сказок",
    kind: "fest",
    description:
      "Крупное семейное событие с тематическими активностями, творческими зонами и атмосферой сказки.",
    schedule: "6 июня · фестивальная программа",
  },
  {
    date: "7 июня",
    title: "Тверская пробежка",
    kind: "day",
    description:
      "Открытая спортивная активность для тех, кто хочет начать день в движении.",
    schedule: "7 июня · дневная программа",
  },
  {
    date: "8 июня",
    title: "ТИР",
    kind: "day",
    description: "Практическая дневная активность на меткость и концентрацию.",
    schedule: "8 июня · дневная программа",
  },
  {
    date: "9 июня",
    title: "Вотертаг",
    kind: "day",
    description:
      "Командная игра со стрельбой из водных пистолетов: движение, азарт и летний формат.",
    schedule: "9 июня · дневная программа",
  },
  {
    date: "10 июня",
    title: "Литературная песочница",
    kind: "day",
    description:
      "Творческий дневной формат с книгами, заданиями и игровой подачей.",
    schedule: "10 июня · дневная программа",
  },
  {
    date: "11 июня",
    title: "Показ фильма",
    kind: "evening",
    description: "Вечерний кинопоказ на открытой площадке.",
    schedule: "11 июня · вечерняя программа",
  },
  {
    date: "11 июня",
    title: "Турнир по гонкам машинок",
    kind: "day",
    description:
      "Соревнование на радиоуправляемых машинках для участников и зрителей.",
    schedule: "11 июня · дневная программа",
  },
  {
    date: "12 июня",
    title: "День России",
    kind: "fest",
    description: "Праздничная программа ко Дню России на площадках фестиваля.",
    schedule: "12 июня · фестивальная программа",
  },
  {
    date: "13 июня",
    title: "Игротека Внастолку",
    kind: "day",
    description: "Дневной блок настольных игр для семьи, детей и молодежи.",
    schedule: "13 июня · дневная программа",
  },
  {
    date: "13 июня",
    title: "Показ фильма",
    kind: "evening",
    description: "Кинопоказ в вечернем формате для спокойного завершения дня.",
    schedule: "13 июня · вечерняя программа",
  },
  {
    date: "14 июня",
    title: "Тверская пробежка",
    kind: "day",
    description:
      "Спортивная встреча на свежем воздухе для активного начала дня.",
    schedule: "14 июня · дневная программа",
  },
  {
    date: "14 июня",
    title: "Йога / пилатес / растяжка",
    kind: "day",
    description:
      "Открытая тренировка на гибкость, восстановление и мягкую физическую активность.",
    schedule: "14 июня · дневная программа",
  },
  {
    date: "15 июня",
    title: "ТИР",
    kind: "day",
    description:
      "Дневная активность на точность, реакцию и соревновательный интерес.",
    schedule: "15 июня · дневная программа",
  },
  {
    date: "15 июня",
    title: "Детский DJ-сет",
    kind: "evening",
    description: "Музыкальный вечерний формат для детей и семейной аудитории.",
    schedule: "15 июня · вечерняя программа",
  },
  {
    date: "16 июня",
    title: "Большая игра в казаков-разбойников",
    kind: "day",
    description:
      "Большая командная игра на территории площадки с активным движением и понятной механикой.",
    schedule: "16 июня · дневная программа",
  },
  {
    date: "18 июня",
    title: "Показ фильма",
    kind: "evening",
    description: "Открытый вечерний кинопоказ в рамках регулярной программы.",
    schedule: "18 июня · вечерняя программа",
  },
  {
    date: "18 июня",
    title: "Дворовые игры Первые",
    kind: "day",
    description:
      "Дневные командные активности и знакомые дворовые игры в современном фестивальном формате.",
    schedule: "18 июня · дневная программа",
  },
  {
    date: "19 июня",
    title: "Турнир по уличному волейболу",
    kind: "day",
    description:
      "Спортивный турнир для участников, которые любят командную игру и летнюю динамику.",
    schedule: "19 июня · дневная программа",
  },
  {
    date: "19 июня",
    title: "Винил + роспись DVD-дисков",
    kind: "evening",
    description:
      "Вечерняя творческая встреча с музыкой, винилом и кастомизацией дисков.",
    schedule: "19 июня · вечерняя программа",
  },
  {
    date: "21 июня",
    title: "МК по современным танцам",
    kind: "day",
    description:
      "Мастер-класс по современным танцам для тех, кто хочет попробовать новые движения.",
    schedule: "21 июня · дневная программа",
  },
  {
    date: "22 июня",
    title: "ТИР",
    kind: "day",
    description:
      "Практическая активность на меткость в дневной программе фестиваля.",
    schedule: "22 июня · дневная программа",
  },
  {
    date: "22 июня",
    title: "Планер",
    kind: "day",
    description:
      "Дневная творческая или техническая активность в рамках летней программы.",
    schedule: "22 июня · дневная программа",
  },
  {
    date: "23 июня",
    title: "Турнир по гонкам машинок",
    kind: "day",
    description:
      "Состязание на радиоуправляемых машинках с азартной турнирной механикой.",
    schedule: "23 июня · дневная программа",
  },
  {
    date: "24 июня",
    title: "МК: обвесы из быстросохнущей глины",
    kind: "day",
    description:
      "Творческий мастер-класс по созданию декоративных элементов из быстросохнущей глины.",
    schedule: "24 июня · дневная программа",
  },
  {
    date: "25 июня",
    title: "Показ фильма",
    kind: "evening",
    description: "Вечерний кинопоказ под открытым небом для гостей фестиваля.",
    schedule: "25 июня · вечерняя программа",
  },
  {
    date: "25 июня",
    title: "Вотертаг",
    kind: "day",
    description:
      "Летняя командная игра с водными пистолетами и активным движением.",
    schedule: "25 июня · дневная программа",
  },
  {
    date: "26 июня",
    title: "Подкаст с тверскими блогерами",
    kind: "evening",
    description:
      "Вечерняя встреча в формате живого разговора с локальными авторами и блогерами.",
    schedule: "26 июня · вечерняя программа",
  },
  {
    date: "27 июня",
    title: "День молодежи",
    kind: "fest",
    description:
      "Крупное событие ко Дню молодежи с насыщенной программой для участников фестиваля.",
    schedule: "27 июня · фестивальная программа",
  },
  {
    date: "28 июня",
    title: "Творческий вечер под гитару",
    kind: "evening",
    description: "Атмосферная встреча с песнями под гитару и живым общением.",
    schedule: "28 июня · вечерняя программа",
  },
  {
    date: "30 июня",
    title: "Молодежный DJ-сет",
    kind: "evening",
    description:
      "Музыкальная вечерняя программа с DJ-сетом для молодежной аудитории.",
    schedule: "30 июня · вечерняя программа",
  },
];
const labels = {
  day: "Дневная программа",
  evening: "Вечерняя программа",
  fest: "Фестиваль",
};
const grid = document.querySelector("#eventsGrid");
const buttons = document.querySelectorAll(".filter");
const overlay = document.querySelector("#eventModalOverlay");
const modal = document.querySelector("#eventModal");
const modalClose = document.querySelector(".modal-close");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalSchedule = document.querySelector("#modalSchedule");
const confettiLayer = document.querySelector("#confettiLayer");
const themeClasses = ["theme-day", "theme-evening", "theme-fest"];

function createConfetti() {
  const colors = ["#8299B9", "#DC9F2A", "#465417", "#EFF3D1", "#ffffff"];
  confettiLayer.innerHTML = Array.from({ length: 90 }, (_, index) => {
    const width = 7 + Math.round(Math.random() * 8);
    const height = 9 + Math.round(Math.random() * 12);
    const x = Math.round(Math.random() * 100);
    const drift = Math.round(Math.random() * 140 - 70);
    const duration = (5 + Math.random() * 5).toFixed(2);
    const delay = (-Math.random() * 8).toFixed(2);
    const rotate = Math.round(Math.random() * 360);
    const color = colors[index % colors.length];
    return `<span class="confetti" style="--x:${x}%;--w:${width}px;--h:${height}px;--d:${duration}s;--delay:${delay}s;--rot:${rotate}deg;--drift:${drift}px;--c:${color}"></span>`;
  }).join("");
}

function setPageTheme(type) {
  document.body.classList.remove(...themeClasses);
  if (type === "day") document.body.classList.add("theme-day");
  if (type === "evening") document.body.classList.add("theme-evening");
  if (type === "fest") document.body.classList.add("theme-fest");
}

function render(type = "all") {
  grid.innerHTML = events
    .filter((event) => type === "all" || event.kind === type)
    .map(
      (event) => `
        <button class="event-card ${event.kind} is-entering" type="button" data-index="${events.indexOf(event)}">
          <div><div class="event-date">${event.date}</div><h3 class="event-title">${event.title}</h3></div>
          <span class="event-tag">${labels[event.kind]}</span>
        </button>`,
    )
    .join("");

  requestAnimationFrame(() => {
    grid.querySelectorAll(".event-card").forEach((card, index) => {
      card.style.transitionDelay = `${Math.min(index * 25, 260)}ms`;
      card.classList.remove("is-entering");
    });
  });
}

function switchEvents(type) {
  grid.classList.add("is-switching");
  window.setTimeout(() => {
    render(type);
    grid.classList.remove("is-switching");
  }, 260);
}

function openModal(event) {
  modal.className = `event-modal ${event.kind}`;
  modalTitle.textContent = event.title;
  modalDescription.textContent = event.description;
  modalSchedule.textContent = event.schedule;
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

grid.addEventListener("click", (evt) => {
  const card = evt.target.closest(".event-card");
  if (!card) return;
  openModal(events[Number(card.dataset.index)]);
});

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (evt) => {
  if (evt.target === overlay) closeModal();
});
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape" && overlay.classList.contains("active"))
    closeModal();
});

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    buttons.forEach((i) => i.classList.remove("active"));
    button.classList.add("active");
    setPageTheme(button.dataset.type);
    switchEvents(button.dataset.type);
  }),
);
createConfetti();
setPageTheme("all");
render();
