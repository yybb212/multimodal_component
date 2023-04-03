import React from 'react';
import { Box, Button } from '@mui/material';

const CustomImage = ({ title, imageUrl, width, height, link }) => {

  const handleClick = () => {
    window.location.href = link;
  }

  return (
    <Box onClick={handleClick} style={{cursor:"pointer"}}>
      <img
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        srcSet={`${imageUrl} 1x, ${imageUrl}?size=2x 2x`}
      />
      <h2>{title}</h2>
    </Box>
  );
};

export default CustomImage;