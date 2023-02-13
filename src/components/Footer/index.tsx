import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Typography, TextField } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://github.com/Andr7st/next-ts-desarrolladores-app">
        { 'repository' }
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#757575", // 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: "#212121", //'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'es-CO',
    name: 'Español',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex',
       background: (theme) => theme.palette.mode==='dark'?'#262626':'#898180',
      /* 'secondary.light' */ 
    }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://github.com/Andr7st" sx={iconStyle}>
                  <GitHubIcon />
                </Box>
                <Box component="a" href="https://github.com/Andr7st" sx={iconStyle}>
                  <GitHubIcon />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6"  gutterBottom>
              { 'Andr7st' }
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://github.com/Andr7st" rel="sponsored" title="Freepik">
                Andr7st
              </Link>
              {' from '}
              <Link href="https://github.com/Andr7st" rel="sponsored" title="Flaticon">
                {'link-here' }
              </Link>
              {' is licensed by '}
              <Link
                href="https://github.com/Andr7st"
                title="Creative"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}