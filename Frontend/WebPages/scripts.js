document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.getElementById("chessboard");
    let isWhite = true;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const tile = document.createElement("div");
            tile.className = isWhite ? "white" : "black";
            chessboard.appendChild(tile);
            isWhite = !isWhite;
        }
        isWhite = !isWhite; // Switch color for each row
    }
});

