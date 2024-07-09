function emailValidation() {
  const emailField = document.getElementById('email');
  const emailConfirmField = document.getElementById('email_confirm');
  const mensajeId = 'alert';
  const MensajeError = () => {
    let mensaje = document.getElementById(mensajeId);
    if (!mensaje) {
      mensaje = document.createElement('p');
      mensaje.textContent = "El correo electrónico no coincide";
      mensaje.setAttribute('id', mensajeId);
      mensaje.classList.add("alert");
      const contenidotr = emailConfirmField.closest('tr');
      contenidotr.parentNode.insertBefore(mensaje, contenidotr.nextSibling);
    }
  };
  const ocultarError = () => {
    const mensaje = document.getElementById(mensajeId);
    if (mensaje) {
      mensaje.parentNode.removeChild(mensaje);
    }
  };
  const confirmarcorreos = () => {
    if (emailField.value !== emailConfirmField.value) {
      emailConfirmField.classList.add("alertas_fondo");
      MensajeError();
    } else {
      emailConfirmField.classList.remove("alertas_fondo");
      ocultarError();
    }
  };
  emailConfirmField.addEventListener('input', confirmarcorreos);
  confirmarcorreos();
}

window.onload = emailValidation;