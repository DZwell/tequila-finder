const tequilas = require('./tequilas.json');
const approvedTequilas = require('./tequila-list');

const subset = tequilas.filter(x => {
  const tequila = x.brand.name.toUpperCase();
  return approvedTequilas.find(a => {
    const upperCased = a.toUpperCase();
    const stringArr = upperCased.split(' ');
    return stringArr.includes(tequila);
  })
}).map(z => z.brand.name);

console.log(new Set(subset));

