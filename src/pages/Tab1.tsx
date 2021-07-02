import React from 'react';
import './Tab1.css';
import { IonApp, IonButton, IonCol, IonContent, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList,
  IonMenu, IonRouterOutlet, IonRow, IonSplitPane, IonTitle, IonToolbar,IonCard
  ,IonCardHeader,IonCardSubtitle,IonChip,IonCardTitle,IonCardContent,IonSearchbar,
   IonFooter, IonFab, IonFabButton, IonTabBar, IonTabButton, IonTabs,IonPage, IonTextarea, IonThumbnail, IonItemDivider } from '@ionic/react';
import {add, search, text} from 'ionicons/icons';
import graph1 from '../img/graph1.png';
import graph2 from '../img/graph2.png';

const Tab1: React.FC = () => {
  return (
    <IonPage >
      <IonContent  className="centerme" >
        <IonTitle color="primary" className="centerme">
        <h5>Precios de mercado</h5>
        <IonSearchbar searchIcon="disabled"></IonSearchbar>
        </IonTitle>
        
        <IonList >
            <IonItem color="secondary" >
              <div className="divmain">
                <div className="div1">
                <IonTextarea className="listfont" value="Nombre del articulo" readonly>
                </IonTextarea>
                </div>
                <div className="div2">
                  <IonLabel className="listfont" >
                    $000.00            
                  </IonLabel>
                </div>
                <div className="div3">
                    <img src={graph1} alt="" width="100%" />
                </div>
                </div>
            </IonItem>
            <IonItem color="secondary" >
              <div className="divmain">
                <div className="div1">
                <IonTextarea className="listfont" value="Nombre del articulo" readonly>
                </IonTextarea>
                </div>
                <div className="div2">
                  <IonLabel className="listfont" >
                    $000.00            
                  </IonLabel>
                </div>
                <div className="div3">
                    <img src={graph2} alt="" width="100%" />
                </div>
                </div>
            </IonItem>
            <IonItem color="secondary">
              <div className="divmain">
                <div className="div1">
                <IonTextarea className="listfont" value="Nombre del articulo" readonly>
                </IonTextarea>
                </div>
                <div className="div2">
                  <IonLabel className="listfont" >
                    $000.00            
                  </IonLabel>
                </div>
                <div className="div3">
                    <img src={graph1} alt="" width="100%" />
                </div>
                </div>
            </IonItem>
            <IonItem color="secondary" >
              <div className="divmain">
                <div className="div1">
                <IonTextarea className="listfont" value="Nombre del articulo" readonly>
                </IonTextarea>
                </div>
                <div className="div2">
                  <IonLabel className="listfont" >
                    $000.00            
                  </IonLabel>
                </div>
                <div className="div3">
                    <img src={graph2} alt="" width="100%" />
                </div>
                </div>
            </IonItem>
            <IonItem color="secondary" >
              <div className="divmain">
                <div className="div1">
                <IonTextarea className="listfont" value="Nombre del articulo" readonly>
                </IonTextarea>
                </div>
                <div className="div2">
                  <IonLabel className="listfont" >
                    $000.00            
                  </IonLabel>
                </div>
                <div className="div3">
                    <img src={graph2} alt="" width="100%" />
                </div>
                </div>
            </IonItem>
            <IonItem color="secondary" >
              <div className="divmain">
                <div className="div1">
                <IonTextarea className="listfont" value="Nombre del articulo" readonly>
                </IonTextarea>
                </div>
                <div className="div2">
                  <IonLabel className="listfont" >
                    $000.00            
                  </IonLabel>
                </div>
                <div className="div3">
                    <img src={graph2} alt="" width="100%" />
                </div>
                </div>
            </IonItem>



        </IonList>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton size="small">
            <IonIcon size="small" icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
/**
 * 
<IonTextarea className="listfont" value="Nombre articulo" contentEditable="false"></IonTextarea>
              <IonItem slot="end" >
                <IonLabel slot="start" className="listfont" >
                  $000.00            
                </IonLabel>
                <IonThumbnail>
                  <img src={graph1} alt="" width="100%" />
                </IonThumbnail>
              </IonItem>
 */