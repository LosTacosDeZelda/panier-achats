import "./BtnAjoutPanier.scss"
import Badge from "@material-ui/core/Badge";

export default function BtnAjoutPanier(props) {

    return(
        <Badge badgeContent="2" color="primary">
            <button className="BtnAjoutPanier">Ajouter au panier</button>
        </Badge>
        
    );
    
}