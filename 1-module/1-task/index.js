function factorial(n) {
  let fact = 1;
  while(n){
      fact *= n--;
  }
  return fact;
}