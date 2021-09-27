import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID L6CmOAFis_uxJyvMHGnURdrcy35wSBUG-ZHTx4ybnBs',
  },
});
