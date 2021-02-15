import "./SommairePanier.scss";

export default function SommairePanier(props) {
    console.log("paniiier",props.etatPanier);
    const [panier, setPanier] = props.etatPanier;

    const infoPanier = retournerInfoPanier(panier);
    return(
        
        <div className={"SommairePanier" + (props.cacher ? " cacher" : "")}>
            <span className="nbArticles">Articles différents : </span>
            <span className="qteArticles">Nombre total d'articles : </span>
            <span className="sousTotal">Sous-total : </span>
            <span className="tps">TPS : </span>
            <span className ="tvq">TVQ : </span>
            <span className="total">Total : </span>
        </div>
    );

}

function retournerInfoPanier(pan) {
    let info = {};

    //Sortir les articles et les mettre dans un tableau

    let articles = Object.values(pan);
    console.log(articles);

    //Nombre darticles differents
    info.nbArticles = articles.length;

    //Quantité d'articles totale
    info.qteArticles = articles.reduce((valInit, valCourante) => {return valCourante.qte + valInit}, 0);

    //Sous-total
    let sousTotal = articles.reduce((i,c) => c.prix * c.qte + i,0);

    console.log("Sous Tot",sousTotal);
}