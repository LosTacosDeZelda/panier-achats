import "./BtnAjoutPanier.scss"
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

export default function BtnAjoutPanier(props) {
    
    //Etat du badge du bouton
    const [btnQuantite, setBtnQuantite] = useState(0);

    
    return(
        <Badge badgeContent={btnQuantite} color="primary">
            <button onClick={() => {props.onClick(); setBtnQuantite(btnQuantite+1);}} className="BtnAjoutPanier">Ajouter au panier</button>
        </Badge>
        
    );
    
}