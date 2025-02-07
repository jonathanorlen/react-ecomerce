import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
     root: {
          flex: 1
     },
     menuButton: {
          marginRight: theme.spacing(2)
     }
}))
const Header = () => {
     const classes = useStyles()

     return (
          <div className={classes.root}>
               <AppBar position="fixed">
                    <ToolBar>
                         <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                              <MenuIcon />
                         </IconButton>
                         <Link href="/">
                              <Typography variant="h6">
                                   E comerce
                              </Typography>
                         </Link>
                    </ToolBar>
               </AppBar>
          </div>
     )
}

export default Header;