const createBoard = () => {
    const container = document.querySelector("#container");
    for (let i = 0; i < 256; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    };
    colourPixels();
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


createBoard();

