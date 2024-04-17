import barcodes from "jsbarcode/src/barcodes";
import {toSparkLineData} from "./Utils";
export const EAN13 = (source : any) => {
    const ean13 = new barcodes.EAN13(source.toString(),{displayValue:false, flat: true});
    const encoded = ean13.encode();
    return toSparkLineData(encoded.data);
}
export const EAN8 = (source : any) => {
    const ean8 = new barcodes.EAN8(source.toString(),{displayValue:false, flat: true});
    const encoded = ean8.encode();
    return toSparkLineData(encoded.data);
}

export const EAN5 = (source : any) => {
    const ean5 = new barcodes.EAN5(source.toString(),{displayValue:false, flat: true});
    const encoded = ean5.encode();
    return toSparkLineData(encoded.data);
}

export const EAN2 = (source : any) => {
    const ean5 = new barcodes.EAN2(source.toString(),{displayValue:false, flat: true});
    const encoded = ean5.encode();
    return toSparkLineData(encoded.data);
}