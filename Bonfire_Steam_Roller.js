var newArr = [];
function steamroller(arr) {
  // I'm a steamroller, baby
  
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      steamroller(arr[i]);
    }
    else {
       newArr.push(arr[i]);
    }
  }
  
  console.log(newArr);
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);
