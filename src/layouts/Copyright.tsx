
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://abdelrhmangamal.com/">
          My portflio
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }