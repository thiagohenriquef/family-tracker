import React, { Component } from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToApp from '@material-ui/icons/ExitToApp'
import listItems from '../List/ListItems'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import Map from '../GoogleMap/Map'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}

class Header extends Component {
  state = {
    open: false
  }
  
  handleDrawerOpen = () => {
    this.setState({ open: true })
  };
  
  handleDrawerClose = () => {
    this.setState({ open: false })
  }
  
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={this.handleDrawerOpen}
            className={classNames(
              classes.menuButton,
              this.state.open && classes.menuButtonHidden,
            )}
            color="inherit"
            aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}>
            {this.props.appName || 'Family Tracker'}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Logout">
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Map />
      <Drawer
        onClose={() => this.setState({ open: false })}
        open={this.state.open}>
        <div
          role="button"
          onKeyDown={() => this.setState({ open: false })}
          onClick={() => this.setState({ open: false })}
          >
          <List>{listItems}</List>
        </div>
      </Drawer>
    </div>
    )
  }
}

export default withStyles(styles)(Header)
