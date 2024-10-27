import React from 'react';
import Testimonio from './components/Testimonio';
import { Typography, Grid2, Box } from '@mui/material';
import { ToruhDL } from 'milibreria';

const App = () => {
  const testimoniosData = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/736x/52/31/b5/5231b536bc94f4049b9cd2c3fb1d8547.jpg',
      altText: 'Ana Gómez trabajando',
      title: 'Ana Gómez',
      body: 'Me encanta la modularidad que ofrece React en el desarrollo de aplicaciones.',
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/736x/c9/82/48/c982482d10bea0efab8bb5af1939f0e3.jpg',
      altText: 'Desarrollador Web',
      title: 'Juan Pérez',
      body: 'React es una biblioteca increíble para construir interfaces dinámicas.',
    }
  ];

  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'center' }}>
       
      </Typography>

      <Grid2 container spacing={2} justifyContent="center" alignItems="center" style={{ width: '100vw', margin: '0 auto' }}>
        
        {/* Testimonio de Ana */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              transition: 'transform 0.3s, box-shadow 0.3s', // Animación suave
              '&:hover': {
                transform: 'scale(1.05)', // Aumento de tamaño al pasar el cursor
                boxShadow: 12, // Sombra más profunda
              }
            }}
          >
            <Testimonio
              imageUrl={testimoniosData[0].imageUrl}
              altText={testimoniosData[0].altText}
              title={testimoniosData[0].title}
              body={testimoniosData[0].body}
            />
          </Box>
        </Grid2>

        {/* ToruhDL sin descripción larga */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              minWidth: 350, // Ancho mínimo igual que Testimonio
              minHeight: 480, // Altura mínima ajustada
              margin: '20px auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 8,
              borderRadius: 5,
              overflow: 'hidden',
              background: 'linear-gradient(to right, #00bcd4, #009688)', // Gradiente de azul cian a azul turquesa
              transition: 'box-shadow 0.3s', // Animación suave
              '&:hover': {
                boxShadow: 12, // Sombra más profunda sin aumentar el tamaño
                transform: 'scale(1.05)', // Aumento de tamaño al pasar el cursor
              }
            }}
          >
            <ToruhDL
              name="Toruh Delgado Lahera"
              description="Desarrollador Web y Entusiasta de la Tecnología."
              avatarUrl="https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg"
            />
          </Box>
        </Grid2>

        {/* ToruhDL con descripción larga */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              minWidth: 350, // Ancho mínimo igual que Testimonio
              minHeight: 480, // Altura mínima ajustada
              margin: '20px auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 8,
              borderRadius: 5,
              overflow: 'hidden',
              background: 'linear-gradient(to right, #00bcd4, #009688)', // Gradiente de azul cian a azul turquesa
              transition: 'box-shadow 0.3s', // Animación suave
              '&:hover': {
                boxShadow: 12, // Sombra más profunda sin aumentar el tamaño
                transform: 'scale(1.05)', // Aumento de tamaño al pasar el cursor
              }
            }}
          >
            <ToruhDL
              name="Toruh Delgado Lahera"
              description="Desarrollador Web, apasionado por la creación de aplicaciones interactivas y por el aprendizaje continuo en el mundo de la tecnología. Siempre buscando nuevas formas de mejorar mis habilidades y aportar valor a los proyectos en los que trabajo."
              avatarUrl="https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg"
            />
          </Box>
        </Grid2>

        {/* Testimonio de Juan */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              transition: 'transform 0.3s, box-shadow 0.3s', // Animación suave
              '&:hover': {
                transform: 'scale(1.05)', // Aumento de tamaño al pasar el cursor
                boxShadow: 12, // Sombra más profunda
              }
            }}
          >
            <Testimonio
              imageUrl={testimoniosData[1].imageUrl}
              altText={testimoniosData[1].altText}
              title={testimoniosData[1].title}
              body={testimoniosData[1].body}
            />
          </Box>
        </Grid2>

      </Grid2>
    </div>
  );
};

export default App;
