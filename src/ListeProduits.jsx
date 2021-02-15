import "./ListeProduits.scss";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";


export default function ListeProduits(props) {
    
    return(
        <div className="ListeProduits">
            <h2>Produits disponibles</h2>
            <ul>
                {
                    tabProduits.map(produit => <Produit key={produit.id} etatPanier={props.etatPanier} nom={produit.nom} prix={produit.prix} id={produit.id}/>)
                }
                
            </ul>
        </div>
    );
}