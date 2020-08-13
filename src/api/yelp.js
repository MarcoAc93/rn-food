
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer zH3xKT5gifU_5V55NGlIOZV35hFDMLYqDFWpdAuJ_P87vN9qjyfvCWEr-3ALA85HfZ-ZgpRq07-pvO8VwlSSFuUOimZ42R4QvdoTgDtP9vAj7FXn8audZ6FTEKU1X3Yx'
  }
});
