const url = require('url');

const adr = 'http://localhost:8080/default.htm?year=2020&month=december';
const q = url.parse(adr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default/htm'
console.log(q.search); // reurns '?year=2020&month=december'

const qdata = q.query; // returns an object: {year: 2020, month: 'december'}
console.log(qdata.month); // returns 'december'