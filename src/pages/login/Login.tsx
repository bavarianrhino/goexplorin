import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, withIonLifeCycle, IonButton, IonImg } from '@ionic/react';
import React, { Component } from 'react';
import './login.css';
import { UserSession } from 'blockstack';
import { appConfig } from '../../utils/constants'; //appConfig
import { BlockstackButton } from 'react-blockstack-button';

const INITIAL_STATE = {
    userSession: new UserSession({ appConfig }),
    session: undefined,
    signedIn: false,
    pendingSignIn: false
};

class Login extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.state = { ...this.state,
            ...INITIAL_STATE };
        // history: this.props,
  }

    async ionViewWillEnter(){
        this.isUserSignedIn()
        this.isSignInPending()
    }

    async isUserSignedIn(): Promise<void> {
        console.log('isUserSignedIn function called')
        const signedIn = await this.state.userSession.isUserSignedIn()
        this.setState({
            ...this.state,
            signedIn: signedIn
        })
        console.log('Signed In?...', this.state.signedIn)
        return signedIn
    }

    async isSignInPending(): Promise<void> {
        console.log('isSignInPending function called')
        const pendingSignIn = await this.state.userSession.isSignInPending()
        this.setState({
            ...this.state,
            pendingSignIn: pendingSignIn
        })
        console.log('Pending Sign In?...', this.state.pendingSignIn)
        return pendingSignIn
    }

    async handleLoginClick(e:any): Promise<void> {
        e.preventDefault()
        console.log('Blockstack Login Clicked')
        const session = await this.state.userSession.redirectToSignIn()
        this.setState({
            ...this.state,
            session: session
        })
            // .then(console.log)
            // console.log(data)
        //     .then((res: { authToken: any; userSession: any; userName: any; }) => {
        //         console.log('result', res);
        //         this.props.history.push({
        //             pathname: '/map',
        //             state: { token: res.authToken, userId: res.userSession, userName: res.userName }
        //         });
        //     }) //{ authToken:string, authTokenSecret:string, userName:string, userID:string }
        // .catch((err: any) => console.log(err));
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Go Explorin'</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <IonRow>
                        <IonCol className="text-center">
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="text-center">
                            <IonText className="title"> Blockstack Login in Ionic/Capacitor App </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow class="ion-justify-content-center" style={{ 'margin': '40% auto' }}>
                        <IonCol size='auto'>
                            <BlockstackButton onClick={(e) => {this.handleLoginClick(e)}} />
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="text-center">
                            <IonText className="text-center"> Blockstack Info Buttons Go Here</IonText>
                            <br />
                            <IonText className="text-center"> Blockstack Info Buttons Go Here</IonText>
                        </IonCol>
                    </IonRow>
                </IonContent>
            </IonPage>
        )
    }
}

export default withIonLifeCycle(Login);

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