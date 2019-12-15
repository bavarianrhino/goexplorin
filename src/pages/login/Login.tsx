import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import React, { Component } from 'react';
import './login.css';
import { UserSession } from 'blockstack';
import { appConfig } from '../../utils/constants'; //appConfig
import { BlockstackButton } from 'react-blockstack-button';

const INITIAL_STATE = {
    userSession: new UserSession({ appConfig }),
    signedIn: false,
    pendingSignIn: false
};

class Login extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.state = { ...INITIAL_STATE };
        // history: this.props,
  }

  async getCurrentState() {
    // twitter
    //   .isLogged()
    //   .then(r => console.log(r)) // returns { in: boolean, out: boolean }
    //   .catch(err => console.log(err));
  }

  async signInTesting(e:any): Promise<void> {
    e.preventDefault()
    const { history } = this.props
    console.log(history)
    // console.log(new History())
    console.log(new History)
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

    async isUserSignedIn(): Promise<void> {
        console.log('isUserSignedIn function called')
        const signedIn = await this.state.userSession.isUserSignedIn()
        this.setState({
            ...this.state,
            signedIn: signedIn
        })
    }

    async isSignInPending(): Promise<void> {
        console.log('isSignInPending function called')
        const pendingSignIn = await this.state.userSession.isSignInPending()
        this.setState({
            ...this.state,
            pendingSignIn: pendingSignIn
        })
    }

    async handleLoginClick(e:any): Promise<void> {
        e.preventDefault()
        console.log('Blockstack Login Clicked')
        console.log(this.state)
        const data = await this.state.userSession.redirectToSignIn()
        console.log(data)
        //     .then((res: { authToken: any; userSession: any; userName: any; }) => {
        //         console.log('result', res);
        //         this.props.history.push({
        //             pathname: '/map',
        //             state: { token: res.authToken, userId: res.userSession, userName: res.userName }
        //         });
        //     }) //{ authToken:string, authTokenSecret:string, userName:string, userID:string }
        // .catch((err: any) => console.log(err));
    }
    

    // handleClick2 = async (e: any) => {
    //     const { userSession } = this.state
    //     // const { userSession } = this.props
    //     const userData1 = userSession.isUserSignedIn()
    //     const userData2 = userSession.isSignInPending()
    //     console.log(userData1, " - Signed In?")
    //     console.log(userData2, " - Pending Sign In?")
    //     this.setState({ loading: true})
    //     if((!userData1 && !userData2) || (!userData1 && userData2)) {
    //         debugger
    //         try {
    //             await this.userPendingSignIn()
    //         } catch (err) {
    //             await this.userPendingSignIn()
    //         }
    //         debugger
    //         if((!userData1 && !userData2) || (!userData1 && userData2)) {
            
    //             try {
    //                 await this.userPendingSignIn()
    //             } catch (err) {
    //                 await this.userPendingSignIn()
    //             }
    //             if(userData1){
    //                 debugger
    //                 this.completedSignIn()
    //             }
    //         }
            
    //     }
    //     debugger
    //         if((!userData1 && !userData2) || (!userData1 && userData2)) {
            
    //             try {
    //                 await this.userPendingSignIn()
    //             } catch (err) {
    //                 await this.userPendingSignIn()
    //             }
    //             if(userData1){
    //                 debugger
    //                 this.completedSignIn()
    //             }
    //         }
    //         this.setState({ loading: false})
    // }

    // userPendingSignIn = async () => {
    //     const { userSession } = this.state
    //     // const history = this.props
    //     const userData1 = userSession.isUserSignedIn()
    //     const userData2 = userSession.isSignInPending()
    //     console.log(userData1, " - Signed In?")
    //     console.log(userData2, " - Pending Sign In?")
    //     this.setState({ loading: true})
    //     debugger
    //     try {
    //         const needThisData = await userSession.handlePendingSignIn()
    //         console.log(needThisData)
    //         // history.push('/');
    //         // tpreventDefault()
    //         // history.pushState(needThisData, 'App', '/')
    //         // this.props.history.push('/map')
    //         this.setState({
    //             ...this.state,
    //             needThisData: needThisData
    //         })
    //         console.log(this.state.needThisData)
            
    //     } catch(err) {
    //         userSession.redirectToSignIn()
    //     }
    // }

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
                            {/* <IonImg className="title-img" src="assets/capacitor.png" ></IonImg> */}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="text-center">
                            <IonText className="title"> Blockstack Login in Ionic/Capacitor App </IonText>
                        </IonCol>
                    </IonRow>
    
                    {/* <IonButton className="login-button" onClick={() => this.signIn()} expand="full" fill="solid" color="primary"> Login with Twitter</IonButton> */}

                    <IonRow class="ion-justify-content-center" style={{ 'margin': '40% auto' }}>
                        <IonCol size='auto'>
                            {/* {(loading) ? <Loading /> : */}
                                {/* (this.state.userSession.isSignInPending()) ? (this.handleClick2(null)) : */}
                                    <BlockstackButton onClick={(e) => {this.handleLoginClick(e)}} />
                                    <BlockstackButton onClick={(e) => {this.signInTesting(e)}} />
                            {/* } */}
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

export default Login;

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