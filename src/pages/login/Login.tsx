import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import React, { Component } from 'react';
import './Login.css';
// import { Twitter } from 'capacitor-twitter';
// const twitter = new Twitter();
const INITIAL_STATE = {
  loggedIn: false,
};

class Login extends Component {
  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  async getCurrentState() {
    // twitter
    //   .isLogged()
    //   .then(r => console.log(r)) // returns { in: boolean, out: boolean }
    //   .catch(err => console.log(err));
  }

  async signIn(): Promise<void> {
    const { history } = this.props;
    // twitter
    //   .login()
    //   .then(result => {
        // console.log('result', result);
        // history.push({
        //   pathname: '/home',
        //   state: { token: result.authToken, userId: result.userID, userName: result.userName }
        // });
    //   }) // { authToken:string, authTokenSecret:string, userName:string, userID:string }
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Ionic React App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRow>
            <IonCol className="text-center">
              <IonImg className="title-img" src="assets/capacitor.png" ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="text-center">
              <IonText className="title">
                Twitter Login in Capacitor app
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="text-center">
              <IonText className="text-center">
                By Enappd Team
              </IonText>
            </IonCol>
          </IonRow>

          <IonButton className="login-button" onClick={() => this.signIn()} expand="full" fill="solid" color="primary">
            Login with Twitter
        </IonButton>
        </IonContent>
      </IonPage>
    )
  }
}

// export default Login;

// import {
//     IonCard,
//     IonCardContent,
//     IonCardHeader,
//     IonCardSubtitle,
//     IonCardTitle,
//     IonContent,
//     IonHeader,
//     IonIcon,
//     IonItem,
//     IonLabel,
//     IonList,
//     IonListHeader,
//     IonPage,
//     IonTitle,
//     IonToolbar
//   } from '@ionic/react';
//   import { book, build, colorFill, grid } from 'ionicons/icons';
//   import React from 'react';
//   import './Tab1.css';
  
//   const Tab1: React.FC = () => {
//     return (
//       <IonPage>
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Tab One</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonCard className="welcome-card">
//             <img src="/assets/shapes.svg" alt="" />
//             <IonCardHeader>
//               <IonCardSubtitle>Get Started</IonCardSubtitle>
//               <IonCardTitle>Welcome to Ionic</IonCardTitle>
//             </IonCardHeader>
//             <IonCardContent>
//               <p>
//                 Now that your app has been created, you'll want to start building out features and
//                 components. Check out some of the resources below for next steps.
//               </p>
//             </IonCardContent>
//           </IonCard>
  
//           <IonList lines="none">
//             <IonListHeader>
//               <IonLabel>Resources</IonLabel>
//             </IonListHeader>
//             <IonItem href="https://ionicframework.com/docs/" target="_blank">
//               <IonIcon slot="start" color="medium" icon={book} />
//               <IonLabel>Ionic Documentation</IonLabel>
//             </IonItem>
//             <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
//               <IonIcon slot="start" color="medium" icon={build} />
//               <IonLabel>Scaffold Out Your App</IonLabel>
//             </IonItem>
//             <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
//               <IonIcon slot="start" color="medium" icon={grid} />
//               <IonLabel>Change Your App Layout</IonLabel>
//             </IonItem>
//             <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
//               <IonIcon slot="start" color="medium" icon={colorFill} />
//               <IonLabel>Theme Your App</IonLabel>
//             </IonItem>
//           </IonList>
//         </IonContent>
//       </IonPage>
//     );
//   };
  
//   export default Tab1;