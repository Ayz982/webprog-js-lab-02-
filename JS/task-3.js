//Функція знаходження загальної ширини елемента
function getElementWidth(content, padding, border){
    let contentValue = parseFloat(content);
    let paddingValue = parseFloat(padding);
    let borderValue = parseFloat(border);
    let result = contentValue + paddingValue * 2 + borderValue * 2;
    if (confirm("Бажаєте побачити результат?")) {
        alert("Результат: " + result);
    }
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200