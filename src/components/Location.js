import React from 'react';
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoritesStore';
import LocationActions from '../actions/LocationActions';
import AltContainer from 'alt-container';
import ListItem from './ListItem';

class AllLocations extends React.Component{
   addFave(ev) {
     var location = LocationStore.getLocation(
       Number(ev.target.getAttribute('key'))
     );
     LocationActions.favoriteLocation(location);
   }
  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          return (
            <ListItem key={'l'+ location.id} canAdd={true} canRemove={false}  title={location.name}  />
          );
        })}
      </ul>
    );
  }
}

class Favorites extends React.Component {
  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          return (
            <ListItem key={'f'+ location.id} canRemove={true} canAdd={false}  title={location.name}  />
          );
        })}
      </ul>
    );
  }
}

export default class Locations extends React.Component{
  componentDidMount() {
    LocationStore.fetchLocations();
  }

  render() {
    return (
      <div>
        <h1>Locations</h1>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>

        <h1>Favorites</h1>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }
}