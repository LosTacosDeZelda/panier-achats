import "./Entete.scss";
import { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge  from "@material-ui/core/Badge";
import SommairePanier from "./SommairePanier";

export default function Entete(props) {

    const [cacheSommaire, setCacheSommaire] = useState(true);

    const basculerSommairePanier = () => setCacheSommaire(cacheSommaire ? false : true);

    //Accéder à l'état du panier
    //const [panier, setPanier] = props.etatPanier;
    //const articlesTab = Object.values()
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
                        <Badge onClick={basculerSommairePanier} badgeContent="5" color="secondary">
                            <ShoppingCartIcon/>
                        </Badge>
                        <SommairePanier etatPanier={props.etatPanier} cacher={cacheSommaire}/>
                    </li>
                    <li>Compte</li>
                </ul>
        </header>
    );
}