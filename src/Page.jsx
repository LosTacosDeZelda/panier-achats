//Custom files
import "./Page.scss";
import Accueil from "./Accueil";
import Apropos from "./Apropos";
import Entete from './Entete';
import PiedDePage from './PiedDePage';
import ListeProduits from './ListeProduits';
import Contact from "./Contact";

//
import useLocalStorageState from "./hooks/useLocalStorageState";
import {Switch, Route} from "react-router-dom";


export default function Page() {
    
    //On utilise un hook personnalise pour creer un etat persistant (localStorage)
    const etatPanier = useLocalStorageState({},"panier");

    return(
        
        <div className="page">
            <Entete etatPanier={etatPanier}/>
            <section className="contenu-principal">
                <Switch>
                    <Route path="/" component={Accueil} exact/>
                    <Route path="/nos-produits">
                        <ListeProduits etatPanier={etatPanier}/>
                    </Route>
                    <Route path="/a-propos-de-magasin">
                        <Apropos/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </section>
            <PiedDePage/>

        </div>
    );
}

