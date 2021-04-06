import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';
const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static'

export default class MapComponent extends Component {

  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}

/*Note I added from the documentation*/

/*Note that we did not mark our getter as @tracked.
Unlike instance variables, getters cannot be "assigned" a new value directly,
so it does not make sense for Ember to monitor them for changes*/

/*For more information go here: https://guides.emberjs.com/release/tutorial/part-1/reusable-components/*/
