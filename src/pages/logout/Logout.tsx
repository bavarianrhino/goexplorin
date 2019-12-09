import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Logout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
          <IonItem routerLink="/">
            <IonLabel>
              <h2>Logout</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
