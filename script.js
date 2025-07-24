if (window.location.pathname.endsWith("projets.html")) {
    fetch('ressources/lstProjets.csv')
        .then(response => response.text())
        .then(text => {
        var ListTitle = []
        var ListPicture = []
        var ListDescription = []
        const rows = text.trim().split('\n');
        const dataRows = rows.slice(1);
        dataRows.forEach(row => {
            const [rowTitle, rowPicture, rowDescription] = row.split(';');
            if (rowTitle) {
                ListTitle.push(rowTitle);
            }
            if (rowPicture) {
                ListPicture.push(rowPicture);
            }
            if (rowDescription) {
                ListDescription.push(rowDescription);
            }
        });
        const projetsDiv = document.getElementById("projects-container");
        let html = "";
        for (let i = 0; i < ListTitle.length; i++) {
            html += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 box"><p class="title">${ListTitle[i]}</p><img src="img/${ListPicture[i]}" alt="Image de ${ListTitle[i]}"><p class="description">${ListDescription}</p></div>`;
        }
        projetsDiv.innerHTML = html
    });
}