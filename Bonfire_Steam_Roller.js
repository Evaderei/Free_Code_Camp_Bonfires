function steamroller(arr) {
  // I'm a steamroller, baby
  var newArr = [];
    function rollingPin(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          rollingPin(arr[i]);
                    console.log(arr[i] + " is being rerolled as a function.");

        }
        else {
           newArr.push(arr[i]);
          console.log(arr[i] + " is pushed to newArr[]");
        }
      }
    }
  rollingPin(arr);
    
    return newArr;
}

steamroller([1, [2], [3, [[4]]]]);
