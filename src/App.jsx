import React from 'react';
import Testimonio from './Testimonio';

const testimoniosData = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    cargo: 'Desarrollador Web',
    testimonio: 'React es una biblioteca increíble para construir interfaces dinámicas.',
    imagen: 'https://i.pinimg.com/736x/c9/82/48/c982482d10bea0efab8bb5af1939f0e3.jpg',
    alt: 'Juan Pérez en su oficina'
  },
  {
    id: 2,
    nombre: 'Ana Gómez',
    cargo: 'Ingeniera de Software',
    testimonio: 'Me encanta la modularidad que ofrece React en el desarrollo de aplicaciones.',
    imagen: 'https://i.pinimg.com/736x/52/31/b5/5231b536bc94f4049b9cd2c3fb1d8547.jpg',
    alt: 'Ana Gómez trabajando'
  },
  // Puedes añadir hasta 4 testimonios como máximo.
];

const App = () => {
  return (
    <div>
      {testimoniosData.map(testimonio => (
        <Testimonio 
          key={testimonio.id} 
          nombre={testimonio.nombre} 
          cargo={testimonio.cargo}
          testimonio={testimonio.testimonio}
          imagen={testimonio.imagen}
          alt={testimonio.alt}
        />
      ))}
    </div>
  );
};

export default App;
