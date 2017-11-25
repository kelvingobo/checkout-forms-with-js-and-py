var options = document.querySelectorAll('input[type=checkbox]');
for(var i = 0; i < options.length; i++) {
  options[i].addEventListener('change', calculateTotal);
}

function calculateTotal(){
	var subTotal = document.getElementById('subTotal').innerText;
	subTotal = parseInt(subTotal);
	for(var i = 0; i < options.length; i++) {
		var opt = options[i];
		console.log(opt.id);
		if(opt.checked && (opt.id == 'yam')) {
      subTotal += 150;
      console.log(subTotal);
    }
		if(opt.checked && (opt.id == 'fish')) {
      subTotal += 50;
      console.log(subTotal);
    }
  }
	document.getElementById('subTotal').innerText = subTotal;
}
