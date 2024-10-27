import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Dialog, DialogContent, Box } from '@mui/material';
import { MyFavouriteBorder, Myfavourite, MyButton, ToruhDL } from 'milibreria';

const Testimonio = ({ imageUrl, altText, title, body, showLongDescription }) => {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFollow = () => {
    alert("Gracias por seguir");
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 8,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={imageUrl}
        alt={altText}
        onClick={handleImageClick}
        sx={{
          cursor: 'pointer',
          width: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            height: 'auto',
            color: '#666',
            marginTop: 1,
          }}
        >
          {body}
        </Typography>
      </CardContent>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={imageUrl}
            alt={altText}
            style={{ maxWidth: '90%', maxHeight: '80vh', cursor: 'pointer', borderRadius: 5 }}
            onClick={toggleLike}
          />
          {liked ? (
            <Myfavourite onClick={toggleLike} color="red" sx={{ marginTop: 2 }} />
          ) : (
            <MyFavouriteBorder onClick={toggleLike} color="blue" sx={{ marginTop: 2 }} />
          )}
          <MyButton
            text="Seguir"
            txtcolor="white"
            bgcolor="blue"
            borderColor="black"
            borderWidth="1px"
            size="medium"
            hoverTxtColor="yellow"
            hoverBgColor="green"
            onClick={handleFollow}
            sx={{ marginTop: 3 }}
          />
        </DialogContent>
      </Dialog>

      {/* Renderizar el componente ToruhDL solo si showLongDescription es true */}
      {showLongDescription ? (
        <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <ToruhDL
            name="Toruh Delgado Lahera"
            description="Desarrollador Web, apasionado por la creación de aplicaciones interactivas y por el aprendizaje continuo en el mundo de la tecnología. Siempre buscando nuevas formas de mejorar mis habilidades y aportar valor a los proyectos en los que trabajo."
            avatarUrl="https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg"
          />
        </Box>
      ) : null}
    </Card>
  );
};

export default Testimonio;
