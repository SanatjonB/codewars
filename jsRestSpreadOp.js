// Challenge for You
// Create two arrays, nums1 and nums2, and merge them using the spread operator.
// Write a function getInfo that takes a user object with name, age, and additional properties.
// Destructure name and age and collect the rest into a variable called otherDetails.
// Log them separately.
const nums1 = [5, 5, 2, 1, 2, 5];
const nums2 = [2, 2, 5, 1, 52, 4];
const mergedNums = [...nums1, ...nums2];
console.log("Merged numbers " + mergedNums);
const user = {
  name: "Sanat",
  age: 20,
  hobby: "gaming",
  works: true,
};

const getInfo = (user) => {
  const { name, age, ...additionalInfo } = user;
  return `Name: ${name}, Age: ${age}, Additional Info: ${JSON.stringify(
    additionalInfo
  )}`;
};
