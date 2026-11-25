console.log("Landing page lista");

function enviarContacto(evento){
    evento.preventDefault();

    let nombre = document.getElementById("cNombre").value.trim();
    let correo = document.getElementById("cCorreo").value.trim();
    let mensaje = document.getElementById("cMensaje").value.trim();
    let aviso = document.getElementById("mensajeForm");

    aviso.className = "form-msg";

    if(nombre === "" || correo === "" || mensaje === ""){
        aviso.innerText = "Completa todos los campos.";
        aviso.classList.add("error");
        return;
    }

    if(!correo.includes("@") || !correo.includes(".")){
        aviso.innerText = "Ingresa un correo válido.";
        aviso.classList.add("error");
        return;
    }

    let asunto = "Contacto desde la web de SonoMapa: " + nombre;
    let cuerpo = "Entidad: " + nombre + "\nCorreo: " + correo + "\n\n" + mensaje;

    window.location.href = "mailto:hola@sonomapa.pe?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);

    aviso.innerText = "¡Gracias! Se abrirá tu correo para enviar el mensaje.";
    aviso.classList.add("ok");
}
