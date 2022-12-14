function hatszogTerulet() {
    let hatszogOldala = parseInt(document.getElementById("hatszogOldal").value)
    let hatszogTerulet = (3*Math.sqrt(3))/2*Math.pow(hatszogOldala, 2)
    document.getElementById("terulet").value = Math.round(hatszogTerulet * 10) / 10
}