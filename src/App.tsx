import React from 'react';
import { styled, ThemeProvider, Paper } from '@mui/material';
import { SearchPage } from './pages/Search.page';
import { theme } from './styles/theme.styles';

const AppRoot = styled(Paper)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 0;
`;

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <AppRoot>
        <SearchPage></SearchPage>
      </AppRoot>
    </ThemeProvider>
  );
}

export default App;
