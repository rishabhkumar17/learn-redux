// Functions as first class citizens

function sayHello() {
    return function () {
        return "Hello World!"
    }
}

let fn = sayHello();
let message = fn();

// Functional Composition
import { compose, pipe } from "lodash/fp";

let input = "   JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// const result = wrapInDiv(toLowerCase(trim(input)));

// const transform = compose(wrapInDiv, toLowerCase, trim);
// transform(input);

// const transformUsingPipe = pipe(trim, toLowerCase, wrapInDiv);
const transformUsingPipe = pipe(trim, toLowerCase, wrap("div"));
const res = transformUsingPipe(input);

// updating objects

const person = { name: "sage" };
// const updated = { ...person, name: "sage" }; // shallow copy
const updated = Object.assign({}, person, { age: 700 }); // shallow copy

console.log(person);
console.log(updated);