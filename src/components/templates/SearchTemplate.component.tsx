import { Box, Container } from '@mui/material';

import { Header } from '../organisms/Header';
import { grey } from '@mui/material/colors';

export const SearchTemplate = () => {
  return (
    <Box
      sx={{
        flex: 1,
      }}
    >
      <Header />
      <Box sx={{ alignItems: 'center' }}>
        <Container>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                height: 100,
                width: 600,
                marginTop: 8,
                marginBottom: 4,
                background: grey[800],
              }}
            />
            <Box
              sx={{
                height: 60,
                width: 800,
                background: grey[800],
                marginBottom: 4,
              }}
            />
            <Box sx={{ height: 50, width: 300, background: grey[800] }} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
