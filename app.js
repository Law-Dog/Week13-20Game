function run() {
    getCard()
}

function getCard() {
    var ranNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    var r = Math.floor(Math.random() * 12)
    var cardType = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4) //0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=13Images/" + ranNum[r] + cardType[randomSuit] + ".jpg>")
}