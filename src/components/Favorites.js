import React, { Component, PropTypes } from 'react';
import MyListItem from './MyListItem';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import Chip from 'material-ui/Chip';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import LocationActions from '../actions/LocationActions';
import Avatar from 'material-ui/Avatar';

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
    removeFavorite(location, ev) {
        LocationActions.removeFavoriteLocation(location);
    }
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
            {this.props.locations.map((location, i) => {
            return (
                <Chip key={location.id} onRequestDelete={this.removeFavorite.bind(this, location)}><Avatar
                            icon={<ActionShoppingCart />}/> {location.name}  </Chip>
            );
            })}
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
