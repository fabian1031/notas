// Array inicial con estudiantes
const estudiantes = [
  {
    nombre: "Laura Gómez",
    calificaciones: [4.5, 3.8, 5.0]
  },
  {
    nombre: "Carlos Pérez",
    calificaciones: [3.5, 4.0, 4.2]
  },
  {
    nombre: "Ana Rodríguez",
    calificaciones: [5.0, 4.8, 4.9]
  }
];

// Muestra todos los estudiantes y su info
function mostrarEstudiantes() {
  estudiantes.forEach(est => {
    console.log("Nombre:", est.nombre);
    console.log("Calificaciones:", est.calificaciones.join(", "));
    console.log("Promedio:", calcularPromedio(est.calificaciones));
    console.log("Mejor calificación:", obtenerMejorCalificacion(est.calificaciones));
    console.log("Peor calificación:", obtenerPeorCalificacion(est.calificaciones));
    console.log("");
  });
}

// Calcula promedio
function calcularPromedio(calificaciones) {
  let suma = calificaciones.reduce((a, b) => a + b, 0);
  return (suma / calificaciones.length).toFixed(2);
}

// Devuelve la mayor calificacion
function obtenerMejorCalificacion(calificaciones) {
  return Math.max(...calificaciones);
}

// Devuelve la menor calificacion
function obtenerPeorCalificacion(calificaciones) {
  return Math.min(...calificaciones);
}

// Agrega una calificacion a un estudiante
function agregarCalificacion(nombreEstudiante, nuevaNota) {
  const est = estudiantes.find(e => e.nombre === nombreEstudiante);
  if (est) {
    est.calificaciones.push(nuevaNota);
    console.log("Calificación agregada.");
  } else {
    console.log("Estudiante no encontrado.");
  }
}

// Elimina la última calificacion del estudiante
function eliminarUltimaCalificacion(nombreEstudiante) {
  const est = estudiantes.find(e => e.nombre === nombreEstudiante);
  if (est) {
    if (est.calificaciones.length > 0) {
      est.calificaciones.pop();
      console.log("Calificación eliminada.");
    } else {
      console.log("No hay calificaciones para eliminar.");
    }
  } else {
    console.log("Estudiante no encontrado.");
  }
}

// Filtra estudiantes cuyo promedio sea >= minimo
function filtrarEstudiantesAprobados(minimo) {
  const aprobados = estudiantes.filter(e => parseFloat(calcularPromedio(e.calificaciones)) >= minimo);
  console.log("Estudiantes aprobados:");
  aprobados.forEach(e => console.log(e.nombre));
}

// Ordena los estudiantes alfabeticamente por nombre
function ordenarEstudiantesPorNombre() {
  estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("Estudiantes ordenados por nombre.");
}

// Genera un reporte individual
function generarReporteOriginal(nombreEstudiante) {
  const est = estudiantes.find(e => e.nombre === nombreEstudiante);
  if (est) {
    console.log("Reporte de:", est.nombre);
    console.log("Calificaciones:", est.calificaciones.join(", "));
    console.log("Promedio:", calcularPromedio(est.calificaciones));
    console.log("Mejor calificacion:", obtenerMejorCalificacion(est.calificaciones));
    console.log("Peor calificacion:", obtenerPeorCalificacion(est.calificaciones));
  } else {
    console.log("Estudiante no encontrado.");
  }
}

// Menu principal interactivo por consola
function iniciarGestionCalificaciones() {
  let opcion;
  do {
    opcion = prompt(
      "\nMenú de Calificaciones:\n" +
      "1. Mostrar estudiantes\n" +
      "2. Agregar calificación\n" +
      "3. Eliminar última calificación\n" +
      "4. Filtrar estudiantes aprobados\n" +
      "5. Ordenar estudiantes por nombre\n" +
      "6. Generar reporte individual\n" +
      "7. Salir\n" +
      "Seleccione una opción (1-7):"
    );

    switch (opcion) {
      case "1":
        mostrarEstudiantes();
        break;
      case "2":
        const nombreAgregar = prompt("Nombre del estudiante:");
        const nuevaNota = parseFloat(prompt("Nueva calificación:"));
        if (!isNaN(nuevaNota)) {
          agregarCalificacion(nombreAgregar, nuevaNota);
        } else {
          console.log("Nota inválida.");
        }
        break;
      case "3":
        const nombreEliminar = prompt("Nombre del estudiante:");
        eliminarUltimaCalificacion(nombreEliminar);
        break;
      case "4":
        const minimo = parseFloat(prompt("Promedio mínimo para aprobar:"));
        filtrarEstudiantesAprobados(minimo);
        break;
      case "5":
        ordenarEstudiantesPorNombre();
        break;
      case "6":
        const nombreReporte = prompt("Nombre del estudiante:");
        generarReporteOriginal(nombreReporte);
        break;
      case "7":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida.");
    }

  } while (opcion !== "7");
}

// Inicia el sistema interactivo
iniciarGestionCalificaciones();