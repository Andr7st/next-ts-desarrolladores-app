import React from "react";
import { Container, Typography, Grid, Card, CardHeader, CardContent, Box, CardActions, Button } from "@mui/material";

import StarIcon from '@mui/icons-material/StarBorder';

const tiers = [
  {
    title: 'Front-end',
    // subheader: 'Most popular',
    price: '10',
    description: [
      'Diseña CSS y HTML',
      'Controla el sitio',
      'Ayuda con accesibilidad',
      'Api connections',
    ],
    buttonText: 'Button',
    buttonVariant: 'outlined',
  },
  {
    title: 'Back-end',
    price: '10',
    description: [
      'usa lenguajes como PHP',
      'Estructura de datos',
      'Frameworks',
      'Plataformas de host'
    ],
    buttonText: 'Button',
    buttonVariant: 'contained',
  },
  {
    title: 'Full Stack',
    price: '21',
    description: [ // Representational State Transfers  REST
      'Es Front y Back dev.',
      'tiene más conocimiento',
      'great work capacity',
      'Master',
    ],
    buttonText: 'Button',
    buttonVariant: 'outlined',
  },
];

export default function HeroContent() {
  return (
    <React.Fragment>
    
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          { 'Desarrolladores' } 
        </Typography>
        <Typography variant="subtitle2" align="center" color="text.secondary" component="p">
          {
            `Como tal no existe una lista oficial pero aqui va una lista de varios tipos de desarrolladores;
             desarrollador de sofware de escritorio, movil, cientifico de datos, de inteligencia artificial, de videojuegos y desarrollador
             de seguridad informática.`
          }
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Box sx={{pb:1}}>
          <Typography variant="body1" align="center" gutterBottom>
            { 'Desarrolladores web' }
          </Typography>
        </Box>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  //subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    
                    <Typography component="h1" variant="h5" color="text.primary">
                      {tier.price}
                    </Typography>
                    {/*
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                    */}
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}