var roman = [
    {n: 50, r: 'L'},
    {n: 40, r: "XL"},
    {n: 10, r: "X"},
    {n: 9, r: "IX"},
    {n: 5, r: "V"},
    {n: 4, r: "IV"},
    {n: 1, r: "I"},
    {n: 0, r: ""}
];

module.exports = function convert(number) {

    if(number>=roman[0].n) return roman[0].r + convert(number-roman[0].n);
    if(number ===roman[1].n) return roman[1].r;

    if(number>=roman[2].n) return roman[2].r + convert(number-roman[2].n);
    if(number ===roman[3].n) return roman[3].r;

    if(number>=roman[4].n) return roman[4].r + convert(number-roman[4].n);
    if(number ===roman[5].n) return roman[5].r;

    if(number>=roman[6].n) return roman[6].r + convert(number-roman[6].n);
    return '';
};
