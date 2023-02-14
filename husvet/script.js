function husvetKiszamolo()  {
    var evszam = document.getElementById("evszamok").value
    let t = evszam
    let a = t % 19
    let b = t % 4
    let c = t %  7
    let d = ((19*a)+24) % 30
    let e =((2*b)+(4*c)+(6*d)+5) % 7
    let h = 22+d+e
    let p = 0
    if (h <= 31) {
        datum_husvet = "Március"
    }
    else {
         h = h - 31
        datum_husvet = "Április"
    }
    if (datum_husvet == "Március") {
        p = h + (7*7)
        p = p - 61
        datum_punkosd = "Május"
    }
    else {
        p = h + (7*7)
        p = p - 30
        if (p > 31) {
            p = p-31 
            datum_punkosd = "Június"
        }
        else {
            datum_punkosd = "Május"
        }
    }

    document.getElementById("husvet").innerHTML ="Húsvét: " +  datum_husvet + " " + h
    document.getElementById("punkosd").innerHTML ="Pünkösd: " + datum_punkosd + " " + p
}