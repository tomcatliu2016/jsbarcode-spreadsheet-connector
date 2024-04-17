import { EAN13, EAN8, EAN5, EAN2 } from './jsbarcode_connector/EAN';
import { UPC, UPCE } from './jsbarcode_connector/UPC';
import { CODE39, CODE128, CODE128A, CODE128B, CODE128C } from './jsbarcode_connector/CODE';
import { ITF, ITF14 } from './jsbarcode_connector/ITF';
import { MSI, MSI10, MSI11, MSI1010, MSI1110 } from './jsbarcode_connector/MSI';
import {BarcodeOpt} from "./jsbarcode_connector/Utils";


(global as any).EAN13 = EAN13;
(global as any).EAN8 = EAN8;
(global as any).EAN5 = EAN5;
(global as any).EAN2 = EAN2;

(global as any).UPC = UPC;
(global as any).UPCE = UPCE;

(global as any).CODE39 = CODE39;
(global as any).CODE128 = CODE128;
(global as any).CODE128A = CODE128A;
(global as any).CODE128B = CODE128B;
(global as any).CODE128C = CODE128C;

(global as any).ITF = ITF;
(global as any).ITF14 = ITF14;

(global as any).MSI = MSI;
(global as any).MSI10 = MSI10;
(global as any).MSI11 = MSI11;
(global as any).MSI1010 = MSI1010;
(global as any).MSI1110 = MSI1110;

(global as any).BarcodeOpt = BarcodeOpt;

