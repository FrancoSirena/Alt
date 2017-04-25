import React, { Component } from 'react';
import MyListItem from './MyListItem';
import {List,ListItem} from 'material-ui/List';

export default class AllLocations extends React.Component{
  render() {
    return (
      <List>
        {this.props.locations.map((location, i) => {
          return (
            <MyListItem key={'l'+ location.id} location={location} canAdd={true} canRemove={false}  title={location.name}  />
          );
        })}
      </List>
    );
  }
}

