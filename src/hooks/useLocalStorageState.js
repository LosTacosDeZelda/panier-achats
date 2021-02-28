import { useEffect, useState } from "react";

export default function useLocalStorageState(valeurInit,etiquetteLocalStorage) {

    const [etat,setEtat] = useState(
        () => JSON.parse(localStorage.getItem(etiquetteLocalStorage)) || valeurInit
    )
    
    useEffect(
      () => localStorage.setItem(etiquetteLocalStorage, JSON.stringify(etat)),
      [etat, etiquetteLocalStorage]
    )

    return [etat, setEtat]
}