// conf by @Andr7st - Andrés Segura 

import React, { createContext, useMemo } from 'react';

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from "@mui/material";

import createCache from '@emotion/cache';

const MyApp = ( props: MyAppProps ) =>  {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // # for use dark and light themes - toggle modes.
  const [mode, setMode] = React.useState<'light' | 'dark'>( 'dark' );

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode==='light'?'dark':'light'));
    },}),[],
  );
  const theme = React.useMemo(() =>
    createTheme({ // themming: https://mui.com/material-ui/customization/theme-components/
      palette: {
        mode,
          background: {
            default: (mode==='dark')?'#0D0D0D':'#FDFCFF',
          },
        },
      }),
    [mode],
  );  
  return (
    <ThemeProvider theme={theme}> {/** Personalized Material UI theme provider level */}
      <ColorModeContext.Provider value={colorMode}> {/** Material UI color cache provider level*/}
        <CacheProvider value={emotionCache}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline enableColorScheme />
          <GlobalStyles styles={{ body: { /** CSS theme here */ } }} />
          <Head><meta name="viewport" content="initial-scale=1, width=device-width" /></Head>
          <Component {...pageProps} />
        </CacheProvider>
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}
export default MyApp

const isBrowser = typeof document !== 'undefined';

const createEmotionCache = () => {
  let insertionPoint;
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }
  return createCache({ key: 'mui-style', insertionPoint });
}

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export const ColorModeContext = createContext({  toggleColorMode: ()=>{ } });