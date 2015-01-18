Romanise
==============

Small library that converts decimal numbers to Roman numerals.

## Usage

Add `romanise.js` or `romanise.min.js` to your page.
Call `romanise.convert()` on the value in question, e.g. `romanise.convert(2015)` will return MMXV.

## Notes

1. If the decimal number is greater than 3,999,999 (the largest number that can be represented by Roman numerals), no conversion will take place
2. It uses the "horizontal overline" method for representing numbers that are 4,000 and greater, where a horizontal line is displayed above a particular numeral to indicate that the numeral is to be multiplied by one thousand times. This is achieved by enclosing the numeral in question with a `<span style="border: 1px solid #000"></span>`