document.addEventListener("DOMContentLoaded", function () {
    let allNamesElm = document.getElementById("artical-list");

    function setErrorDisplay() {
        allNamesElm.innerHTML = "<p style='color: red;'>Failed to load articles. Please try again later.</p>";
    }

    fetch("https://sheetlabs.com/MRE/tornatoDatabase")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            if (!data.length) {
                setErrorDisplay();
                return;
            }

            data.forEach(value => {
                let articalBox = document.createElement("div");
                articalBox.classList.add("artical-box");

                let anchor = document.createElement("a");
                anchor.href = value.link;
                anchor.target = "_blank"; // Open in new tab

                let image = document.createElement("img");
                image.src = value.imagesource;
                image.alt = "Article Image";

                let articalSpan = document.createElement("div");
                articalSpan.classList.add("article-content");

                let artical = document.createElement("h2");
                artical.textContent = value.articalname;

                let description = document.createElement("p");
                description.textContent = value.description;

                let infoDiv = document.createElement("div");
                infoDiv.classList.add("info");

                let date = document.createElement("p");
                date.textContent = value.date;

                let dot = document.createElement("span");
                dot.textContent = " • ";

                let readTime = document.createElement("p");
                readTime.textContent = `${value.readtime} min read`;

                infoDiv.appendChild(date);
                infoDiv.appendChild(dot);
                infoDiv.appendChild(readTime);

                articalSpan.appendChild(artical);
                articalSpan.appendChild(description);
                articalSpan.appendChild(infoDiv);

                anchor.appendChild(articalSpan);
                anchor.appendChild(image);

                articalBox.appendChild(anchor);
                allNamesElm.appendChild(articalBox);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            setErrorDisplay();
        });
});
