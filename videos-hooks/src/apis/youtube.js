import axios from 'axios';

const KEY = 'AIzaSyDxFZLX_vm_VsT-IU3aP7rUWzuoKFlg7J8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
