const malla = document.getElementById("malla");

const ciclos = [
  {
    numero: 1,
    cursos: [
      "Biología",
      "Desempeño Universitario",
      "Introducción a la Enfermería",
      "Lengua y Comunicación",
      "Matemática General",
      "Química General",
      "Identidad Personal y Profesional del Enfermero"
    ]
  },
  {
    numero: 2,
    cursos: [
      "Química Orgánica",
      "Estadística General",
      "Morfofisiología 1",
      "Psicología General",
      "Educación Ambiental",
      "Realidad Nacional",
      "Inglés"
    ]
  },
  {
    numero: 3,
    cursos: [
      "Bioquímica",
      "Biofísica",
      "Liderazgo en Enfermería",
      "El Cuidado de Enfermería",
      "Morfofisiología 2"
    ]
  },
  {
    numero: 4,
    cursos: [
      "Enfermería Quirúrgica",
      "Enfermería en Crecimiento y Desarrollo",
      "Microbiología y Parasitología - Enfermería",
      "Nutrición y Dietética en Enfermería"
    ]
  },
  {
    numero: 5,
    cursos: [
      "Enfermería en la Salud de la Mujer y el Recién Nacido",
      "Enfermería Familiar y Comunitaria",
      "Farmacología Aplicada a la Enfermería",
      "Epidemiología Aplicada a la Enfermería"
    ]
  },
  {
    numero: 6,
    cursos: [
      "Bioética",
      "Enfermería en Emergencias y Desastres",
      "Enfermería en la Salud del Niño y Adolescente",
      "Investigación en Salud"
    ]
  },
  {
    numero: 7,
    cursos: [
      "Enfermería basada en la Evidencia 1",
      "Enfermería en Atención Primaria de Salud",
      "Enfermería en la Salud del Adulto",
      "Enfermería en Salud Mental y Psiquiatría"
    ]
  },
  {
    numero: 8,
    cursos: [
      "Gestión en los Servicios de Enfermería",
      "Enfermería en Salud del Adulto Mayor",
      "Seminario de Tesis 1",
      "Enfermería en Salud Ambiental"
    ]
  },
  {
    numero: 9,
    cursos: [
      "Internado 1",
      "Enfermería Basada en la Evidencia 2"
    ]
  },
  {
    numero: 10,
    cursos: [
      "Casos Clínicos – Enfermería",
      "Internado 2",
      "Seminario de Tesis 2"
    ]
  }
];

ciclos.forEach(ciclo => {
  const div = document.createElement("div");
  div.className = "ciclo";
  div.innerHTML = `<h2>Ciclo ${ciclo.numero}</h2>`;
  
  ciclo.cursos.forEach(curso => {
    const cursoDiv = document.createElement("div");
    cursoDiv.className = "curso";
    cursoDiv.textContent = curso;
    div.appendChild(cursoDiv);
  });

  malla.appendChild(div);
});
// Restaurar cursos marcados desde el almacenamiento
document.addEventListener("DOMContentLoaded", () => {
  const marcados = JSON.parse(localStorage.getItem("cursosCursados")) || [];

  marcados.forEach(id => {
    const curso = document.querySelector(`[data-id="${id}"]`);
    if (curso) curso.classList.add("cursado");
  });
});

// Guardar o quitar cursos al hacer clic
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("curso")) {
    e.target.classList.toggle("cursado");

    const id = e.target.dataset.id;
    let marcados = JSON.parse(localStorage.getItem("cursosCursados")) || [];

    if (e.target.classList.contains("cursado")) {
      if (!marcados.includes(id)) marcados.push(id);
    } else {
      marcados = marcados.filter(cursoId => cursoId !== id);
    }

    localStorage.setItem("cursosCursados", JSON.stringify(marcados));
  }
});
