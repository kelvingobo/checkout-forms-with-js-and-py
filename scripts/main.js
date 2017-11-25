var options = document.querySelectorAll('input[type=checkbox]');
for(var i = 0; i < options.length; i++) {
  options[i].addEventListener('change', calculateTotal);
}

function calculateTotal(){
	var subTotal = document.getElementById('subTotal').innerText;
	var shipping = document.getElementById('shippingFee').innerText;
	subTotal = parseInt(subTotal);
	shipping = parseInt(shipping);
	for(var i = 0; i < options.length; i++) {
		var opt = options[i];
		console.log(opt.id);
		if(opt.checked && (opt.id == 'fish')) {
      subTotal += 50;
      console.log(subTotal);
    }
		else {
			subTotal -= 50;
		}
  }
	document.getElementById('subTotal').innerText = subTotal;
	document.getElementById('total').innerText = subTotal + shipping;
}
