// Functions as first class citizens

function sayHello() {
    return function () {
        return "Hello World!"
    }
}

let fn = sayHello();
let message = fn();

// Functional Composition

let input = "   JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));