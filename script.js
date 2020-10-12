
function minimum(a,b){
  if(a === b || a < b){
      return a;
  }
  else {
      return b;
  }
}

function maximum(a,b){
  if(a === b || a > b){
      return a;
  }
  else{
      return b;
  }
}

function reduce(numbers, fn){
  if(numbers.length < 2){
      return null;
  }
  else if(numbers.length === 2){
      result = fn(numbers[0],numbers[1]);
      return result;
  }
  else{
      result = fn(numbers[0],numbers[1]);
      for (let index = 2; index < numbers.length ; index++) {
          resultNext = fn(result,numbers[index]);
          result = resultNext;
      }
      return result;
  }
}

function filter(numbers, fn){
  i = 0;
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
      if (fn(numbers[index]) === true){
          result[i] = numbers[index];
          i++;
      }
  }
  return result;
}

//Test
const myTestNumbers = [5,8,13,21,34,610,55,3,89,144,233,377];
console.log(reduce(myTestNumbers,minimum));
console.log(reduce(myTestNumbers,maximum));
console.log(filter(myTestNumbers, (num) => {
  if(num >= 30){
      return true;
  }
  else{
      return false;
  }
}));


