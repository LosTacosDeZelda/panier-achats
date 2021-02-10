import "./Produit.css";

export default function Produit(props) {
    
    return(
        <li>
            <div className="image">
                <img src={"images-produits/"+props.id+".webp"} alt=""/>
            </div>
            <div className="info">
                <p>{props.nom}</p>
                <p>{props.prix}</p>
            </div>
            <button>Ajouter au panier</button>
        </li>
    );
}