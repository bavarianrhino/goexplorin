//--------- Ionic & React ---------//
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { map, ribbon, logIn, logOut} from 'ionicons/icons';
import { AppPage } from './declarations';

//--------- Pages ---------//
import Login from './pages/login/Login'
import Leaderboard from './pages/leaderboard/Leaderboard'
// import Mapper from './pages/mapper/Mapper'
import Mapp from './pages/mapper/Mapp'
import Logout from './pages/logout/Logout'
import Menu from "./components/Menu";

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
import Details from './pages/leaderboard/Details'
import NotFoundPage from './pages/logout/Logout'

//------------Adding Pages------------//
const appPages: AppPage[] = [
    {
      title: "Map",
      url: "/",
      icon: map
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      icon: ribbon
    },
    {
        title: "Login",
        url: "/login",
        icon: logIn
    },
    {
        title: "Logout",
        url: "/logout",
        icon: logOut
      }
  ];

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonSplitPane contentId="main">
                <Menu appPages={appPages} />
                <IonRouterOutlet id="main">
                    <Route path="*" component={NotFoundPage} />
                    <Route path="/" component={Mapp} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/leaderboard" component={Leaderboard} exact={true} />
                    <Route path="/leaderboard/details" component={Details} />
                    {/* <Route path="/" render={() => <Redirect to="/mapper" />} exact={true} /> */}
                    {/* <Route path="/" render={() => <Redirect to="/login" />} exact={true} /> */}
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    </IonApp>
);

export default App;
// </IonRouterOutlet>
// <IonTabBar slot="bottom">
//   <IonTabButton tab="leaderboard" href="/leaderboard">
//     <IonIcon icon={flash} />
//     <IonLabel>Leaderboard</IonLabel>
//   </IonTabButton>
//   <IonTabButton tab="mapper" href="/mapper">
//     <IonIcon icon={apps} />
//     <IonLabel>Map</IonLabel>
//   </IonTabButton>
//   <IonTabButton tab="tab3" href="/tab3">
//     <IonIcon icon={send} />
//     <IonLabel>Logout</IonLabel>
//   </IonTabButton>
// </IonTabBar>
// </IonTabs>
// </IonReactRouter>
// </IonApp>
