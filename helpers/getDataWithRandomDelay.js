function getDataWithRandomDelay(data){
  const delay = Math.random() * 400 + 250; // от 100 до 500 мс

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

module.exports = {
  getDataWithRandomDelay
}
