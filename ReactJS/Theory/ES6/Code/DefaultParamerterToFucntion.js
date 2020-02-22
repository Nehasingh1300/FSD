// When you provide Default value to parameter of function when you dont provide value as parameter but it takes defalut value

var getValue = function(value=10){
  console.log(value);
};
getValue();
getValue(1000);
