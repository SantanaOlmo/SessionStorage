//cuando se carga la pagina ejecuto el codigo
window.onload = function(){

    if (window.location.pathname === "/index.html"){        
        const boton=document.getElementById("btnEnviar");

        
        boton.addEventListener("click",function(){
            const nombreInput = document.getElementById("nombre");
            const fechaHtml = document.getElementById("fecha");
            const lugarHtml = document.getElementById("lugar");
            const cantidadHtml = document.getElementById("cantidad");
            const categoriaHtml = document.getElementById("categoria");
            const metodoPagoHtml = document.querySelector('input[name="metodo"]:checked');
            const aceptoHtml = document.getElementById("acepto");
            
            // guardo los el contenido de los elementos
            let nombre = nombreInput.value;
            let fecha = fechaHtml.value;
            let lugar = lugarHtml.value;
            let cantidad = cantidadHtml.value;
            let categoria = categoriaHtml.value;
            let metodoPago = metodoPagoHtml ? metodoPagoHtml.value : null; // Manejo por si no hay selección
            let acepto = aceptoHtml.checked;
            
            // guardo la info con sessionStorage
            sessionStorage.setItem("nombre", nombre);
            sessionStorage.setItem("fecha", fecha);
            sessionStorage.setItem("lugar", lugar);
            sessionStorage.setItem("cantidad", cantidad);
            sessionStorage.setItem("categoria", categoria);
            sessionStorage.setItem("metodoPago", metodoPago);
            sessionStorage.setItem("acepto", acepto);
    
            alert("Nombre: " + sessionStorage.getItem("nombre") + 
          "\nFecha: " + sessionStorage.getItem("fecha") + 
          "\nLugar: " + sessionStorage.getItem("lugar") + 
          "\nCantidad: " + sessionStorage.getItem("cantidad") + 
          "\nCategoría: " + sessionStorage.getItem("categoria") + 
          "\nMétodo de pago: " + sessionStorage.getItem("metodoPago") + 
          "\nAcepto: " + sessionStorage.getItem("acepto"));
    
          window.location.href='confirmacion.html';
          // si no pongo el siguiente alert, no se ejecuta la linea anterior
            alert("datos enviados");
        });
        
    }else if(window.location.pathname.endsWith('/confirmacion.html')){
        const btnVolver= document.getElementById("btnVolver");

        btnVolver.addEventListener("click",function(){
            window.location.href="index.html";
            sessionStorage.clear();
        })

        //recojo los nuevos elementos del documento
        let nombreDeUsuario = document.getElementById("nombreDeUsuario");
        let fechaYLugar = document.getElementById("fechaYLugar");
        let cantidad = document.getElementById("Cantidad");
        let categoria = document.getElementById("categoria");
        let metodoDePago = document.getElementById("metodoDePago");
            
        //les añado la info que tenia gaurdada
        nombreDeUsuario.textContent=sessionStorage.getItem("nombre");
        fechaYLugar.textContent = sessionStorage.getItem("fecha")+", "+sessionStorage.getItem("lugar") ;
        cantidad.textContent = sessionStorage.getItem("cantidad");
        categoria.textContent = sessionStorage.getItem("categoria");
        metodoDePago.textContent = sessionStorage.getItem("metodoPago");
        


    }
    
    
}