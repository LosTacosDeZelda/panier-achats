import "./Produit.scss";

export default function Produit(props) {
    
    return(
        <div>
            <div className="image">
                <img src="images-produits/prd0001.webp" alt="zozo"/>
            </div>
            <div className="info">
                <p>{props.nom}</p>
                <p>{props.prix}</p>
            </div>
            <button>Ajouter au panier</button>
        </div>  
        
    );
}