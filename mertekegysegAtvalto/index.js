function mertekegysegAtvaltas () {
    let meter = parseInt(document.getElementById("meter").value)
    let lab = meter * 3.28
    let merfold = meter * 0.00062137
    let km = meter / 1000
    let yard = meter * 1.09
    let inch = meter * 39.37
    document.getElementById("lab").value = lab
    document.getElementById("merfold").value = merfold
    document.getElementById("km").value = km
    document.getElementById("yard").value = yard
    document.getElementById("inch").value = inch
}