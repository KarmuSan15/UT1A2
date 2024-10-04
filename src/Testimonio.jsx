import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Testimonio = ({ nombre, cargo, testimonio, imagen, alt }) => {
  const [meGusta, setMeGusta] = useState(false);

  const toggleMeGusta = () => {
    setMeGusta(!meGusta);
  };

  return (
    <Card style={{ width: '80%', maxWidth: '500px', margin: '20px auto', textAlign: 'center'}}>
      <img src={imagen} alt={alt} style={{ width: '100%', height: 'auto' }} />
      <CardContent>
        <Typography variant="h5">{nombre}</Typography>
        <Typography variant="subtitle1">{cargo}</Typography>
        <Typography variant="body1">"{testimonio}"</Typography>
        <IconButton onClick={toggleMeGusta}>
          {meGusta ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Testimonio;

