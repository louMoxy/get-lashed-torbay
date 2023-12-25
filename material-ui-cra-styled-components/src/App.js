import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from './images/logo.png'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpeg'
import yyLash from './images/yy-lashes.jpeg'
import pattern from './images/pattern.jpg'
import { Button, TextField } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import useMediaQuery from '@mui/material/useMediaQuery';

const Form = () => {
  return (
    <Container >
      <Typography component="h6" variant='h3' mb={5} sx={{color: '#df7b6d', fontWeight: 900 }}>Request to Book</Typography>
      <form name="contact" method="POST" dataNetlify="true">
        <TextField
          fullWidth
          margin="normal"
          name="name"
          label="Name"
          required
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          name="email"
          required
          label="Email"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          name="mobile"
          label="Mobile"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          name="message"
          label="Date & Time of Appointment"
          variant="outlined"
          multiline
          required
          rows={4}
        />
        <Button type="submit" variant="contained" size='large' sx={{ color: 'white', background: '#df7b6d', fontWeight: 900, px: 8, py: 2, mt: 4, '&:hover': { color: '#df7b6d', background: 'white'} }}>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default function App() {
  const isLarge = useMediaQuery('(min-width:900px)');
  const formRef = React.useRef(null);

  // Function to scroll to the form section
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <Box sx={{ background: '#df7b6d', m: 0, p: 3 }} id="contact" >
      <Box sx={{ width: 250, m: 'auto' }}>
          <img src={logo} width={'100%'} />
      </Box>
    </Box>
      <Box sx={{ backgroundPosition: 'center', backgroundImage: `url(${img1})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Box sx={{ py: 24, px: 3, background: '#df7b6d69' }}>
          <Typography component="h1" variant='h2' fontWeight={'900'} textAlign={'center'} color="white">
            Lash Extentions
          </Typography>
          <Box display={'flex'} justifyContent={'center'}>
            <Button onClick={scrollToForm} variant="contained" size='large' sx={{ background: 'white', color: '#df7b6d', fontWeight: 900, px: 8, py: 2, mt: 4, '&:hover': { background: '#df7b6d', color: 'white'} }}>
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    
      <Box sx={{ p: 10, background: '#df7b6d', color: 'white' }}>
        <Typography 
         variant='h6' fontWeight={'900'} textAlign={'center'}>
          OFFER
        </Typography>
        <Typography  variant='h2' fontWeight={'900'} textAlign={'center'}>
        YY lashes only £25!    
        </Typography>
      </Box>

      <Box sx={{ px: isLarge ? 14 : 2, py: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isLarge ? 'row' : 'column' }}>
        <Box sx={{ mr: 6 }}>
        <Typography variant='h3' fontWeight={'900'} mb={3} color='#df7b6d'>
        YY Lashes
        </Typography>
        <Typography >
          The YY lash <strong>helps bridge the gap between classics and volume</strong> – almost like a pre-made fan. Applied in the same way as classics, yet create a fuller, softer and fluffier effect similar to volume. YY Lashes also offer great retention due to their straight base which provides superior contact area for improved adhesion.
        </Typography>
        <Typography variant='h3' fontWeight={'900'} mb={3} mt={4} color='#df7b6d'>
        £45
        </Typography>
        <Button onClick={scrollToForm} variant="contained" size='large' sx={{ color: 'white', background: '#df7b6d', fontWeight: 900, px: 8, py: 2, mt: 4, '&:hover': { color: '#df7b6d', background: 'white'} }}>
              Book Now
            </Button>
        </Box>
        {isLarge ? <Box sx={{ width: '90% '}}>
          <img src={yyLash} width={'100%'} />
        </Box> : null}
      </Box>

      <Box sx={{ background: '#f6ebea', px: isLarge ? 14 : 2, py: 10, display: 'flex', flexDirection: isLarge ? 'row-reverse' : 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ ml: 6 }}>
        <Typography variant='h3' fontWeight={'900'} mb={3} color='#df7b6d'>
        Classic Lash Extensions
        </Typography>
        <Typography >
        Classic lashes are the perfect way to enhance natural lashes. With the classic technique, one individual lash is applied to one natural lash to create a set of longer and thicker lashes. Depending on the desired look, there are a variety of curls, lengths, and thicknesses to choose from.
        </Typography>
        <Typography variant='h3' fontWeight={'900'} mb={3} mt={4} color='#df7b6d'>
        £45
        </Typography>
        <Button onClick={scrollToForm} variant="contained" size='large' sx={{ color: 'white', background: '#df7b6d', fontWeight: 900, px: 8, py: 2, mt: 4, '&:hover': { color: '#df7b6d', background: 'white'} }}>
              Book Now
            </Button>
        </Box>
        {isLarge ? <Box sx={{ width: '90% '}}>
          <img src={img1} width={'100%'} />
        </Box> :null}
      </Box>

      <Box sx={{ px: isLarge ? 14 : 2, py: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ mr: 6 }}>
        <Typography variant='h3' fontWeight={'900'} mb={3} color='#df7b6d'>
        Hybrid Lashes
        </Typography>
        <Typography >
          A Hybrid lash treatment is a combination of two techniques: Volume (SVS or Russian) and Individual lash extensions (Extend). Taking the best bits from both treatments, Hybrid Lashes will give you volume and length, resulting in a wispy, textured lash extension look that last for up to 8 weeks.
        </Typography>
        <Typography variant='h3' fontWeight={'900'} mb={3} mt={4} color='#df7b6d'>
        £50
        </Typography>
        <Button onClick={scrollToForm} variant="contained" size='large' sx={{ color: 'white', background: '#df7b6d', fontWeight: 900, px: 8, py: 2, mt: 4, '&:hover': { color: '#df7b6d', background: 'white'} }}>
              Book Now
            </Button>
        </Box>
        {isLarge ? <Box sx={{ width: '90% '}}>
          <img src={img2} width={'100%'} />
        </Box>: null}
      </Box>

      <Box sx={{ background: '#f6ebea', px: isLarge ? 14 : 2, py: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ ml: 6 }}>
          <Typography variant='h3' fontWeight={'900'} mb={3} color='#df7b6d'>
             Lash Removal
          </Typography>
          <Typography  mb={3}>
          Full lash removal: <strong>£10</strong>
        </Typography>
        <Typography  mb={3}>
        Lash removal before a new set: <strong>£5</strong>
        </Typography>      
        </Box>
        <Box ml={8}>
          <Button onClick={scrollToForm} variant="contained" size='large' sx={{ color: 'white', background: '#df7b6d', fontWeight: 900, px: 8, py: 2, mt: 4, '&:hover': { color: '#df7b6d', background: 'white'} }}>
              Book Now
            </Button>
        </Box>
      </Box>

      <Box sx={{ px: isLarge ? 14 : 2, py: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ mr: 6 }}>
        <Typography variant='h3' fontWeight={'900'} mb={3} color='#df7b6d'>
        Infills
        </Typography>
        <Typography mb={3}>
          Lash infills are individual lashes or fans that fill in the gaps in your lash extensions which can appear after 2-3 weeks, due to natural shedding.
        </Typography>
        <Typography mb={2}>
          30 mins: <strong>£15</strong>
        </Typography>
        <Typography mb={2}>
        1 hour: <strong>£20</strong>
        </Typography>
        <Typography mb={2}>
        1.30 hour<strong>£25</strong>
        </Typography>
        
        <Button onClick={scrollToForm} variant="contained" size='large' sx={{ color: 'white', background: '#df7b6d', fontWeight: 900, px: 8, py: 2, mt: 4, '&:hover': { color: '#df7b6d', background: 'white'} }}>
              Book Now
            </Button>
        </Box>
        {isLarge ? <Box sx={{ width: '90% '}}>
          <img src={img3} width={'100%'} />
        </Box> : null}
      </Box>
      <Box sx={{ p: isLarge ? 8 : 0, backgroundImage: `url(${pattern})`, backgroundSize: 'cover' }}  ref={formRef}>
          <Box sx={{ background: '#f6ebea', p: 5, width: isLarge ?'max-content' : '100%', m: 'auto' }}>
            <Form />
          </Box>
      </Box>

      <Box sx={{ background: '#df7b6d', m: 0, p: 3 }} >
      <Container>
      <Box sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center',}} >
              
      <Box sx={{ width: 200}}>
            <img src={logo} width={'100%'} />
        </Box>
        <Box>
        <Typography mb={2} color="white" textAlign={'right'}>
          07871 768211
        </Typography>
        <a href="mailto:getlashedtorbay@gmail.com" style={{ textDecoration: 'none', textAlign: 'right' }}>
          <Typography mb={2} color="white">
            getlashedtorbay@gmail.com
            </Typography>
        </a>
        <Box sx={{ml: 'auto', color: 'white' }}>
          <InstagramIcon sx={{mr: 1}}/>
          <FacebookIcon />
        </Box>
        </Box>
      </Box>
      </Container>
      </Box>
    </>
  );
}
