import React from 'react';
import Mapp from './Mapp';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonPage, withIonLifeCycle } from '@ionic/react'; //IonContent,
import PropTypes from 'prop-types'
import { appConfig } from '../../utils/constants'; //appConfig
import { UserSession, Person } from 'blockstack'
// import { Location } from '../models/Location';
// import { connect } from '../data/connect';
// import * as selectors from '../data/selectors';
// import './MapView.scss';

// interface OwnProps { }
// interface StateProps {
//   locations: Location[];
//   mapCenter: Location;
// }
// interface DispatchProps { }
// interface MapViewProps extends OwnProps, StateProps, DispatchProps { };
// const MappView: React.FC<MapViewProps> = ({ locations, mapCenter }) => {
// const MappView: React.FC = () => {

class MappView extends React.Component {

    state = {
        userSession: this.props
        // person: null,
        // username: null
    }

    // static propTypes = {
    //     userSession: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    //   }

    ionViewWillEnter() {
        this.getUserSession()
        
    }
    
    getUserSession = () => {
        // const userSession = new UserSession({ appConfig })
        const userSession = this.props
        // const username = this.props.userSession.loadUserData()
        // console.log(userSession)
        // console.log(this.state.userSession)
        // const { userSession } = this.props
        // console.log(userSesssion)
        // this.setState({
        //     ...this.state,
        //     userSession: userSession,
        //     // person: new Person(userSession.loadUserData().profile),
        //     username: userSession.loadUserData().username
        // })
    }
    render() {
        const { userSession } = this.state
        // console.log(userSession)
        const session = this.props
        // console.log(session)
        // console.log(sessionStorage)
        return (
            <IonPage id="map-view">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Map</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* <IonContent class="map-page"> */}
                    {/* <Map locations={locations} mapCenter={mapCenter} /> */}
                    <Mapp userSession={userSession} />
                {/* </IonContent> */}
            </IonPage>
        )
    };
}
           
export default withIonLifeCycle(MappView);