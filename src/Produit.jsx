import BtnAjoutPanier from "./BtnAjoutPanier";
import "./Produit.scss";

export default function Produit(props) {
    
    function ajouterArticle(params) {

        const [panier, setPanier] = props.etatPanier;

        if (panier[props.id]) {

            panier[props.id].qte++;
        }
        else{
            panier[props.id] = {prix: props.prix, qte: 1}
        }    

        setPanier(JSON.parse(JSON.stringify(panier)));
        
    }
    
    return(
        <li className="Produit">
            <div className="image">
                <img src={"images-produits/"+props.id+".webp"} alt="zozo"/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="prix">{props.prix + " CA$"}</p>
                <BtnAjoutPanier onClick={ajouterArticle}/>
            </div>
        </li>  
    );
}