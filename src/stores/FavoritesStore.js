var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');
var LocationStore = require('../stores/LocationStore');

class FavoritesStore {
    constructor() {
        this.locations = [];
        this.bindListeners({
            addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
            removeFavoriteLocation: LocationActions.REMOVE_FAVORITE_LOCATION
        });
    }
    addFavoriteLocation(location) {
        this.locations.push(location);
    }
    removeFavoriteLocation(location) {
        var index = this.locations.indexOf(location);
        this.locations.splice(index, 1);
    }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');