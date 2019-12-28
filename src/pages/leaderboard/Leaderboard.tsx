import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Header } from "../../components/UI/Header";

type Props = {
    title: string;
};
  
export const Leaderboard = ({ title }: Props) => {
    return (
        <IonPage>
            <Header title={title}/>
            <IonContent>
                <IonList>
                    <IonItem routerLink="/leaderboard/details">
                        <IonLabel><h2>Go to leaderboard detail</h2></IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Leaderboard;