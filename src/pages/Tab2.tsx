import React, { useState }  from 'react';
import './Tab2.css';
import { IonApp, IonButton, IonCol, IonContent, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList,
  IonMenu, IonRouterOutlet, IonRow, IonSplitPane, IonTitle, IonToolbar,IonCard
  ,IonCardHeader,IonCardSubtitle,IonChip,IonCardTitle,IonCardContent,IonSearchbar,
   IonFooter, IonFab, IonFabButton, IonTabBar, IonTabButton, IonTabs,IonPage, IonTextarea, IonThumbnail, IonItemDivider, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import {personCircle, search, text,openOutline, add} from 'ionicons/icons';
import noimg from '../img/noimg.png';
import graph2 from '../img/graph2.png';
import {execute_search,search_filters,item_properties} from '../SearchFunctions/Scrollitems'

import axios from 'axios';

var test:search_filters;
test = {keywords:"samsung 8",sort:"relevance"};



const Tab2: React.FC = () => {
  const [searchListComp,setSearchListComp]= useState<{ [id: number] : item_properties; } | undefined >();
  const newlisting =(searchtext:string)=>{
    console.log(searchtext);
    let test = {keywords:searchtext,sort:"relevance"};
    execute_search(test).then((res)=>{ setSearchListComp(res) });
    console.log(searchListComp);
  }
  return (
    <IonPage >
      <IonContent  className="centerme" >
        <IonTitle color="primary" className="centerme">
        <h5>Busqueda</h5>
        
        <IonSearchbar id="searchbarid" showClearButton="never" debounce={1000} inputMode="text" onIonChange={e =>newlisting(e.detail.value!)  }  >
        </IonSearchbar>
        </IonTitle>
        <IonList>
          {searchListComp && Object.entries(searchListComp).map(([key, value]) => 
          <IonItem color="secondary" key={key} >
            <div className="divmain">
              <div className="divleft">
                <IonThumbnail slot="start" >
                  <img src={value.item_thumbnail}   height="100%" width="100%"/>
                  </IonThumbnail>
                <IonLabel className="itemtitle" >
                  <p>{value.item_title}</p> 
                  <p id="text_precio">${value.item_price}</p>
                  
                  <p>{value.item_site}</p>
                </IonLabel>
              </div>
            <div className="buttonside">
          <IonFabButton slot="end" size="small" color="none" className="linkto">
            <IonIcon className="iconsize1" color="primary" size="medium" icon={openOutline}   />
          </IonFabButton>
        </div>
        </div>
        </IonItem>          
        )}
        </IonList>
        

       <IonInfiniteScroll threshold="100px" id="infinite-scroll">
          <IonInfiniteScrollContent loading-spinner="bubbles" loading-text="Loading more data...">
          </IonInfiniteScrollContent>
           
        </IonInfiniteScroll>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
/** <IonList id="list">

            <IonItem color="secondary" >
              <div className="divmain">
                <div className="divleft">
                  <IonThumbnail slot="start" >
                    <img src={noimg} height="100%" width="100%"/>
                    </IonThumbnail>
                  <IonLabel className="itemtitle" >
                    <h4>$000.00</h4>
                    <p>articulo</p> 
                    <p>sitio.com</p>
                  </IonLabel>
                </div>
              <div className="buttonside">
                <IonFabButton slot="end" size="small" color="none" className="linkto">
                  <IonIcon className="iconsize1" color="primary" size="medium" icon={openOutline}   />
                </IonFabButton>
              </div>
             </div>
            </IonItem>       
        </IonList> */