function skills() {
  let arraySkills = Array.from(
    document.querySelectorAll(".skills__container__two-cards")
  );

  console.log(arraySkills);

  let index = 0;
  recorrerArray(arraySkills, index);

  const anterior = document.querySelector(
    ".skills__container__anterior-skills"
  );
  const siguiente = document.querySelector(
    ".skills__container__siguiente-skills"
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
