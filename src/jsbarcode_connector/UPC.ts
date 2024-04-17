import barcodes from "jsbarcode/src/barcodes";
import {toSparkLineData} from "./Utils";

export const UPC = (source : any) => {
    const upc = new barcodes.UPC(source.toString(),{displayValue:false, flat: true});
    const encoded = upc.encode();
    return toSparkLineData(encoded.data);
}

export const UPCE = (source : any) => {
    const upce = new barcodes.UPCE(source.toString(),{displayValue:false, flat: true});
    const encoded = upce.encode();
    return toSparkLineData(encoded.data);
}