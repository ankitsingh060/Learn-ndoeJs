const { readFileSync , writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first,second)

writeFileSync(
    './content/resut_new.txt',
    `Here there is added new file read_new txt ${first}`,
{ flag: 'a'}
)