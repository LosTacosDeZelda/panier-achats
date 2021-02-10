import Produit from "./Produit";
import tabProduits from "./data/produits.json";

import "./ListeProduits.css";

console.log(tabProduits);
export default function ListeProduits() {
    
    return(
        <div className="ListeProduits">
            <h2>Produits disponibles</h2>
            <ul>
                {tabProduits.map(produit => 
                    <Produit nom={produit.nom} prix={produit.prix} id={produit.id}/>
                )}
                
            </ul>
        </div>
    );
}