"use strict"; // Este modo nos ayuda a escribir mejor código

// Aquí guardamos los estudiantes y sus notas
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

// Muestra la info de todos los estudiantes
function mostrarEstudiantes() {
  estudiantes.forEach(estudiante => {
    console.log("Nombre: " + estudiante.nombre);
    console.log("Calificaciones: " + estudiante.calificaciones.join(", "));
    console.log("Promedio: " + calcularPromedio(estudiante.calificaciones));
    console.log("Mejor calificación: " + obtenerMejorCalificacion(estudiante.calificaciones));
    console.log("Peor calificación: " + obtenerPeorCalificacion(estudiante.calificaciones));
    console.log("");
  });
}

// Calcula el promedio de un array de notas
function calcularPromedio(calificaciones) {
  let suma = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
  }
  let promedio = suma / calificaciones.length;
  return promedio.toFixed(2);
}

// Devuelve la nota más alta
function obtenerMejorCalificacion(calificaciones) {
  return Math.max(...calificaciones);
}

// Devuelve la nota más baja
function obtenerPeorCalificacion(calificaciones) {
  return Math.min(...calificaciones);
}

// Añade una nueva nota a un estudiante
function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    estudiante.calificaciones.push(nuevaCalificacion);
    console.log("Calificación agregada a " + nombreEstudiante);
  } else {
    console.log("No encontré al estudiante " + nombreEstudiante);
  }
}

// Elimina la última nota de un estudiante
function eliminarUltimaCalificacion(nombreEstudiante) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    if (estudiante.calificaciones.length > 0) {
      const eliminada = estudiante.calificaciones.pop();
      console.log("Se eliminó la nota " + eliminada + " de " + nombreEstudiante);
    } else {
      console.log(nombreEstudiante + " no tiene notas para borrar.");
    }
  } else {
    console.log("No encontré al estudiante " + nombreEstudiante);
  }
}

// Devuelve solo estudiantes que pasaron
function filtrarEstudiantesAprobados(promedioMinimo) {
  return estudiantes.filter(est => parseFloat(calcularPromedio(est.calificaciones)) >= promedioMinimo);
}

// Ordena alfabéticamente los nombres
function ordenarEstudiantesPorNombre() {
  estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("Estudiantes ordenados A-Z.");
}

// Muestra un mini reporte para un estudiante
function generarReporteOriginal(nombreEstudiante) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    const promedio = calcularPromedio(estudiante.calificaciones);
    const mejor = obtenerMejorCalificacion(estudiante.calificaciones);
    const peor = obtenerPeorCalificacion(estudiante.calificaciones);

    console.log("📋 Reporte de " + estudiante.nombre);
    console.log("Calificaciones: " + estudiante.calificaciones.join(", "));
    console.log("Promedio: " + promedio);
    console.log("Mejor calificación: " + mejor);
    console.log("Peor calificación: " + peor);
    console.log("");
  } else {
    console.log("No encontré al estudiante " + nombreEstudiante);
  }
}

// Muestra un menú para interactuar con el sistema
function iniciarGestionCalificaciones() {
  let opcion;

  do {
    opcion = prompt(
      "Gestión de Calificaciones\n" +
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
        const nuevaNota = parseFloat(prompt("Nueva nota:"));
        if (!isNaN(nuevaNota)) {
          agregarCalificacion(nombreAgregar, nuevaNota);
        } else {
          console.log("⚠️ Nota inválida.");
        }
        break;
      case "3":
        const nombreEliminar = prompt("Nombre del estudiante:");
        eliminarUltimaCalificacion(nombreEliminar);
        break;
      case "4":
        const minimo = parseFloat(prompt("Promedio mínimo para aprobar:"));
        const aprobados = filtrarEstudiantesAprobados(minimo);
        console.log("Estudiantes que aprobaron:");
        aprobados.forEach(est => console.log("- " + est.nombre));
        break;
      case "5":
        ordenarEstudiantesPorNombre();
        break;
      case "6":
        const nombreReporte = prompt("Nombre del estudiante:");
        generarReporteOriginal(nombreReporte);
        break;
      case "7":
        console.log("👋 Saliendo...");
        break;
      default:
        console.log("⚠️ Esa opción no existe.");
    }
  } while (opcion !== "7");
}

// Iniciamos el sistema
iniciarGestionCalificaciones();