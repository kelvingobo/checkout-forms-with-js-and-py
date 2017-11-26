var options = document.querySelectorAll('input[type=checkbox]');
for(var i = 0; i < options.length; i++) {
  options[i].addEventListener('change', calculateTotal);
}

function calculateTotal(){
  var sT = document.getElementById('subTotal');
  var s = document.getElementById('shippingFee');
  var t = document.getElementById('total');
	var subTotal = sT.innerText;
	var shipping = s.innerText;
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
	sT.innerText = subTotal;
	t.innerText = subTotal + shipping;
}
