import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const globalStyles = (
  <MuiGlobalStyles
    styles={{
      body: {
        margin: 0,
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif`,
        WebkitFontSmoothing: 'antialiased',
      },
    }}
  />
);
