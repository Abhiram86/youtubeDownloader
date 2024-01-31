import axios from 'axios';

export const grab = async (link) => {

  const options = {
    method: 'GET',
    url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/youtube',
    params: {
      url: link,
      filename: 'test video'
    },
    headers: {
      'X-RapidAPI-Key': '0996f35d00msh4868da494aedfeep11e607jsncfef9f1629e1',
      'X-RapidAPI-Host': 'social-media-video-downloader.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    const data = await response.data
    return data;
  } catch (error) {
    console.error(error);
  }
};
