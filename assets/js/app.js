window.onload = function() {
	document.getElementById("formulario").style.opacity = "0";
}
function ocultar(){
	document.getElementById("add").style.opacity = "0";
}
function mostrar(){
	document.getElementById("formulario").style.opacity = 1;
}

	var sendButton = document.getElementById("add");
sendButton.onclick = function(){
	document.getElementById("formulario").style.opacity = 1;	
	document.getElementById("add").style.opacity = "0"; 

}
