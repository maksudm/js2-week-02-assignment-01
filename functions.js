const findTheNumberOfOddNumbers = (arr) => {
  let oddNumberArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddNumberArr.push(arr[i]);
    }
  }
  return oddNumberArr.length;
};

const getIndexOfFalseItem = (arr) => {
  let index = arr.indexOf(false)
  return index;
};

const filterNumbers = (arr) => {
  let result = arr.filter(elem => {
    return typeof elem == 'number';
  })
  return result;
};

const generateEmailAddress = (arr) => {
  let emailArr = [];
  for (let i = 0; i < arr.length; i++) {
    let email = arr[i].toLowerCase() + '@gmail.com';
    emailArr.push(email);

  }
  return emailArr;
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
