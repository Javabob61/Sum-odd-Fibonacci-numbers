function sumFibs(num) {
  // This function adds all the "odd" numbered Fibonacci numbers that are less than the specified number num.
  // i.e. for num = 4, 1,1,2,3 the numbers added are 1,1,3. So the answer is 5.  To determine if a number is odd, use modulus.
  //
  var fibArray = [0, 1]; 
  var i = 2;
  var myCount = 0;
  var total = 0;

  do {    
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
    myCount = fibArray[i];
    i++;
  } while (myCount < num);
  
    for (var j = 0;; j++) {    
      
      if (fibArray[j] > num) {
      break;
      }
    
      if (fibArray[j] % 2 === 1) {
      total = total + fibArray[j];
      }    
  }
  
  console.log(total);  

  return total;
}

sumFibs(4);