

export type IGET_Category = {
    _id: string;
    en: string;
    img: string;
    count: number;
}
export type IGET_Product = {
    cat:{
        en:string
    }
    img : string;
    subCat: {
        en: string;
    }
    peiceQty:{
        grossWeightForPeice:number;
        unit:string
    }
}
