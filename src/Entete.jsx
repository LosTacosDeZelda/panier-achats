import "./Entete.scss";
import { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge  from "@material-ui/core/Badge";
import SommairePanier from "./SommairePanier";

export default function Entete(props) {

    const [cacheSommaire, setCacheSommaire] = useState(true);

    const basculerSommairePanier = () => setCacheSommaire(cacheSommaire ? false : true);

    //Accéder à l'état du panier
    const [panier, setPanier] = props.etatPanier;
    
    const articlesTab = Object.values(panier);

    //Calculer le nombre darticles total du panier
    const nbArticles = Object.values(panier).reduce((accumulateur, elmCourant) => accumulateur + elmCourant.qte,0);

    console.log("Tableau articles panier : "+articlesTab)
    
    return(
        <header className="Entete">
                <div className="logo">*Logo ici*</div>
                <ul className="nav-principale">
                    <li>Produits</li>
                    <li>À propos de nous</li>
                    <li>Nous contacter</li>
                </ul>
                <ul className='nav-utilisateur'>
                    <li>
                        <Badge onClick={basculerSommairePanier} badgeContent={nbArticles} color="secondary">
                            <ShoppingCartIcon/>
                        </Badge>
                        <SommairePanier etatPanier={props.etatPanier} cacher={cacheSommaire} />
                    </li>
                    <li>Compte</li>
                </ul>
        </header>
    );
}