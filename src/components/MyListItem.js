import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';
import {List,ListItem} from 'material-ui/List';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const MyListItemSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
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
        return connectDragSource(<div><ListItem style={{opacity: isDragging ? 0.5 : 1}} primaryText={this.props.title}/></div>)
    }
}

MyListItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.MYLISTITEM, MyListItemSource, collect)(MyListItem);
                /*<IconButton  tooltip="Remove" onClick={this.removeFave.bind(this)}>
                    <ContentRemoveCircle />
                </IconButton>: this.props.canAdd && !this.props.location.has_favorite?
                <IconButton tooltip="Add" onClick={this.addFave.bind(this)}>
                    <ContentAddCircle />
                </IconButton>*/