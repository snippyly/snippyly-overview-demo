import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import homeThumb from '../images/HomeThumbnail.png'
import signThumb from '../images/SignUpThumbnail.png'
import termsThumb from '../images/TermsThumbnail.png'
export default function EditSideBar() {
    return  <Drawer
    sx={{
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: '175px',
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
   <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: "60px" }}>
    <Typography variant="h6" sx = {{textAlign: 'center', mt: '20px'}}>Select Page</Typography>
   <ToggleButtonGroup
  orientation="vertical"
  exclusive
  value = {0}
  sx = {{p: "10px"}}
>
  <ToggleButton value="list" aria-label="list" sx = {{border: '2px solid blue'}}>
    <img className = {"thumb"} src = {homeThumb}/>
  </ToggleButton>
  <ToggleButton value="module" aria-label="module">
  <img className = {"thumb"} src = {signThumb}/>
  </ToggleButton>
  <ToggleButton value="quilt" aria-label="quilt">
  <img className = {"thumb"} src = {termsThumb}/>
  </ToggleButton>
</ToggleButtonGroup>
</Box> 
<Container>

</Container>
        
  </Drawer>
}