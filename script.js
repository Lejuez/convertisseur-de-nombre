function conversion(){
	decimal = document.getElementById("decimal");
	hexadecimal = document.getElementById("hexa");
	binaire = document.getElementById("binaire");

	if (decimal.value!=''){
		DecimalToBin();
		DecimalToHex();
	}
	if (binaire.value!=''){
		BinaryToDecimal();
		BinaryToHex();
	}
	if (hexa.value!=''){
		HexadecimalToDecimal();
		HexadecimalToBin();
	}
}
function DecimalToHex(){
	hexadecimal.value =parseInt(decimal.value,10).toString(16);
}
function DecimalToBin(){
	binaire.value = parseInt(decimal.value, 10).toString(2);
}
function HexadecimalToDecimal(){
	decimal.value = parseInt(hexadecimal.value, 16);
}
function HexadecimalToBin(){
	binaire.value = (parseInt(hexadecimal.value, 16)).toString(2);
}
function BinaryToDecimal(){
	decimal.value = parseInt(binaire.value, 2);
}
function BinaryToHex(){
	hexadecimal.value = (parseInt(binaire.value, 2)).toString(16);
}

function reset(){
	decimal.value = '';
	binaire.value = '';
	hexadecimal.value = '';
}
