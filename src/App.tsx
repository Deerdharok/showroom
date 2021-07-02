import { IonApp, IonButton, IonCol, IonContent, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList,
  IonMenu, IonRouterOutlet, IonRow, IonSplitPane, IonTitle, IonToolbar,IonCard
  ,IonCardHeader,IonCardSubtitle,IonChip,IonCardTitle,IonCardContent,
  IonSearchbar, IonFooter, IonFab, IonFabButton, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import React, {useRef,useState } from 'react';
import {calculatorOutline,locationOutline,closeCircle,refreshOutline,personCircle,search
        ,barChartOutline,bookmarkOutline,analyticsOutline,reloadCircleOutline, ellipse,
         square, triangle,menuOutline} from 'ionicons/icons'
import { IonicSafeString, menuController } from "@ionic/core";
import { IonReactRouter} from '@ionic/react-router';
/* image imports */
import showroom from './img/showroom3.png'
import avatar from './img/avatarimg.png'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/rootchanges.css';
import './app.css';

import { Route, Redirect } from 'react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Searchpage from './pages/Search';


const App: React.FC = () => {
  const weightinputref=useRef<HTMLIonInputElement>(null);
  const heightinputref=useRef<HTMLIonInputElement>(null);
  const calculateBmi = () => {
    const enteredweight = weightinputref.current!.value
    const enteredheight = heightinputref.current!.value
    if (!enteredweight || !enteredheight) {
      return;
    }
    const bmi= +enteredweight / (+enteredheight * +enteredweight);
    console.log(bmi);
  };
  const resetinputs = () => {
    weightinputref.current!.value="";
    heightinputref.current!.value="";
  };

  const [searchText, setSearchText] = useState('');
  return(<IonApp>
    <IonHeader className="ion-align-self-center">
      <IonToolbar  >
        
        <IonTitle className="centeredimg">
        <div className="titlewrapper">
          <div className="rightdiv"> 
            <IonFabButton className="nomargin" size="small" color="none" onClick={async () => await menuController.toggle()}>
              <IonIcon className="iconsize1" color="primary" size="large" icon={menuOutline}   />
            </IonFabButton>
          </div>
          <div className="singlediv2">
            <img src={showroom} alt="" height="100%" width="100%" className="centeredimg"/>
          </div>
          <div className="rightdiv">
            <IonFabButton size="small" color="none" className="nomargin">
              <IonIcon color="primary" icon={search}  />
            </IonFabButton>
          </div>
        </div>
        </IonTitle>

      </IonToolbar>
    </IonHeader>
    
    <IonMenu side="start" contentId="main" >
      <IonHeader>
        <IonToolbar color="primary">
         
          <IonTitle>
          <img src={avatar} alt="" height="25%" width="25%" />
           Cuenta
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="main">
        <IonList>
          
        </IonList>
      </IonContent>
    </IonMenu>

    <IonContent >
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} exact={true}/>
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon className="iconsize1" size="large" color="primary" icon={barChartOutline}/>
            
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
          <IonIcon className="iconsize1" size="large" color="primary" icon={bookmarkOutline}   />
            
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
          <IonIcon className="iconsize1" size="large" color="primary" icon={analyticsOutline}   />
           
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </IonContent>
    
  </IonApp>);
};

export default App;

/**

<IonFooter>
      <IonToolbar>
        <IonTitle>
          <div className="footerwrapper">
            <div className="singledivbottom"> 
              <IonFabButton size="small" color="none">
                <IonIcon className="iconsize1" size="large" color="primary" icon={barChartOutline}   />
              </IonFabButton>
            </div>
            <div className="singledivbottom"> 
              <IonFabButton size="small" color="none">
                <IonIcon className="iconsize1" size="large" color="primary" icon={bookmarkOutline}   />
              </IonFabButton>
            </div>
            <div className="singledivbottom"> 
              <IonFabButton size="small" color="none">
                <IonIcon className="iconsize1" size="large" color="primary" icon={analyticsOutline}   />
              </IonFabButton>
            </div>

          </div>
        </IonTitle>
      </IonToolbar>
    </IonFooter>

 */

/* searchbar 
 <IonSearchbar value={searchText} placeholder="Filter Schedules"></IonSearchbar>
*/

/* Buttons using state ref 
  <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">label of weight</IonLabel>
              <IonInput ref={weightinputref}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">label of height</IonLabel>
              <IonInput ref={heightinputref}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton onClick={calculateBmi}> 
              <IonIcon slot="start" icon={calculatorOutline}> </IonIcon>
              calculate
            </IonButton>    
          </IonCol> 
          <IonCol className="ion-text-right">
            <IonButton onClick={resetinputs} > 
              <IonIcon slot="start" icon={refreshOutline}> </IonIcon>
              reset
            </IonButton>    
          </IonCol>
        </IonRow>

*/
/*  ION CHIP  
<IonChip color="tertiary">
      <IonIcon icon={locationOutline} />
      <IonLabel>Ubicacion</IonLabel>
    </IonChip>
*/  