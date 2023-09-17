
//Var creation for getting the price input and quanity to calc later:
  var priceInput = document.getElementById('txt-price');
  var quantityInput = document.getElementById('txt-quantity');

  //Var to control and initalize the submit buttom and the output field:
  var submitBtn = document.getElementById('btn-submit');
  var output = document.getElementById('output');

  //Even listener waits and comes here when button is pressed or otherwise triggered:
  submitBtn.addEventListener('click', function () {
    var price = priceInput.value;
    var quanity = quantityInput.value;
    price = +price;
    quanity = +quanity;

    // If either of the values are not numbers then it outputs an error in the output. 
    if (Number.isNaN(price) || Number.isNaN(quanity)) {
      output.innerHTML = 'Invalid input';
      return;
    }

    //multiplies the price with the quanity and rounds it. Then displays it to the output: 
    var totalPrice = price * quanity;
    totalPrice = Math.round(totalPrice * 100) / 100;
    output.innerHTML = quanity + ' items at $' + price + ' each is $' + totalPrice;
  });