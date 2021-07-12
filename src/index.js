import { compose, pipe } from 'lodash/fp/';


let input = "   JavaScript   ";

const trim = str => str.tim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input)