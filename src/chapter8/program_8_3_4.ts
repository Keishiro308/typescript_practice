const p = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
});

p.then((data) => {
  console.log(data);
});