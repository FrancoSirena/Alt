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
        var index = this.locations.filter((obj) => {if (obj.name == location.name) return true; else return false;});
        if (index.length == 0)
            this.locations.push(location);
    }
    removeFavoriteLocation(location) {
        var index = this.locations.indexOf(location);
        this.locations.splice(index, 1);
    }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');