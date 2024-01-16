function getDrink(type) {
    var drinks = {
        coke: "Coke",
        pepsi: "Pepsi",
        lemonade: "Lemonade",
        default: "Default item",
    };
    return "The drink I chose was " + (drinks[type] || drinks["default"]);
}

var drinks = getDrink("pepsi");
// The drink I chose was Coke
console.log(drinks);

function getDrink(type) {
    return (
        "The drink I chose was " +
        {
            coke: "Coke",
            pepsi: "Pepsi",
            lemonade: "Lemonade",
        }[type]
    );
}
const drink = getDrink("coke");
console.log(drink);
