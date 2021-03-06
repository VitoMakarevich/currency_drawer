// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import TrendingUp from 'material-ui-icons/TrendingUp';
import FunctionsIcon from 'material-ui-icons/Functions';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  return (
    <div>
      <List>
        <Link to='drawer'>
        <ListItem button>
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="USD -> EUR" />
        </ListItem>
        </Link>
        <Link to='calculator'>
        <ListItem button>
          <ListItemIcon>
            <FunctionsIcon />
          </ListItemIcon>
          <ListItemText primary="EUR -> USD" />
        </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
}


export default SimpleList;