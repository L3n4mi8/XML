function enviarformulario() {
    //capturar información del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const anio = document.getElementById("anio").value;
    const telefono = document.getElementById("telefono").value;

    //crear un documento XML
    const xmlData = `
        <usuario>
            <nombre>${nombre}</nombre>
            <email>${email}</email>
            <anio>${anio}</anio>
            <telefono>${telefono}</telefono>
        </usuario>
        `;

    //almacenar el xml en un local storage
    localStorage.setItem("usuarioXML", xmlData);


    //redirigir la visualización
    window.location.href = "visualizar.html";

    //Envitar que el formularo se envie de la manera tradicional
    return false;
}
