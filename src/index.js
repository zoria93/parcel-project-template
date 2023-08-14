function order(words) {
  const data = words.split('').join('');

  console.log(data);

  for (const dat of data) {
    const dodo = Number.isNaN(dat);
    console.log(dodo);
  }
}

order('is2 Thi1s T4est 3a');
