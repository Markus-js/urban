import {IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTabs, IonToolbar} from '@ionic/react';

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Account</p>
      </IonContent>
    </IonPage>
  );
};

export default Account;