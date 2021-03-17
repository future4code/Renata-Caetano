var integerNumberDec = function (input) {
    //let CountNumber= 0
    if (input >= 0) {
        console.log(input);
        integerNumberDec(input - 1);
    }
};
integerNumberDec(3);
