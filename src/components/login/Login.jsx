import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";

<form className="ion-padding">
  <IonItem>
    <IonLabel position="floating">Email</IonLabel>
    <IonInput type="email" />
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Password</IonLabel>
    <IonInput type="password" />
  </IonItem>
  <IonButton className="ion-margin-top" type="submit" expand="block">
    Sign In
  </IonButton>
  <IonButton className="ion-margin-top" type="submit" expand="block">
    Sign Up
  </IonButton>
</form>