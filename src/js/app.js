/* eslint-disable no-console */
import Validator from './modules/validator';

const validator = new Validator();
console.log(`Roman - ${validator.validateUsername('Roman')}`);
console.log(`Ro-Man_bb - ${validator.validateUsername('Ro-Man_bb')}`);
console.log(`Roman-88_TT - ${validator.validateUsername('Roman-88_TT')}`);
console.log(`Ro-M_a888n - ${validator.validateUsername('Ro-M_a888n')}`);
console.log(`1Roman - ${validator.validateUsername('1Roman')}`);
console.log(`Roman2 - ${validator.validateUsername('Roman2')}`);
console.log(`_Roman - ${validator.validateUsername('_Roman')}`);
console.log(`Roman_ - ${validator.validateUsername('Roman_')}`);
console.log(`Ro0000man - ${validator.validateUsername('Ro0000man')}`);
