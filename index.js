const Swal = require("sweetalert2");

function validateEmailName(mail, name) {
  // Define our regular expression.
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Using test we can check if the text match the pattern
  if (validEmail.test(mail)) {
    if (name.length > 4) {
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre no tiene mas de 4 letras, por favor ingrese un nombre válido.",
      });
      return false;
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El email no tiene un formato valido, ejemplo a seguir: miemail@gmail.com",
    });
    return false;
  }
}

async function sendMsj(name, email, msj) {
  const fetchApi = fetch(
    "https://backend-actividad-2-ihc-production.up.railway.app/mail/portfolio",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        mode: "no-cors",
      },

      body: JSON.stringify({
        name,
        email,
        msj,
      }),
    }
  );

  try {
    const res = await fetchApi;
    const result = await res.json();
    Swal.fire("OK", "El mensaje se envio correctamente.", "success");

    if (result) {
      Swal.fire("OK", "El mensaje se envio correctamente.", "success");
    }
  } catch (e) {
    console.log(e.message);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El mensaje no se envio correctamente, espere unos segundo y pruebe nuevamente",
    });
  }
}

function recorrerArray(arrayProjects, index) {
  arrayProjects.forEach((project, indice) => {
    if (indice == index) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

function main() {
  const form = document.querySelector(".contenedor-form__form");

  let arrayProjects = Array.from(
    document.querySelectorAll(".card-project__container")
  );

  let index = 0;
  recorrerArray(arrayProjects, index);

  const anterior = document.querySelector(".projects__container__anterior");
  const siguiente = document.querySelector(".projects__container__siguiente");

  siguiente.addEventListener("click", (e) => {
    e.preventDefault();

    index++;

    if (index >= arrayProjects.length) {
      index = 0;
      recorrerArray(arrayProjects, index);
    } else {
      recorrerArray(arrayProjects, index);
    }
  });

  anterior.addEventListener("click", (e) => {
    e.preventDefault();

    index--;

    if (index < 0) {
      index = arrayProjects.length - 1;
      recorrerArray(arrayProjects, index);
    } else {
      recorrerArray(arrayProjects, index);
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = e.target.nombre.value;
    const email = e.target.email.value;
    const msj = e.target.msj.value;

    if (validateEmailName(email, name)) {
      await sendMsj(name, email, msj);
      form.reset();
    }
  });
}

main();
