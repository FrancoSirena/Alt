import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';

export default class ListItem extends React.Component{
    render(){
        return (<li>{this.props.title}
            {this.props.canRemove?
                <IconButton tooltip="Remove">
                    <ContentRemoveCircle />
                </IconButton>: this.props.canAdd?
                <IconButton tooltip="Add">
                    <ContentAddCircle />
                </IconButton>: ""}
            </li>
            )
    }
}