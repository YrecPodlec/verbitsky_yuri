const skillsData = [
    {
        category: "Languages",
        skills: [
            { label: "JavaScript", ico: "../../../public/tabs/js.svg", progress: "85%" },
            { label: "TypeScript", ico: "../../../public/tabs/ts.svg", progress: "90%" },
            { label: "English", ico: "../../../public/tabs/world.svg", progress: "70%" }
        ],
        text: "I can code efficiently in JavaScript and TypeScript, and communicate in English."
    },
    {
        category: "Frontend",
        skills: [
            {
                label: "NEXT JS",
                ico: "../../../public/tabs/next.svg",
                progress: "80%"
            },
            {
                label: "WebPack",
                ico: "../../../public/tabs/webpack.svg", progress: "80%"
            },
            {
                label: "GitHub",
                ico: "../../../public/tabs/github.svg", progress: "95%"
            }
        ],
        text: "languages"
    },
];

const tabsBtns = document.getElementById("tabsBtns");
const tabsContent = document.getElementById("tabsContent");

skillsData.forEach((tab, index) => {
    // Кнопки табов
    const btn = document.createElement("button");
    btn.innerText = tab.category;
    btn.className = index === 0 ? "active" : "";
    btn.addEventListener("click", () => showTab(index));
    tabsBtns.appendChild(btn);
});

// Отобразить таб по индексу
function showTab(activeIndex) {
    tabsContent.innerHTML = ""; // очищаем контент
    tabsBtns.querySelectorAll("button").forEach((btn, i) => {
        btn.classList.toggle("active", i === activeIndex);
    });

    const tab = skillsData[activeIndex];

    // Панель контента
    const panel = document.createElement("div");
    panel.className = "tab-panel";

    const title = document.createElement("h1");
    title.innerText = tab.category.toUpperCase();
    panel.appendChild(title);

    const list = document.createElement("div");
    list.className = "skill-list";

    tab.skills.forEach(skill => {
        const item = document.createElement("div");
        item.className = "skill-item";

        const imageBox = document.createElement("div");
        imageBox.className = "image-box";

        const img = document.createElement("img");
        img.src = skill.ico;
        img.alt = skill.label;
        img.className = "skill-photo";

        const span = document.createElement("span");
        span.className = "skill-text";
        span.innerText = skill.label;

        imageBox.appendChild(img);
        imageBox.appendChild(span);

        const barWrapper = document.createElement("div");
        barWrapper.className = "content-bar progress-indicator";

        const bar = document.createElement("span");
        bar.className = "progress-indicator-bar";
        bar.style.width = skill.progress;

        const proc = document.createElement("div");
        proc.className = "progressProc";
        proc.innerText = skill.progress;

        barWrapper.appendChild(bar);
        barWrapper.appendChild(proc);

        item.appendChild(imageBox);
        item.appendChild(barWrapper);
        list.appendChild(item);
    });

    panel.appendChild(list);

    // Добавим текст в Window
    const windowDiv = document.createElement("div");
    windowDiv.className = "into-window";
    windowDiv.innerHTML = `
        <div class="contentWindow window window-white">
            <div class="title-bar title-bar-white">
                <div class="title-bar-text">${tab.category}</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="bodyWindow window-body window-body-white">
                ${tab.text}
            </div>
        </div>
    `;
    panel.appendChild(windowDiv);

    tabsContent.appendChild(panel);
}

// Инициализация первого таба
showTab(0);
