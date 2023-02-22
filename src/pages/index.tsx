import React from 'react'
import { NextPage } from 'next'
import PageLayout from '@/containers/PageLayout'
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, SxProps, Theme, Typography } from '@mui/material'

// SEO Override:
const seoProps = {
  title: 'Desarrolladores',
  description: 'Desarrolladores app practice'
}

// Material UI Override:
const mainBox: SxProps<Theme> = {
  minHeight: '73vh',
  marginTop: 1,
  marginBottom: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 // background:'dimgray'
}

const HomePage: NextPage = () => {
  return (
    <PageLayout seoProps={seoProps}>
      <Box sx={mainBox}>
        <HeroContent />
      </Box>
    </PageLayout>
  )
}

export default HomePage


import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Container from '@mui/material/Container';


const tiers = [
  {
    title: 'Front end',
    // subheader: 'Most popular',
    price: '10',
    description: [
      'Design HTML Css',
      'Site control',
      'Help access',
      'Api connections',
    ],
    buttonText: 'Button',
    buttonVariant: 'outlined',
  },
  {
    title: 'Back End',
    price: '10',
    description: [
      'Langs like PHP',
      'Data Structures',
      'Frameworks',
      'Hosting Platforms'
    ],
    buttonText: 'Button',
    buttonVariant: 'contained',
  },
  {
    title: 'Full Stack',
    price: '21',
    description: [ // Representational State Transfers  REST
      'Is Back and Front.',
      'greater knowledge',
      'great work capacity',
      'Master',
    ],
    buttonText: 'Button',
    buttonVariant: 'outlined',
  },
];

function HeroContent() {
  return (
    <React.Fragment>
    
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          { 'Desarrolladores' } 
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
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