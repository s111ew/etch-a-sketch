const playGame = () => {
    createBoard();
    colourPixels();
    resetBoard();
    displayGridMenu();
    displayColourMenu();
}

const createBoard = () => {
    const container = document.querySelector("#container");
    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    };
};

const colourPixels = () => {
    const pixels = document.querySelectorAll(".pixel")
    let isMouseDown = false;

    document.addEventListener("mousedown", () => isMouseDown = true);

    document.addEventListener("mouseup", () => isMouseDown = false);

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.classList.add("colourChange");
        })
        pixel.addEventListener("mousemove", () => {
            if (isMouseDown) {
                pixel.classList.remove("colourChange");
            }
        });
    })
};

const resetBoard = () => {
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", () => {
        const container = document.querySelector("#container");
            for (let i = 0; i < pixelCount; i++) {
                const pixel = document.querySelector(".pixel");
                    container.removeChild(pixel);
            };
            remakeBoard();
    })
};

const remakeBoard = () => {
    createBoard();
    colourPixels();
}

const displayGridMenu = () => {
    const gridButton = document.querySelector("#changeGridSize");

    gridButton.addEventListener("click", () => {

        const body = document.querySelector("body");

        const gridMenuPopUp = document.createElement("div");
        const gridMenuBackground = document.createElement("div");
    
        gridMenuPopUp.classList.add("menuPopUp");
        gridMenuPopUp.setAttribute("id", "gridMenuPopUp")

        gridMenuBackground.classList.add("menuBackground");
        gridMenuBackground.setAttribute("id", "gridMenuBackground")

        body.appendChild(gridMenuBackground);
        body.appendChild(gridMenuPopUp);

        gridMenuBackground.addEventListener("click", () => {

            gridMenuPopUp.remove();
            gridMenuBackground.remove();

        });

        populateGridMenu();

    });
};

const displayColourMenu = () => {
    const colourButton = document.querySelector("#changeColour");

    colourButton.addEventListener("click", () => {

        const body = document.querySelector("body");

        const colourMenuPopUp = document.createElement("div");
        const colourMenuBackground = document.createElement("div");
    
        colourMenuPopUp.classList.add("menuPopUp");
        colourMenuPopUp.setAttribute("id", "colourMenuPopUp")
        
        colourMenuBackground.classList.add("menuBackground");
        colourMenuBackground.setAttribute("id", "colourMenuBackground")

        body.appendChild(colourMenuBackground);
        body.appendChild(colourMenuPopUp);

        colourMenuBackground.addEventListener("click", () => {

            colourMenuPopUp.remove();
            colourMenuBackground.remove();

        });
    });
};

const populateGridMenu = () => {
    const gridMenuPopUp = document.querySelector(".menuPopUp");
    const gridMenuBackground = document.querySelector(".menuBackground");

    const closeX = document.createElement("div");
    closeX.id = "closeX";
    closeX.textContent = "X";
    closeX.addEventListener("click", () => {
        gridMenuBackground.remove();
        gridMenuPopUp.remove();
    });

    const innerText = document.createElement("div");
    innerText.id = "innerText";
    innerText.textContent = "Choose a new grid size:"

    const sizeSlider = document.createElement("input");
    sizeSlider.type = "range";
    sizeSlider.id = "sizeSlider";
    sizeSlider.min = 8;
    sizeSlider.max = 100;
    sizeSlider.value = 16;
    sizeSlider.step = 1;

    const confirmButton = document.createElement("button");
    confirmButton.id = "confirmButton";

    gridMenuPopUp.appendChild(closeX);
    gridMenuPopUp.appendChild(innerText);
    gridMenuPopUp.appendChild(sizeSlider);
    gridMenuPopUp.appendChild(confirmButton);
}

let pixelCount = 256;

playGame();

//populate menu

