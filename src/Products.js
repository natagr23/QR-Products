import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const products = [
  {
    id: 1,
    name: 'Manzanas',
    url: 'https://es.wikipedia.org/wiki/Manzana',
  },
  {
    id: 2,
    name: 'Peras',
    url: 'https://es.wikipedia.org/wiki/Pera',
  },
  {
    id: 3,
    name: 'Limones',
    url: 'https://es.wikipedia.org/wiki/Lima_(fruta)',
  },
  {
    id: 4,
    name: 'Bananos',
    url: 'https://es.wikipedia.org/wiki/Musa_%C3%97_paradisiaca',
  },
  {
    id: 5,
    name: 'Melocotones',
    url: 'https://es.wikipedia.org/wiki/Melocot%C3%B3n_de_Calanda',
  },
];

export default function Products({ call_Url, url }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1}>
        {products.map((product) => {
          return (
            <Button
              key={product.id}
              onClick={() => {
                call_Url(product);
              }}
              variant="contained"
              color="success"
            >
              {product.name}
            </Button>
          );
        })}
        <div>{url}</div>
      </Stack>
    </Box>
  );
}
