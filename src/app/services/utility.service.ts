import { Injectable } from "@angular/core";
import { sha512 } from "js-sha512";
import { jwtDecode } from "jwt-decode";

@Injectable({ providedIn: 'root' })

export class UtilityService {



    //-------------FUNZIONE LEGGITOKEN------------------//
    /**
     * Funzione che legge i dati del token
     * 
     * @param token stringa che rappresenta il token 
     * @returns un oggetto che rappresenta i dati del token, null se il token non è valido
     */
    static leggiToken(token: string): any {
        try {
            return jwtDecode(token);
        }
        catch (Error) {
            console.error("Errore di lettura Token:");
            return null;
        }
    }


    //------------------FUNZIONE PER NASCONDERE LA PASSWORD------------------//

    /**
     * Funzione che calcola HASH 512 della password concatenata con il sale
     * 
     * @param password stringa ch rappresenta la password da nascondere
     * @param sale stringa che rappresenta il un'altra stringa da legare alla password.
     * @returns  stringa che rappresenta l'HASH sha512 della password concatenata con il sale
     */
    static nascondiPassword(password: string, sale: string): string {
        const tmp: string = password + sale;
        const hash: string = sha512(tmp);

        return hash;
    }

    //------------------FUNZIONE PER CALCOLARE HASH UTENTE------------------//
    /**
     * 
     * @param str Stringa da cifrate
     * @returns Ritorna stringa cifrata
     */


    static hash(str: string): string {
        const tmp = sha512(str);
        return tmp;
    }
}