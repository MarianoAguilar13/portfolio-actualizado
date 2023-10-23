function main() {
  const botonAbreMenuEl = document.querySelector(
    ".header__visible__boton-desplegar"
  );
  const botonCerrarMenuEl = document.querySelector(
    ".ventana-links__boton-cerrar"
  );
  const menuEl = document.querySelector(".ventana-links");

  const links = document.querySelectorAll(".ventana-links__link");

  botonAbreMenuEl.addEventListener("click", () => {
    menuEl.style.display = "flex";
  });

  botonCerrarMenuEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      menuEl.style.display = "";
    });
  });
}

main();
