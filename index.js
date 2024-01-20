function rollDiceAndDetermineWinner() {
    //for dice 1
    var randNum1 = Math.floor(Math.random() * 6) + 1; //generating number from 1-6
    var randDiceImg = "dice" + randNum1 + ".png";  // generating dice images i.e dice1.png - dice6.png
    var randImgSrc = "images/" + randDiceImg;        // images/dice1.png - images/dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randImgSrc);

    //for dice 2
    var randNum2 = Math.floor(Math.random() * 6) + 1;
    var randImgSrc2 = "images/dice" + randNum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);

    if (randNum1 > randNum2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
    } else if (randNum2 > randNum1) {
        document.querySelector("h1").innerHTML = "🚩 Player 2 wins!!"
    } else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}

// Call the function when the button is clicked
let button = document.querySelector("button");
button.addEventListener("click", rollDiceAndDetermineWinner);
