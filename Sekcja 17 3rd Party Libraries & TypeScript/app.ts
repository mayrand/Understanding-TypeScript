import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];
const chunk = _.chunk(numbers, 2);
console.log(chunk);