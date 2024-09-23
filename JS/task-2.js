//Функція повернення рядка з повідомленням про доставку товару в країну користувача:
function getShippingMessage(country, price, deliveryFee){
    let totalPrice = price + deliveryFee;
    let result = `Shipping to ${country} will cost ${totalPrice} credits`;
    if (confirm("Бажаєте побачити результат?")) {
        alert("Результат: " + result);
    }
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"