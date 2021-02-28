import "./BtnAjoutPanier.scss"
import Badge from "@material-ui/core/Badge";

export default function BtnAjoutPanier({qte, onClick, texte, classeCouleur}) {

    return (
        <Badge badgeContent={qte} color="primary">
            <button onClick={onClick} 
                className={"BtnAjoutPanier "+ classeCouleur}>{texte}</button>
        </Badge>

    );

}