/*! romanise - converts decimal numbers to roman numerals
* Author: Ian Devlin, 2015
* Version: 0.1.0
* License: MIT
*/
'use strict';
var romanise = {
    vars: {
        roman: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        decimal: [1000,900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        romanNumeral: '',
        numThousands: 0,
        romanO : 0,
        thousandsO: 0,
        thBase: '',
        thousandString: ''
    },
    getRoman: function(decimal) {
        this.vars.romanNumeral = '';
        this.vars.numThousands = 0;
        for (var i = 0; i < this.vars.roman.length; i++) {
            if (decimal === 0) {
                break;
            }
            while (decimal >= this.vars.decimal[i]) {
                decimal -= this.vars.decimal[i];
                this.vars.romanNumeral += this.vars.roman[i];
                if (this.vars.roman[i] === 'M') {
                    this.vars.numThousands++;
                }
            }
        }
        return { 
            numThousands : this.vars.numThousands,
            romanNumeral : this.vars.romanNumeral
        };
    },
    convert: function(decimal) {
        // 3,999,999 is the generally regarded as the longest number that can be represented by Roman numerals
        if (decimal <= 0 || decimal > 3999999) {
            return decimal;
        }
        this.vars.romanO = this.getRoman(decimal);
        // If the number is 4000 or greater...
        if (this.vars.romanO.numThousands > 4) {
            this.vars.thousandString = '';
            for (var j = 0; j < this.vars.romanO.numThousands; j++) {
                this.vars.thousandString += 'M';
            }
            this.vars.thousandsO = this.getRoman(this.vars.romanO.numThousands);
            this.vars.thBase = '<span style="border-top:1px solid #000">' + this.vars.thousandsO.romanNumeral + '</span>';
            this.vars.romanNumeral = this.vars.romanO.romanNumeral.replace(this.vars.thousandString, this.vars.thBase);
        } else {
            this.vars.romanNumeral = this.vars.romanO.romanNumeral;
        }
        return this.vars.romanNumeral;
    }
};