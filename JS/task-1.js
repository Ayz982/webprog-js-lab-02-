//Функція поверернення рядка з повідомленням про покупку ремонтних дроїдів:
function makeTransaction(quantity, pricePerDroid){ //Оголошення функції з двома параметрами
    let totalPrice; //оголошення зміної для загальної вартості замовлення
    totalPrice = quantity * pricePerDroid; //знаходження totalPrice шляхом добутку кількості одиниць на вартість одиниці
    let result = `You ordered ${quantity} droids worth ${totalPrice} credits!`; //оголошення і ініціалізація зміної для результату
    if (confirm("Бажаєте побачити результат?")) {
        alert("Результат: " + result);
    }
}
//Виклики функції
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 50)); // "You ordered 10 droids worth 5000 credits!"
