import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect } from "react";
import jsonData from '../../jsonFiles/jsonFiles.json';



const Tasks: React.FC<any> = (props) => {
    const loadData = jsonData;
    const setCurrentTask = props.setCurrentTask;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar></IonToolbar>
            </IonHeader>
            <IonContent scrollEvents={true}>

                {loadData && loadData.map((item, index) => {
                    return (
                        <IonCard key={index}>
                            <img src={item.categoryImg} alt={item.categoryName}/>
                            <IonCardHeader>
                                <IonCardTitle>{item.categoryName}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            <p>{item.categoryDecription}</p>
                            <IonButton expand="full" fill="solid" color="medium" onClick={() => setCurrentTask(item.categoryTasks[Math.floor(Math.random() * Math.floor(item.categoryTasks.length))])}>Start eventyret</IonButton>
                            </IonCardContent>
                        </IonCard>
                    )
                })}

            </IonContent>
        </IonPage>
    )
};

export default Tasks;