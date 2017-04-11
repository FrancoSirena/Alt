import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

export default class ListItem extends React.Component{
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
        return (<li>{this.props.title}
            {this.props.canRemove?
                <IconButton  tooltip="Remove" onClick={this.removeFave.bind(this)}>
                    <ContentRemoveCircle />
                </IconButton>: this.props.canAdd && !this.props.location.has_favorite?
                <IconButton tooltip="Add" onClick={this.addFave.bind(this)}>
                    <ContentAddCircle />
                </IconButton>: ""}
            </li>
            )
    }
}