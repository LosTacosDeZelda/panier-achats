import "./Page.scss";
import Entete from './Entete';
import PiedDePage from './PiedDePage';
import ListeProduits from './ListeProduits';
import { useState } from 'react';

export default function Page() {
    
    const etatPanier = useState({});
    
    return(
        
        <div className="page">
            <Entete etatPanier={etatPanier}/>
            <section>
                <ListeProduits etatPanier={etatPanier}/>
            </section>
            <PiedDePage/>

        </div>
    );
}

