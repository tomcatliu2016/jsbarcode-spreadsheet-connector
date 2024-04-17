import { describe, test, expect } from "@jest/globals";

import barcodes from 'jsbarcode/src/barcodes';

describe('jsbarcode', () => {
    test('jsbarcode encoding is correct', () => {
        const ean13 = new barcodes.EAN13('123456789012',{displayValue:false, flat: true});
        const encoded = ean13.encode();
        expect(encoded.data).toBe('10100100110111101001110101100010000101001000101010100100011101001110010110011011011001001000101');
        expect(encoded.text).toBe('1234567890128');
    });

});