import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home/Home';
import Tasks from './pages/Tasks/Tasks';
import Account from './pages/Account/Account';
import {navigateCircleOutline, personCircleOutline, starOutline} from 'ionicons/icons';

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tasks" component={Tasks}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/account" component={Account}></Route>
            <Route exact path="/"> <Redirect to="/home" /> </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="tasks" href="/tasks">
              <IonIcon icon={starOutline}></IonIcon>
              <IonLabel>Tasks</IonLabel>
            </IonTabButton>

            <IonTabButton tab="home" href="/home">
              <IonIcon icon={navigateCircleOutline}></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="account" href="/account">
              <IonIcon icon={personCircleOutline}></IonIcon>
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
  </IonApp>
);

export default App;