import barcodes from "jsbarcode/src/barcodes";
import {toSparkLineData} from "./Utils";
export const CODE39 = (source : any) => {
    const code39 = new barcodes.CODE39(source.toString(),{displayValue:false, flat: true});
    const encoded = code39.encode();
    return toSparkLineData(encoded.data);
}

export const CODE128 = (source : any) => {
    const code128 = new barcodes.CODE128(source.toString(),{displayValue:false, flat: true});
    const encoded = code128.encode();
    return toSparkLineData(encoded.data);
}
export const CODE128A = (source : any) => {
    const code128a = new barcodes.CODE128A(source.toString(),{displayValue:false, flat: true});
    const encoded = code128a.encode();
    return toSparkLineData(encoded.data);
}

export const CODE128B = (source : any) => {
    const code128b = new barcodes.CODE128B(source.toString(),{displayValue:false, flat: true});
    const encoded = code128b.encode();
    return toSparkLineData(encoded.data);
}

export const CODE128C = (source : any) => {
    const code128c = new barcodes.CODE128C(source.toString(),{displayValue:false, flat: true});
    const encoded = code128c.encode();
    return toSparkLineData(encoded.data);
}