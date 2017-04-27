import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

import {green300, indigo900} from 'material-ui/styles/colors';


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
        const backgroundColor= this.props.location.has_favorite ? green300 : null;
        return connectDragSource(<div style={{opacity}} className="myItem"><Chip backgroundColor={backgroundColor}><Avatar
          icon={!this.props.location.has_favorite ? <ActionList /> : <ActionCheckCircle  />}/> {this.props.title}</Chip></div>)
    }
}

MyListItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.MYLISTITEM, MyListItemSource, collect)(MyListItem);