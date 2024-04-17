import barcodes from "jsbarcode/src/barcodes";
import {toSparkLineData} from "./Utils";

export const ITF = (source : any) => {
    const itf = new barcodes.ITF(source.toString(),{displayValue:false, flat: true});
    const encoded = itf.encode();
    return toSparkLineData(encoded.data);
}

export const ITF14 = (source : any) => {
    const itf14 = new barcodes.ITF14(source.toString(),{displayValue:false, flat: true});
    const encoded = itf14.encode();
    return toSparkLineData(encoded.data);
}