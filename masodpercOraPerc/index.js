function idoAtvaltas() {
    let masodperc = parseInt(document.getElementById("masodpercElso").value)
    let ora = masodperc/3600
    let perc = masodperc/60
    document.getElementById("ora").value = Math.floor(ora)
    document.getElementById("perc").value = Math.floor(perc)
    document.getElementById("masodperc").value = masodperc
}