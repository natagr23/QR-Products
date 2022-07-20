import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Products from './Products';

import { QRCodeSVG } from 'qrcode.react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [url, setUrl] = useState(
    'https://picturesofpeoplescanningqrcodes.tumblr.com/'
  );
  const call_Url = (product) => {
    setUrl(product.url);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>Products List</Item>
            <Products url={url} call_Url={call_Url} />
          </Grid>
          <Grid item xs={8}>
            <Item>QR</Item>
            <Item>
              <QRCodeSVG
                value={url}
                size={128}
                bgColor={'#ffffff'}
                fgColor={'#000000'}
                level={'L'}
                includeMargin={false}
                imageSettings={{
                  src: 'https://static.zpao.com/favicon.png',
                  x: undefined,
                  y: undefined,
                  height: 24,
                  width: 24,
                  excavate: true,
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
