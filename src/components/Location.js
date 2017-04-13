import React from 'react';
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoritesStore';
import LocationActions from '../actions/LocationActions';
import AltContainer from 'alt-container';
import MyListItem from './MyListItem';
import {List, ListItem} from 'material-ui/List';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class AllLocations extends React.Component{
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

class Favorites extends React.Component {
  render() {
    return (
      <List>
        {this.props.locations.map((location, i) => {
          return (
            <ListItem> {location.name} </ListItem>
            //<MyListItem key={'f'+ location.id} canRemove={true}  canAdd={false} location={location} title={location.name}  />
          );
        })}
      </List>
    );
  }
}

class Locations extends React.Component{
  componentDidMount() {
    LocationStore.fetchLocations();
  }

  render() {
    return (
      <div>
      <div className="floatLeft" >
        <h1>Locations</h1>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>
      </div>
      <div className="floatRight" >
        <h1>Favorites</h1>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Locations);