import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect } from "react";
import JsonData from '../../JsonFiles/JsonFiles.json';
import './Tasks.css';



const Tasks: React.FC<any> = (props) => {
    const loadData = JsonData;
    const setCurrentTask = props.setCurrentTask;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar></IonToolbar>
            </IonHeader>
            <IonContent className="contentContainer" scrollEvents={true}>

                {loadData && loadData.map((item, index) => {
                    return (
                        <IonCard key={index} className="card">
                            <img src={item.categoryImg} alt={item.categoryName}/>
                            <IonCardHeader>
                                <IonCardTitle className="cardTitle">{item.categoryName}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p className="cardDecription">{item.categoryDecription}</p>
                                <IonButton className="cardButton" expand="full" fill="solid" onClick={() => setCurrentTask(item.categoryTasks[Math.floor(Math.random() * Math.floor(item.categoryTasks.length))])}>Start eventyret</IonButton>
                            </IonCardContent>
                        </IonCard>
                    )
                })}

            </IonContent>
        </IonPage>
    )
};

export default Tasks;