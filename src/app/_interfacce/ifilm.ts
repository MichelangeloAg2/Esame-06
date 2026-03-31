export interface IFilm {
    id: number;
    titolo: string;
    descrizione: string;
    anno_uscita: number;
    durata: number;
    regista: string;
    categoria_id: number;
    categoria?: {
        id: number;
        nome: string;
    };
    genere: string;
    locandina?: string;
    video?: string;
    voto: number;
    preferito?: boolean;
    consigliato?: boolean;
    continua_a_guardare?: boolean;
}