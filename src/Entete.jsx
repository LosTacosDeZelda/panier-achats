import "./Entete.scss";
import { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge  from "@material-ui/core/Badge";
import SommairePanier from "./SommairePanier";
import {Link} from "react-router-dom";

export default function Entete(props) {

    const [cacheSommaire, setCacheSommaire] = useState(true);

    const basculerSommairePanier = () => setCacheSommaire(!cacheSommaire);

    //Accéder à l'état du panier
    const [panier] = props.etatPanier;
    
    const articlesTab = Object.values(panier);

    //Calculer le nombre d'articles total du panier
    const nbArticles = Object.values(panier).reduce((accumulateur, elmCourant) => accumulateur + elmCourant.qte,0);

    console.log("Tableau articles panier : "+articlesTab)
    
    return(
        <header className="Entete">
                <div className="logo"><Link to="/">*Logo ici*</Link></div>
                <ul className="nav-principale">
                    <li><Link to="/nos-produits">Produits</Link></li>
                    <li><Link to="/a-propos-de-magasin">À propos de nous</Link></li>
                    <li><Link to="/contact">Nous contacter</Link></li>
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