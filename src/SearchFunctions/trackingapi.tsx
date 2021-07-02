import axios from 'axios';
import React from 'react';

let num=7791651335;
const trackingApi = async (trackNumber:string) => {
  console.log(trackNumber+"  was recieved");
  try {
    return await axios({
      method: 'post', //you can set what request you want to be
      url: 'https://api.ship24.com/public/v1/tracking/search',
      data: {trackingNumber: trackNumber},
      headers: {
        Authorization: 'Bearer ' + 'apik_jqYM9KTeGMqoX9Pr1bxYSr6hbVeA1Z'
      }
    })
  } catch (error) {
    console.error(error)
  }
}
export const getTrackingStatus = async (tracknum:string) => {
  const breeds = await trackingApi(tracknum);

  if (breeds) {
    console.log(breeds);
    return(breeds.data.data.trackings[0].events[0].status);
  } 
}
