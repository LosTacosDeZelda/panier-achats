import "./Entete.css";

export default function Entete() {
    
    return(
        <header>
                <div className="logo"></div>
                <ul className="nav-principale">
                    <li>Produits</li>
                    <li>À propos de nous</li>
                    <li>Nous contacter</li>
                </ul>
                <ul className='nav-utilisateur'>
                    <li>Panier</li>
                    <li>Compte</li>
                </ul>
        </header>
    );
}