import "./SommairePanier.scss";

export default function SommairePanier(props) {
    console.log("paniiier",props.etatPanier);
    const [panier, setPanier] = props.etatPanier;

    const infoPanier = retournerInfoPanier(panier);

    return(
        
        <div className={"SommairePanier" + (props.cacher ? " cacher" : "")}>
            <span className="nbArticles">Articles différents : {infoPanier.nbArticles}</span>
            <span className="qteArticles">Nombre total d'articles : {infoPanier.qteArticles}</span>
            <span className="sousTotal">Sous-total : {infoPanier.st}</span>
            <span className="tps">TPS : {infoPanier.tps}</span>
            <span className ="tvq">TVQ : {infoPanier.tvq}</span>
            <span className="total">Total : {infoPanier.total}</span>
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
    info.st = sousTotal.toFixed(2);

    //TPS
    let tps = sousTotal * 0.05;
    info.tps = tps.toFixed(2);

    let tvq = sousTotal * 0.09975;
    info.tvq = tvq.toFixed(2);

    info.total =(sousTotal + tps + tvq).toFixed(2);

    return info;

    console.log("Sous Tot",sousTotal);
}