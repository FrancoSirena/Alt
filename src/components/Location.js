import React from 'react';
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoritesStore';
import LocationActions from '../actions/LocationActions';
import AltContainer from 'alt-container';
import AllLocations from './AllLocations';
import Favorites from './Favorites';
import {List, ListItem} from 'material-ui/List';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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