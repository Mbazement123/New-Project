const assert = require('assert');

function add(a, b) {
  return a + b;
}

assert.strictEqual(add(2, 3), 5, 'Expected add(2, 3) to equal 5');
console.log('✅ Basic arithmetic test passed.');
