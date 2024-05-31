// src/Estudiantes.js
import React, { useState } from 'react';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nuevoEstudiante, setNuevoEstudiante] = useState({
    nombre: '',
    materia: '',
    calificacion: 0,
  });

  const agregarEstudiante = () => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
    setNuevoEstudiante({ nombre: '', materia: '', calificacion: 0 });
  };

  return (
    <div>
      <h1>Registro de Estudiantes</h1>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoEstudiante.nombre}
          onChange={(e) =>
            setNuevoEstudiante({ ...nuevoEstudiante, nombre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Materia"
          value={nuevoEstudiante.materia}
          onChange={(e) =>
            setNuevoEstudiante({ ...nuevoEstudiante, materia: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Calificación"
          value={nuevoEstudiante.calificacion}
          onChange={(e) =>
            setNuevoEstudiante({
              ...nuevoEstudiante,
              calificacion: parseInt(e.target.value),
            })
          }
        />
        <button type="button" onClick={agregarEstudiante}>
          Agregar Estudiante
        </button>
      </form>
      <ul>
        {estudiantes.map((estudiante, index) => (
          <li key={index}>
            {estudiante.nombre} ({estudiante.materia}): {estudiante.calificacion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Estudiantes;
