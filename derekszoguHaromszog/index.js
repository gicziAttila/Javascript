var sentenceGood = "<p>A megadott háromszög oldalak derékszögű háromszöget alkotnak</p>"
var sentenceBad = "<p>A megadott háromszög oldalak nem derékszöget alkotnak</p>"
var sentenceTriangle = "<p>A megadott háromszög oldalak nem alkotnak háromszöget</p>"
function derekszoguHaromszog() {
    let a = parseInt(document.getElementById("aOldal").value)
    let b = parseInt(document.getElementById("bOldal").value)
    let c = parseInt(document.getElementById("cOldal").value)
    if (a + b < c || a + c < b || b + c < a) {
        document.getElementById("eredmeny").innerHTML = sentenceTriangle;
    }
    else {
        if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
            document.getElementById("eredmeny").innerHTML = sentenceGood;
        }
        else {
            document.getElementById("eredmeny").innerHTML = sentenceBad;
        }
    }
}