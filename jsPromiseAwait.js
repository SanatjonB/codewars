// Create a function fetchData that returns a promise resolving after 2 seconds with the string "Data fetched successfully".
// Use then/catch to handle the promise and log the result or error.
// Rewrite the same functionality using async/await with proper error handling.
// const fetchData = () => {
//   const myPromise = new Promise((resolve, reject) => {
//     if (success) {
//       resolve("Operation was successful");
//     } else {
//       reject("Operation failed");
//     }
//   });
//   return setTimeout(() => {
//     myPromise;
//   }, 2000);
// };

const fetchData = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Operation failed");
      }
    }, 2000);
  });
  return myPromise;
};
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const fetchDataAsync = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Operation failed");
      }
    }, 2000);
  });
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
