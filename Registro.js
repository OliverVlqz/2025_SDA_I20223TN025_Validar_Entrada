document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formEmpresa");
  const btnRegistrar = document.getElementById("btnRegistrar");

  const razonSocial = document.getElementById("razonSocial");
  const rfc = document.getElementById("rfc");
  const telefono = document.getElementById("telefono");
  const correo = document.getElementById("correo");
  const contacto = document.getElementById("contacto");

  const errorRazonSocial = document.getElementById("errorRazonSocial");
  const errorRFC = document.getElementById("errorRFC");
  const errorTelefono = document.getElementById("errorTelefono");
  const errorCorreo = document.getElementById("errorCorreo");
  const errorContacto = document.getElementById("errorContacto");

  function validarFormulario() {
    let isValid = true;

    // Limpiar mensajes previos
    errorRazonSocial.textContent = "";
    errorRFC.textContent = "";
    errorTelefono.textContent = "";
    errorCorreo.textContent = "";
    errorContacto.textContent = "";

    // Validar Razón Social
    if (razonSocial.value.trim().length < 3) {
      errorRazonSocial.textContent =
        "La razón social debe tener al menos 3 caracteres.";
      isValid = false;
    }

    // Validar RFC (Formato mexicano)
    const rfcRegex = /^[A-ZÑ&]{3,4}\d{6}[A-Z\d]{3}$/;
    if (!rfcRegex.test(rfc.value.trim())) {
      errorRFC.textContent = "Ingrese un RFC válido (Ejemplo: ABCD123456XYZ).";
      isValid = false;
    }

    // Validar Teléfono (Formato MX)
    const telefonoRegex = /^(\d{2,3}-?)?\d{4}-?\d{4}$/;
    if (!telefonoRegex.test(telefono.value.trim())) {
      errorTelefono.textContent =
        "Ingrese un teléfono válido (Ejemplo: 55-1234-5678).";
      isValid = false;
    }

    // Validar Correo Electrónico
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo.value.trim())) {
      errorCorreo.textContent =
        "Ingrese un correo válido (Ejemplo: usuario@dominio.com).";
      isValid = false;
    }

    // Validar Contacto
    if (contacto.value.trim().length < 3) {
      errorContacto.textContent =
        "El nombre del contacto debe tener al menos 3 caracteres.";
      isValid = false;
    }

    // Habilitar o deshabilitar botón
    btnRegistrar.disabled = !isValid;
  }

  // Validar mientras el usuario escribe
  razonSocial.addEventListener("input", validarFormulario);
  rfc.addEventListener("input", validarFormulario);
  telefono.addEventListener("input", validarFormulario);
  correo.addEventListener("input", validarFormulario);
  contacto.addEventListener("input", validarFormulario);

  // Validar al enviar el formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validarFormulario();

    if (!btnRegistrar.disabled) {
      alert("Registro exitoso");
      form.submit();
    }
  });
});
