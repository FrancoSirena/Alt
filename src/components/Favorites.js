import React, { Component, PropTypes } from 'react';
import MyListItem from './MyListItem';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import {List,ListItem} from 'material-ui/List';

const itemTarget= {
  drop () {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class Favorites extends React.Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    let backgroundColor = '';
    if (isActive) {
      backgroundColor = 'lightgreen';
    } else if (canDrop) {
      backgroundColor = 'lightblue';
    }
    return connectDropTarget(<div className="favoritesBox" style={{backgroundColor}}>
      <List>
        {this.props.locations.map((location, i) => {
          return (
            <ListItem key={location.id}> {location.name} </ListItem>
          );
        })}
      </List>
      </div>
    );
  }
}

Favorites.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.MYLISTITEM, itemTarget, collect)(Favorites);
