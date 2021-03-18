"use strict";
exports.__esModule = true;
exports.calculo = void 0;
var calculo = function (n, aux) {
    if (aux === void 0) { aux = 0; }
    if (n === 0) {
        return aux;
    }
    return exports.calculo(n - 1, aux + n);
};
exports.calculo = calculo;
// Exemplos de uso:
console.log(exports.calculo(4));
