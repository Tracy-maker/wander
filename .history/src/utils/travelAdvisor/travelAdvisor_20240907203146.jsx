import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'x-rapidapi-key': '48c08cd048mshf967bfa1e3ff7e3p19fe1ajsn95ec75c402bd',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}