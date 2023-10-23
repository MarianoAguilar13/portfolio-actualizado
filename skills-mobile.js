function skills() {
  let arraySkills = Array.from(document.querySelectorAll(".card-skill-mobile"));

  let index = 0;
  recorrerArray(arraySkills, index);

  const anterior = document.querySelector(
    ".skills__container__anterior-skills-mobile"
  );
  const siguiente = document.querySelector(
    ".skills__container__siguiente-skills-mobile"
  );

  siguiente.addEventListener("click", (e) => {
    e.preventDefault();

    index++;

    if (index >= arraySkills.length) {
      index = 0;
      recorrerArray(arraySkills, index);
    } else {
      recorrerArray(arraySkills, index);
    }
  });

  anterior.addEventListener("click", (e) => {
    e.preventDefault();

    index--;

    if (index < 0) {
      index = arraySkills.length - 1;
      recorrerArray(arraySkills, index);
    } else {
      recorrerArray(arraySkills, index);
    }
  });
}

function recorrerArray(arraySkills, index) {
  arraySkills.forEach((skill, indice) => {
    if (indice == index) {
      skill.style.display = "flex";
    } else {
      skill.style.display = "none";
    }
  });
}

skills();
