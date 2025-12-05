const projectsData = [
    { title: "Project 1", href: "#", photo: "../../../public/project1.png" },
    { title: "Project 2", href: "#", photo: "../../../public/project2.png" },
    { title: "Project 3", href: "#", photo: "../../../public/secret.png" },
    { title: "Project 4", href: "#", photo: "../../../public/secret.png" },
];

const itemsPerPage = 2;
let currentPage = 1;

const container = document.getElementById("projects-container");
const pageButtonsContainer = document.querySelector(".page-buttons");
const prevBtn = document.querySelector(".prev-page");
const nextBtn = document.querySelector(".next-page");

function renderProjects() {
    container.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = projectsData.slice(start, end);

    pageItems.forEach(project => {
        const windowDiv = document.createElement("div");
        windowDiv.classList.add("custom-window");
        windowDiv.innerHTML = `
            <div class="title-bar">
                <div class="title-bar-text">${project.title}</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="custom-window-body window-body">
                <a href="${project.href}" target="_blank">
                    <img src="${project.photo}" alt="${project.title}" />
                </a>
            </div>
        `;
        container.appendChild(windowDiv);
    });

    renderPagination();
}

function renderPagination() {
    pageButtonsContainer.innerHTML = "";
    const totalPages = Math.ceil(projectsData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
            currentPage = i;
            renderProjects();
        });
        pageButtonsContainer.appendChild(btn);
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderProjects();
    }
});

nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(projectsData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProjects();
    }
});

// Initial render
renderProjects();
