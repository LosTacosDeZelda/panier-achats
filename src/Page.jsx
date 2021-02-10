import Entete from './Entete';
import PiedDePage from './PiedDePage';
import ListeProduits from './ListeProduits';

import "./Page.css";

export default function Page() {
    
    return(
        
        <div className="page">
            <Entete/>
            <section>
                Contenu principal
                <ListeProduits/>
            </section>
            <PiedDePage/>

        </div>
    );
}

