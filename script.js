// Array de estudiantes
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

// Funciones anteriores (1 a 9)
function mostrarEstudiantes() {
  estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificaciones: ${estudiante.calificaciones.join(', ')}`);
    console.log(`Promedio: ${calcularPromedio(estudiante.calificaciones)}`);
    console.log(`Mejor calificación: ${obtenerMejorCalificacion(estudiante.calificaciones)}`);
    console.log(`Peor calificación: ${obtenerPeorCalificacion(estudiante.calificaciones)}\n`);
  });
}

function calcularPromedio(calificaciones) {
  const suma = calificaciones.reduce((total, nota) => total + nota, 0);
  const promedio = suma / calificaciones.length;
  return promedio.toFixed(2);
}

function obtenerMejorCalificacion(calificaciones) {
  return Math.max(...calificaciones);
}

function obtenerPeorCalificacion(calificaciones) {
  return Math.min(...calificaciones);
}

function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    estudiante.calificaciones.push(nuevaCalificacion);
    console.log(`Calificación agregada a ${nombreEstudiante}.`);
  } else {
    console.log(`Estudiante "${nombreEstudiante}" no encontrado.`);
  }
}

function eliminarUltimaCalificacion(nombreEstudiante) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    if (estudiante.calificaciones.length > 0) {
      const eliminada = estudiante.calificaciones.pop();
      console.log(`Se eliminó la calificación ${eliminada} de ${nombreEstudiante}.`);
    } else {
      console.log(`${nombreEstudiante} no tiene calificaciones para eliminar.`);
    }
  } else {
    console.log(`Estudiante "${nombreEstudiante}" no encontrado.`);
  }
}

function filtrarEstudiantesAprobados(promedioMinimo) {
  return estudiantes.filter(est =>
    parseFloat(calcularPromedio(est.calificaciones)) >= promedioMinimo
  );
}

function ordenarEstudiantesPorNombre() {
  estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("Estudiantes ordenados alfabéticamente por nombre.");
}

function generarReporteOriginal(nombreEstudiante) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    const promedio = calcularPromedio(estudiante.calificaciones);
    const mejor = obtenerMejorCalificacion(estudiante.calificaciones);
    const peor = obtenerPeorCalificacion(estudiante.calificaciones);

    console.log(`\n📋 Reporte de ${estudiante.nombre}`);
    console.log(`Calificaciones: ${estudiante.calificaciones.join(', ')}`);
    console.log(`Promedio: ${promedio}`);
    console.log(`Mejor calificación: ${mejor}`);
    console.log(`Peor calificación: ${peor}\n`);
  } else {
    console.log(`Estudiante "${nombreEstudiante}" no encontrado.`);
  }
}

// 10. Función principal: menú interactivo
function iniciarGestionCalificaciones() {
  let opcion;

  do {
    opcion = prompt(
      "📚 Gestión de Calificaciones\n" +
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
        const nombreAgregar = prompt("Ingrese el nombre del estudiante:");
        const nuevaNota = parseFloat(prompt("Ingrese la nueva calificación:"));
        if (!isNaN(nuevaNota)) {
          agregarCalificacion(nombreAgregar, nuevaNota);
        } else {
          console.log("⚠️ Calificación inválida.");
        }
        break;
      case "3":
        const nombreEliminar = prompt("Ingrese el nombre del estudiante:");
        eliminarUltimaCalificacion(nombreEliminar);
        break;
      case "4":
        const minimo = parseFloat(prompt("Ingrese el promedio mínimo para aprobar:"));
        const aprobados = filtrarEstudiantesAprobados(minimo);
        console.log(`Estudiantes con promedio >= ${minimo}:`);
        aprobados.forEach(est => console.log(`- ${est.nombre}`));
        break;
      case "5":
        ordenarEstudiantesPorNombre();
        break;
      case "6":
        const nombreReporte = prompt("Ingrese el nombre del estudiante:");
        generarReporteOriginal(nombreReporte);
        break;
      case "7":
        console.log("👋 Saliendo del sistema...");
        break;
      default:
        console.log("⚠️ Opción inválida.");
    }
  } while (opcion !== "7");
}

// Ejecutar el menú
iniciarGestionCalificaciones();


// Iniciamos el sistema
iniciarGestionCalificaciones();