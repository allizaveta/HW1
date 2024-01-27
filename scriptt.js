function season(monthNumber) {
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        alert("Некорректный номер месяца");
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert("Весна");
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert("Лето");
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert("Осень");
    } else {
        alert("Зима");
    }
}
