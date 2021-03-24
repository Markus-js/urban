import { IonButton, IonCard, IonCardContent, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonPage, IonToolbar } from '@ionic/react';
import {eyeOutline, eyeOffOutline} from 'ionicons/icons';
import { useState } from 'react';

const Home: React.FC<any> = (props) => {
  const currentTask = props.currentTask;
  const [showModal, setShowModal] = useState(false);
  
  console.log(currentTask);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent>

        {currentTask ?
          <IonButton expand="full" fill="solid" color="warning" onClick={() => setShowModal(true)}>
            <IonLabel>Se hints</IonLabel>
            <IonIcon icon={eyeOutline}></IonIcon>
          </IonButton> : null
        }

      </IonContent>
      
      { currentTask &&
      <IonModal isOpen={showModal}>
        <IonHeader><IonToolbar></IonToolbar></IonHeader>
        <IonContent>
          
          <IonButton expand="full" fill="solid" color="danger" onClick={() => setShowModal(false)}>
            <IonLabel>Tilbage</IonLabel>
            <IonIcon icon={eyeOffOutline}></IonIcon>
          </IonButton>

            <IonCard>
              <img src={currentTask.taskHintImg} />
              <IonCardContent>
                <IonList>
                  {currentTask.taskHint.map((item: string, index: number) => {
                    return ( 
                    <IonItem key={index}>
                      <p>{item}</p>
                    </IonItem> 
                    );
                  })}
                </IonList>
              </IonCardContent>
            </IonCard>

        </IonContent>
      </IonModal>}

    </IonPage>
  );
};

export default Home;
