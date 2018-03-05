// first 10 even fibonacci Numbers
"use strict";
function fib_even(limit){
  var fib = [2,8];
  var a, b ,c=0, i=2;
  a = fib[0];
  b = fib[1];

  while (c < limit) {
    c = 4*b + a;
    if (c<=limit) {
      fib[i] = c;
    }
    a = b;
    b = c;
    i++;
  }
  return fib;
}



var fib_list = fib_even(4000000);
console.log(fib_list);

var sum =0, i = 0;
while (i<=10) {
  sum = sum + fib_list[i];
  i++;
}
console.log(sum);













//
