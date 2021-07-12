import { compose, pipe } from 'lodash/fp/';


let input = "   JavaScript   ";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("span"));
transform(input)

console.log(transform(input))