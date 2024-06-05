var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

services.price = function() {
    let total = 0;
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] === 'string' && this[key].includes('грн')) {
            let price = parseInt(this[key].split(' ')[0]);
            total += price;
        }
    }
    return total + ' грн';
};

services.minPrice = function() {
    let min = Infinity;
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] === 'string' && this[key].includes('грн')) {
            let price = parseInt(this[key].split(' ')[0]);
            if (price < min) {
                min = price;
            }
        }
    }
    return min + ' грн';
};

services.maxPrice = function() {
    let max = -Infinity;
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] === 'string' && this[key].includes('грн')) {
            let price = parseInt(this[key].split(' ')[0]);
            if (price > max) {
                max = price;
            }
        }
    }
    return max + ' грн';
};

console.log("Загальна вартість послуг: " + services.price());
console.log("Мінімальна вартість послуги: " + services.minPrice());
console.log("Максимальна вартість послуги: " + services.maxPrice());