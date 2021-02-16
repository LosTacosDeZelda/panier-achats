import "./BtnAjoutPanier.scss"
import Badge from "@material-ui/core/Badge";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart"
import { useState } from "react";

export default function BtnAjoutPanier(props) {

    //Etat du badge du bouton
    const [btnQuantite, setBtnQuantite] = useState(0);
    //Etat du texte du bouton
    const [btnTexte, setBtnTexte] = useState("Ajouter au panier");


    return (
        <Badge badgeContent={btnQuantite} color="primary">
            <button onClick={(event) => { 
                props.onClick(); 
                setBtnQuantite(btnQuantite + 1); 
                setBtnTexte(<AddShoppingCart />);
                event.target.classList.add("rouge") 
                }} 
                className="BtnAjoutPanier">{btnTexte}</button>
        </Badge>

    );

}