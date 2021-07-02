import React, { useState } from 'react';
import './Tab3.css';
import { IonApp, IonButton, IonCol, IonContent, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList,
  IonMenu, IonRouterOutlet, IonRow, IonSplitPane, IonTitle, IonToolbar,IonCard
  ,IonCardHeader,IonCardSubtitle,IonChip,IonCardTitle,IonCardContent,IonSearchbar,
   IonFooter, IonFab, IonFabButton, IonTabBar, IonTabButton, IonTabs,IonPage, IonTextarea, IonThumbnail, IonItemDivider, IonListHeader, useIonPopover, IonModal } from '@ionic/react';
import {personCircle, search, text,openOutline, addSharp,closeSharp,checkmarkSharp} from 'ionicons/icons';
import Derror from '../img/DeliverError.png';
import Dentregado from '../img/Delivertransito.png';
import Dtransito from '../img/Deliverentregado.png';
import graph2 from '../img/graph2.png';
import { getTrackingStatus } from '../SearchFunctions/trackingapi';

interface Ilisting{trackNumber:string,attNote:string,status:string}
const determineIcon=(stat:string)=>{
  if (stat==="Delivered"){
    return Dentregado;
  }
  return Derror;
}


const Tab3: React.FC = () => {
  const initialListing={trackNumber:"123456",attNote:"none",status:"Error",currentIcon:Derror}
  const [tracklist,setTracklist]= useState([initialListing]);
  const [showModal, setShowModal] = useState(false);
  var tracknumber="",note="";

  const newtracking =(tn:string,nt:string)=>{
    getTrackingStatus(tn).then((res)=>{
      let files={trackNumber:tn,attNote:nt,status:res,currentIcon:determineIcon(res)};
      setTracklist(prevState => [...prevState, files]);
    
    });
  }
  
  return (
    <IonPage >
      <IonContent  className="centerme" >
        <IonTitle color="primary" className="centerme">
        <h5>Guias</h5>
       <IonSearchbar searchIcon="disabled"></IonSearchbar> 
        </IonTitle>
        
        <IonList >
            {tracklist && tracklist.map((numberis) => 
              <IonItem color="secondary" key={numberis.trackNumber} >
                <div className="divmain">
                <div className="divleft">
                  <IonThumbnail slot="start"  className="Dthumb" >
                    
                    <img src={numberis.currentIcon} height="100%" width="100%"/>
                  </IonThumbnail>
                  <IonLabel className="itemtitle" >
                    <h4>{numberis.attNote}</h4>
                    <p>{numberis.status}</p> 
                    <p>{numberis.trackNumber}</p>
                  </IonLabel>
                </div>
              
             </div>
            </IonItem>          
            )}

        </IonList>
      </IonContent>
    
     
      <IonModal isOpen={showModal}>
        <IonList>
          <IonListHeader>Nueva entrada</IonListHeader>
          <IonItem>
            <IonLabel position="stacked">Numero de seguimiento</IonLabel>
            <IonInput value="" onIonChange={(e)=>{ if(e.detail.value){tracknumber=tracknumber+e.detail.value;}}}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">nota</IonLabel>
            <IonInput value="" onIonChange={(e)=>{ if(e.detail.value){note=e.detail.value;}}}> </IonInput>
          </IonItem>

        </IonList>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton size="small"onClick={() => setShowModal(false)} >
            <IonIcon icon={closeSharp} />
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton size="small"onClick={() => {
            setShowModal(false);
            newtracking(tracknumber,note);
          }} >
            <IonIcon icon={checkmarkSharp} />
          </IonFabButton>
        </IonFab>
      </IonModal>

      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton size="small"onClick={() => setShowModal(true)} >
  
          <IonIcon icon={addSharp} />
        </IonFabButton>
      </IonFab>
      
    </IonPage>
  );
};



export default Tab3;
