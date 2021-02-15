import Entete from './Entete';
import PiedDePage from './PiedDePage';
import ListeProduits from './ListeProduits';

import "./Page.scss";
import { useState } from 'react';

export default function Page() {
    
    const etatPanier = useState({});
    
    return(
        
        <div className="page">
            <Entete/>
            <section>
                <ListeProduits/>
            </section>
            <PiedDePage/>

        </div>
    );
}

