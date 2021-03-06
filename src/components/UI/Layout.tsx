import { IonPage, IonContent } from "@ionic/react";
import React, { ReactChild } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactChild;
  title: string;
};

export const Layout = ({ children, title }: Props) => {
  return (
    <IonPage>
      <Header title={title} />
      <IonContent>
        <div>{children}</div>
      </IonContent>
    </IonPage>
  );
};
