import * as React from 'react';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from "@mui/material/Switch"
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function EditSideBar() {
    return  <Drawer
    sx={{
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: '250px',
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="right"
  >
   <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: "60px" }}>
<Tabs value = {0} aria-label="basic tabs example">
<Tab label= "Basic" />
<Tab label="Advanced" />
</Tabs>
</Box> 
<Container>
<TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={2}
          sx = {{
            mt: "20px"
          }}
          defaultValue="Upgrade Your Sunday"
        />
            <ToggleButtonGroup
            value = {"center"}
      exclusive
      sx = {{mt: "20px"}}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
<FormControlLabel control={<Switch defaultChecked />} label="Bold" />
<FormControlLabel control={<Switch defaultChecked />} label="CAPS" />
<InputLabel id="demo-simple-select-label">Font Size</InputLabel>
<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={240}
    label="Font Size"
  >
    <MenuItem value={64}>64pt</MenuItem>
    <MenuItem value={100}>100pt</MenuItem>
    <MenuItem value={240}>240pt</MenuItem>
  </Select>
  <InputLabel id="color-label">Color</InputLabel>
  <Select
    labelId="color-label"
    id="demo-simple-select"
    value={2}
    label="Color"
  >
    <MenuItem value={0}>Red</MenuItem>
    <MenuItem value={1}>Black</MenuItem>
    <MenuItem value={2}>White</MenuItem>
  </Select>

</Container>
        
  </Drawer>
}