class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SAUCE = { price: 15, calories: 0 };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    changeSize(size) {
    this.size = size;
    }

    changeStuffing(stuffing) {
        this.stuffing = stuffing;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        const index = this.toppings.findIndex(item => item === topping);
        if (index !== -1) {
        this.toppings.splice(index, 1);
        }
    }

    calculatePrice() {
        const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
        return this.size.price + this.stuffing.price + toppingsPrice;
    }

    calculateCalories() {
        const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
        return this.size.calories + this.stuffing.calories + toppingsCalories;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());


// hamburger.removeTopping(Hamburger.TOPPING_SAUCE);
// console.log(hamburger.calculatePrice());
