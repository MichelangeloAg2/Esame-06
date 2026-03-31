export interface ISerie {
    id: number;
    titolo: string;
    descrizione?: string;
    anno_inizio?: number;
    anno_fine?: number;
    stagioni?: number;
    regista?: string;
    genere?: string;
    categoria_id: number;

    //  MEDIA
    locandina?: string;
    video_path?: string;

    // LOGICA FRONTEND
    continua_a_guardare?: boolean;
    preferito?: boolean;
    consigliato?: boolean;

    // RELAZIONI
    categoria?: {
        id: number;
        nome: string;
    };

    episodi?: any[];

    created_at?: string;
    updated_at?: string;
}