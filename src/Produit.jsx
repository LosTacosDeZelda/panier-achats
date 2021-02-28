import BtnAjoutPanier from "./BtnAjoutPanier";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import "./Produit.scss";

export default function Produit({id, nom, prix, etatPanier}) {

    const [panier, setPanier] = etatPanier;

    function ajouterArticle(params) {

        if (panier[id]) {

            panier[id].qte++;
        }
        else{
            
            panier[id] = {prix: prix, qte: 1}
        }    

        setPanier(JSON.parse(JSON.stringify(panier)));
        
        
    }

    // Etat du bouton
    let btnTexte = "Ajouter au panier";
    let btnQte = 0;
    let btnCouleurCls = "";

    if (panier[id]) {
        btnTexte = <AddShoppingCart/> //JSX; Javascript Syntax eXtension
        btnQte = panier[id].qte;
        btnCouleurCls = "rouge";
    }

    
    return(
        <li className="Produit">
            <div className="image">
                <img src={"images-produits/"+id+".webp"} alt="zozo"/>
            </div>
            <div className="info">
                <h3>{nom}</h3>
                <p className="prix">{prix + " CA$"}</p>
                <BtnAjoutPanier onClick={ajouterArticle} texte={btnTexte} qte={btnQte} classeCouleur={btnCouleurCls} />
            </div>
        </li>  
    );
}