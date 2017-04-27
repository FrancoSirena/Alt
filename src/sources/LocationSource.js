var LocationActions = require('../actions/LocationActions');

var mockData = [
  { id: 0, name: 'Potato'},
  { id: 1, name: 'Chicken' },
  { id: 2, name: 'Beef' },
  { id: 3, name: 'Turkey' },
  { id: 4, name: 'White Fish' },
  { id: 5, name: 'Brown Rice' },
  { id: 6, name: 'Oats' },
  { id: 7, name: 'Eggs' }
];

var LocationSource = {
  fetchLocations() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
            if (true) {
              resolve(mockData);
            } else {
              reject('Things have broken');
            };
        });
      },

      local() {
        return null;
      },

      success: LocationActions.updateLocations,
      error: LocationActions.locationsFailed,
      loading: LocationActions.fetchLocations
    }
  }
};

module.exports = LocationSource;