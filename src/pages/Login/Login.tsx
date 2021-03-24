import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonToolbar } from "@ionic/react";
import { stringify } from "node:querystring";
import { useRef, useState } from "react";
import { auth } from '../../Helpers/Firebase';

const Login: React.FC<any> = (props) => {
    
    const setLogedIn = props.setLogedIn;

    //kan ikke få den til at gemme hvad man skriver i indput felterne...
    const emailInput = useRef<HTMLIonInputElement>(null);
    const passwordInput = useRef<HTMLIonInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            setLogedIn(true);
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar></IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput required onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput required onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
                </IonItem>

                <IonButton fill="solid" expand="full" onClick={login}>Login</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login;