const grid = document.getElementById("grid");

const cursos = [
  "Anatomía", "Fisiología", "Bioquímica", "Enfermería básica",
  "Farmacología", "Psicología", "Nutrición", "Microbiología"
];

cursos.forEach(nombre => {
  const div = document.createElement("div");
  div.textContent = nombre;
  grid.appendChild(div);
});
