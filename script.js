const promises = [];

function getRandomDelay() {
  return Math.floor(Math.random() * 5) + 1;
}

for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const delay = getRandomDelay();
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${delay} seconds`);
    }, delay * 1000);
  });
  promises.push(promise);
}

window.promises = promises;
