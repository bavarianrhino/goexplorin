//--------- Ionic & React ---------//
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send } from 'ionicons/icons';

//--------- Pages ---------//
import Login from './pages/login/Login'
import Leaderboard from './pages/leaderboard/Leaderboard'
import Details from './pages/leaderboard/Details'
import Mapper from './pages/mapper/Mapper'
import Logout from './pages/logout/Logout'

//--------- Core & Basic CSS ---------//
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

//--------- Theme Variables ---------//
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact={true} />
          <Route path="/leaderboard" component={Leaderboard} exact={true} />
          <Route path="/leaderboard/details" component={Details} />
          <Route path="/mapper" component={Mapper} exact={true} />
          <Route path="/logout" component={Logout} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="leaderboard" href="/leaderboard">
            <IonIcon icon={flash} />
            <IonLabel>Leaderboard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="mapper" href="/mapper">
            <IonIcon icon={apps} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={send} />
            <IonLabel>Logout</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
