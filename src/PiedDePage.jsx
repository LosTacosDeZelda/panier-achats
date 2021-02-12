import "./PiedDePage.scss";

export default function PiedDePage() {
    const annee = new Date().getFullYear();
    return(
        <footer>
            <p>&copy;{annee} Tous droits réservés</p>
        </footer>
    );
}