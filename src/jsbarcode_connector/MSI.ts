import barcodes from "jsbarcode/src/barcodes";
import {toSparkLineData} from "./Utils";

export const MSI = (source : any) => {
    const msi = new barcodes.MSI(source.toString(),{displayValue:false, flat: true});
    const encoded = msi.encode();
    return toSparkLineData(encoded.data);
}

export const MSI10 = (source : any) => {
    const msi10 = new barcodes.MSI10(source.toString(),{displayValue:false, flat: true});
    const encoded = msi10.encode();
    return toSparkLineData(encoded.data);
}

export const MSI11 = (source : any) => {
    const msi11 = new barcodes.MSI11(source.toString(),{displayValue:false, flat: true});
    const encoded = msi11.encode();
    return toSparkLineData(encoded.data);
}

export const MSI1010 = (source : any) => {
    const msi1010 = new barcodes.MSI1010(source.toString(),{displayValue:false, flat: true});
    const encoded = msi1010.encode();
    return toSparkLineData(encoded.data);
}

export const MSI1110 = (source : any) => {
    const msi1010 = new barcodes.MSI1010(source.toString(),{displayValue:false, flat: true});
    const encoded = msi1010.encode();
    return toSparkLineData(encoded.data);
}