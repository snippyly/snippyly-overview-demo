import * as React from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import PagePreview from "./views/PagePreview";
import EditSideBar from "./views/EditSideBar";
import NavSideBar from "./views/NavSideBar"
import './App.css'

export default function App() {
  return (
    <Box>
      <AppBar sx = {{zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Website Builder
          </Typography>
          <Button variant="outlined" color = "inherit" sx = {{mr: "10px"}}>Settings</Button>
          <Button variant="contained" color="success">Publish</Button>
        </Toolbar>
      </AppBar>
      <EditSideBar/>
      <Box sx = {{flexGrow: 1, mr: '250px', ml: "175px", mt: "60px"}}>
        <PagePreview/>
      </Box>
      <NavSideBar/>
      
    </Box>
  );
}
