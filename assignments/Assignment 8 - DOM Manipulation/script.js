function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");
    newForm.style.display = "none";
    filterForm.style.display = filterForm.style.display === "none" ? "block" : "none";
}

function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");
    filterForm.style.display = "none";
    newForm.style.display = newForm.style.display === "flex" ? "none" : "flex";
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    document.querySelectorAll("article").forEach(article => {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        } else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        } else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;
    const type = document.querySelector('input[name="articleType"]:checked');

    if (!title || !text || !type) {
        alert("Please fill out all fields and select an article type.");
        return;
    }

    const article = document.createElement("article");
    article.classList.add(type.value);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = type.value.charAt(0).toUpperCase() + type.value.slice(1);

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);

    document.getElementById("articleList").appendChild(article);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.querySelectorAll('input[name="articleType"]').forEach(r => r.checked = false);

    filterArticles();
}