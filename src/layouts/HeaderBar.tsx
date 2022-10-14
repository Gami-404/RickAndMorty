import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function HeaderBar(){

    return  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
            Rick and Morty App
      </Typography>
    </Toolbar>
  </AppBar>
}