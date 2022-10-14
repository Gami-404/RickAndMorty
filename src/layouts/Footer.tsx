
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Copyright } from './../layouts/Copyright';


export default function Footer (){
    return <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Created for verify skill purepose
        </Typography>
        <Copyright />
      </Box>
}