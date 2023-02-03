import React from 'react'
import List from '@mui/material/List';
import { ListItem, ListItemButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';


const menu = () => {
  return (
   <>
       <List>
            <ListItem>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
            </ListItemButton>
            </ListItem>
        </List>

   </>
  )
}

export default menu