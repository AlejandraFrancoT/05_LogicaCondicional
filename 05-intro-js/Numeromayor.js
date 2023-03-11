var n1,n2,n3,t,mayor;
    console.log(n1, n2, n3);

	var n1 = parseInt(prompt("¿Cuál es el primer número?"));
	var n2 = parseInt(prompt("¿Cuál es el segundo número?"));
	var n3 = parseInt(prompt("¿Cuál es el tercer número?"));

	if (n1 > n2) {
		t = n1;
	}else{
		t = n2;
	}

	if (t > n3) {
		mayor = t;
	}else{
		mayor = n3;
	}

	alert("El mayor es "+mayor);