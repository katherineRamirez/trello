//al dar click en a crear un textarea
var botonAñadir = document.getElementById("boton");
var contenedor = document.getElementById("contenedor3");
var nuevoContenedor = document.getElementById("contenedor4");
var contenedor5 = document.getElementById("contenedor5");

botonAñadir.addEventListener("click", function(){

    botonAñadir.setAttribute("style","visibility:hidden");

    var input = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Añade Tarea");
    input.classList.add("class", "input_principal");

    input.value;

    //creando boton
    var btn = document.createElement("button");
    //añadiendo id al boton creado, para hacer un addEventListener del botón guardar
    btn.setAttribute("id", "guardar");
    var text_btn = document.createTextNode("Guardar");
    btn.classList.add("class","clase_boton_guardar");

     //asignando hijos al padre
    contenedor.appendChild(input);
    btn.appendChild(text_btn);
    contenedor.appendChild(btn);

    contenedor.classList.add("class","clase_contenedor");

    var btn_guardar =document.getElementById("guardar");

    btn_guardar.addEventListener("click",function(){


        var contenedor_usuario = document.createElement("div");
        contenedor_usuario.classList.add("class","clase_div_contenedor");
        var titulo_usuario = document.createElement("p");
        var text_titulo_usuario = document.createTextNode(input.value);
        // crear un add para añadir tarjeta
        var a = document.createElement('a');
        // crear atributo a add
        a.setAttribute('href', '#');
        var textAdd = document.createTextNode('Añadir tarjeta');
        a.classList.add("class","clase_a");

        a.appendChild(textAdd);
        titulo_usuario.appendChild(text_titulo_usuario);
        contenedor_usuario.appendChild(titulo_usuario);
        contenedor_usuario.appendChild(a);
        nuevoContenedor.appendChild(contenedor_usuario);

    a.addEventListener("click",function(){

        a.setAttribute("style","visibility:hidden");

        var divTarjeta = document.createElement("div");
        divTarjeta.classList.add("class","clase_divTarjeta");
        var formulario = document.createElement("form");
        var textarea = document.createElement("textarea");
        textarea.classList.add("class","clase_textarea");
        var btn_añadir = document.createElement("button");

        btn_añadir.setAttribute("id", "añadir");
        var text_btn_añadir = document.createTextNode("Añadir");
        btn_añadir.classList.add("class","clase_btn_añadir");

        btn_añadir.appendChild(text_btn_añadir);
        formulario.appendChild(btn_añadir);
        formulario.appendChild(textarea);
        divTarjeta.appendChild(formulario);
        contenedor5.appendChild(divTarjeta);


    })
    })
    })