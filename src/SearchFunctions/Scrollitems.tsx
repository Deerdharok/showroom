import React,{ useState, useEffect } from 'react';
import { IonInfiniteScroll } from '@ionic/react';
import {search_Mercado_Libre} from './ML_search'
import '../pages/Tab2.css';
import ReactDOM from 'react-dom';
export interface search_filters {
  keywords:string;
  amount_per_site?: number;
  sort: string;
  price_range_upper?: number;
  price_range_lower?: number;
}
export interface item_properties {
  item_thumbnail: string;
  item_title: string;
  item_price: number;
  item_link: string;
  item_site: string;
}
var list:any;
var lengthis = 0;
var results:{ [id: number] : item_properties; }  | undefined ;
let infiniteScroll: any;
list = document.getElementById('list');
infiniteScroll = document.getElementById('infinite-scroll');


export const execute_search=(filters:search_filters) =>{
 

  return search_Mercado_Libre(filters).then((res) => {
    console.log(res);
    return res;
  });


/*
 list = document.getElementById('list');
  infiniteScroll = document.getElementById('infinite-scroll');  
  lengthis = 0;


  search_Mercado_Libre(filters).then((blob) => {
  results=blob;
  return blob;
  
  console.log("begin check");
  console.log(results);
  if(infiniteScroll && list && results ){
    console.log("chcking");
    let sizem=Object.keys(results).length;
    console.log(results);
    infiniteScroll.addEventListener('ionInfinite', async function () {
  
      if (lengthis < sizem) {
        console.log('Loading data...');
        await wait(500);
        infiniteScroll.complete();
        append_Items(10);
        console.log('Done');
        
      } else {
        console.log('No More Data');
        infiniteScroll.disabled = true;
      }
    });

    append_Items(10);
  }
  }).catch(e => console.log(e));*/
}

const append_Items=(number_toadd:number) => {

  if(results){
    const originalLength = lengthis;
  for (var i = 0; i <number_toadd; i++) {
    console.log(originalLength);
 
    const el = document.createElement('ion-item');
    el.innerHTML = `<div className="divmain">
            <div className="divleft">
              <ion-thumbnail slot="start" >
                <img src=${results[i + originalLength].item_thumbnail} height="10%" width="10%"/>
                </ion-thumbnail>
              <ion-label className="itemtitle" >
                <h4>$${results[i + originalLength].item_price}</h4>
                <p>${results[i + originalLength].item_title}</p> 
                <p>${results[i + originalLength].item_site}</p>
              </ion-label>
            </div>
              <div className="buttonside">
                <ion-fab-button slot="end" size="small" color="none" className="linkto">
                  <ion-icon className="iconsize1" color="primary" size="medium" icon={openOutline}   />
                </ion-fab-button>
              </div>
        </div>`;
    list.appendChild(el);
    lengthis++;
 
  }
  }
}

const wait=(time:number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
}
