function isPrime(num) {
  if (num % 2 !== 0 && num % 3 !== 0) {
    const box = true;
    console.log(box, `${num} is  prime`);
  }
  if (num % 2 === 0 || num % 3 === 0) {
    const box = false;
    console.log(box, `${num} is not prime`);
  }

  if (num === 2 && 2 / 1) {
    const box = true;
    console.log(box, `${num} is  prime`);
  }
}
isPrime(25);
