import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const Header = () => {
  return (
    <AppBar sx={{ boxShadow: 0 }} position='sticky' color='transparent'>
      <Toolbar variant='dense' sx={{ justifyContent: 'end' }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
