import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const MyListItemSource = {
  beginDrag(props) {
    return {};
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      LocationActions.favoriteLocation(props.location);
    }
    
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource : connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class MyListItem extends React.Component{
  constructor(props) {
    super(props);
  }
  addFave() {
    LocationActions.favoriteLocation(this.props.location);
  }
  removeFave() {
    LocationActions.removeFavoriteLocation(this.props.location);
  }
    render(){
        const { connectDragSource, isDragging } = this.props;
        const opacity = isDragging ? 0.4 : 1;
        return connectDragSource(<span style={{opacity}} className="myItem"><Avatar
          icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
        /> {this.props.title}</span>)
    }
}

MyListItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.MYLISTITEM, MyListItemSource, collect)(MyListItem);