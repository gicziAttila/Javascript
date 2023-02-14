function choose() {
    var cars = document.getElementById('valaszto');
    var cars_value = cars.options[cars.selectedIndex].text;
    var list_number = cars.options[cars.selectedIndex].value;
    document.getElementById("auto").value = cars_value
    document.getElementById("sorszam").value = list_number
} 