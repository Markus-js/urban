import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonPage, IonToolbar } from "@ionic/react";
import { create } from "ionicons/icons";
import { stringify } from "node:querystring";
import { useRef, useState } from "react";
import { auth } from '../../Helpers/Firebase';

const Login: React.FC<any> = (props) => {
    
    const setLogedIn = props.setLogedIn;
    const setUser = props.setUser;

    const emailInput = useRef<HTMLIonInputElement>(null);
    const passwordInput = useRef<HTMLIonInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [showModal, setShowModal] = useState(false);

    const login = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setLogedIn(true);
            console.log("user logged in!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };

    const createUser = () => {
        auth.createUserWithEmailAndPassword(newEmail, newPassword)
        .then(() => {
            console.log("user added!")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleSignUpClick = () => {
        createUser();
        setShowModal(false);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar></IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput required={true} type="email" onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput required={true} type="password" onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
                </IonItem>

                <IonButton fill="solid" expand="full" onClick={login}>Log in</IonButton>
                <IonButton fill="clear" expand="full" onClick={() => setShowModal(true)}>Sign up</IonButton>
            </IonContent>

            {/*dette er en modal hvor sign up oplysningerne er */}
            <IonModal isOpen={showModal}>
                <IonHeader><IonToolbar></IonToolbar></IonHeader>
                <IonContent>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput required={true} type="email" onIonChange={(e) => setNewEmail(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput required={true} type="password" onIonChange={(e) => setNewPassword(e.detail.value!)}></IonInput>
                </IonItem>

                <IonButton fill="solid" expand="full" onClick={handleSignUpClick} >Sign up</IonButton>
                <IonButton fill="clear" expand="full" onClick={() => setShowModal(false)}>Log in</IonButton>
                </IonContent>
            </IonModal>
        </IonPage>
    )
}

export default Login;