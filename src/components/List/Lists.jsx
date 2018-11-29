import React, { Component } from 'react'
import classNames from 'classnames'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftIcon'
import { mainListItems } from './ListItems'

export default class Lists extends Component {
  render() {
    const { classes } = this.props
    return (
      <Drawer
        variant="permanent"
        classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)} }
        open={this.state.open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>{mainListItems}</List>
      </Drawer>
    )
  }
}