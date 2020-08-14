import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setErrorMessage] = useState({ error: false, message: '' });

  // Component Did Mount
  useEffect(() => {
    restaurantsRequest('pasta');
  }, []);

  const restaurantsRequest = async searchText => {
    try {
      const { data: { businesses } } = await yelp.get('/search', { params: { limit: 50, term: searchText, location: 'san jose' }});
      setErrorMessage({ error: false, message: '' })
      setRestaurants(businesses);
    } catch (errorRequest) {
      const { response: { data: { error: { code } } } } = errorRequest;
      if (code === "BUSINESS_NOT_FOUND") setErrorMessage({ error: true, message: 'Business not found' });
    }
  }

  return [restaurantsRequest, restaurants, error];
}