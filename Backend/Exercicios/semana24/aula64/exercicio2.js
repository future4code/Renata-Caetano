// Examples
// aabbb -> a2b3
// aabcccccaaa -> a2b1c5a3
// accurate -> accurate (pois retornaria uma string maior do que a orginal)
// escola -> escola (pois retornaria uma string maior do que a orginal)
// accuraaaaaaaaaate -> a1c2u1r1a10t1e1
var compressString = function (input) {
    var substrings = [];
    var lastChar = input[0];
    var charCount = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }
    substrings.push(lastChar + charCount);
    var result = "";
    for (var _a = 0, substrings_1 = substrings; _a < substrings_1.length; _a++) {
        var key = substrings_1[_a];
        result += key;
    }
    return result.length > input.length ? input : result;
};
console.log(compressString("aabbb"));
console.log(compressString("aabcccccaaa"));
console.log(compressString("accurate"));
console.log(compressString("escola"));
console.log(compressString("accuraaaaaaaaaate"));
