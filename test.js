var expect = require("chai").expect;
var convert = require("./index");

var isolatedNumbers = [
    { n:1, r : "I"},
    { n:2, r : "II"},
    { n:3, r : "III"},
    { n:4, r : "IV"},
    { n:5, r : "V"},
    { n:6, r : "VI"},
    { n:7, r : "VII"},
    { n:8, r : "VIII"},
    { n:9, r : "IX"},
    { n:10, r : "X"},
    { n:11, r : "XI"},
    { n:12, r : "XII"},
    { n:30, r : "XXX"},
    { n:40, r : "XL"},
    { n:50, r : "L"}
];

describe("Roman Numeral", function() {
    isolatedNumbers.forEach(function(test) {
        it('should return ' + test.r + ' for ' + test.n , function () {
            expect(convert(test.n)).to.equal(test.r);
        });
    });
});


