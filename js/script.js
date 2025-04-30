function enviarElementos() {
    const nombre = document.getElementById("nombre");
    const fecha = document.getElementById("fecha");
    const lugar = document.getElementById("lugar");
    const cantidad = document.getElementById("cantidad");
    const categoria = document.getElementById("categoria");
    const metodoPago = document.querySelector('input[name="metodo"]:checked');
    const acepto = document.getElementById("acepto");

    // Mostrar en consola los valores de los campos
    console.log(nombre.value);
    console.log(lugar.value);
    console.log(cantidad.value);
    console.log(categoria.value);
    console.log(metodoPago ? metodoPago.value : "No seleccionado");
    console.log(acepto.checked);

    // Validar que los campos estén completos
    if (!nombre.value || !fecha.value || !lugar.value || !cantidad.value || !categoria.value || !metodoPago || !acepto.checked) {
        alert("Por favor, completa todos los campos y acepta los términos.");
        return;
    }

    // Guardar los datos en sessionStorage
    sessionStorage.setItem("nombre", nombre.value);
    sessionStorage.setItem("fecha", fecha.value);
    sessionStorage.setItem("lugar", lugar.value);
    sessionStorage.setItem("cantidad", cantidad.value);
    sessionStorage.setItem("categoria", categoria.value);
    sessionStorage.setItem("metodoPago", metodoPago.value);

    // Redirigir a la página de confirmación
    window.location.href = "../confirmacion.html";
}

// Este bloque se ejecuta SOLO en confirmacion.html
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("confirmacion.html")) {
        document.getElementById("nombreDeUsuario").textContent = sessionStorage.getItem("nombre") || "";
        document.getElementById("fechaYlugar").textContent = (sessionStorage.getItem("fecha") || "") + " - " + (sessionStorage.getItem("lugar") || "");
        document.getElementById("Cantidad").textContent = sessionStorage.getItem("cantidad") || "";
        document.getElementById("categoria").textContent = sessionStorage.getItem("categoria") || "";
        document.getElementById("metodoDePago").textContent = sessionStorage.getItem("metodoPago") || "";
    }
});


