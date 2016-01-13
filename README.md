
# Phoneify
A very simple module that can parse an input to a readble, clean format for phone numbers.

## Installation
Through [npm](https://www.npmjs.com/package/phoneify):
```bash
$ npm install phoneify
```

## API Documentation:
There's only one function implemented:
```js
// input will be the phone number
var input = 12345678901;
console.log(phoneify(input));
```
You can choose to either include the leading "1" at the beginning of the phone number or leave it. But the length, initially, should be either 10 or 11 characters long.

Example output (will always return an object):
```json
{
    "original": 12345678901,
    "removeInitialNumber": 2345678901,
    "withPlus": +12345678901,
    "countryCodeIntact": {
        "addParentheses": 1 (234) 567 8901,
        "addDashes": 1-234-567-8901,
        "addParenthesesWithDashes": 1-(234)-567-8901,
        "addDots": 1.234.567.8901,
        "addSlashes": 1/234/567/8901
        },
    "countryCodeRemoved": {
        "addParentheses": (234) 567 8901,
        "addDashes": 234-567-8901,
        "addParenthesesWithDashes": (234)-567-8901,
        "addDots": 234.567.8901,
        "addSlashes": 234/567/8901
        }
}
```

## License
MIT.