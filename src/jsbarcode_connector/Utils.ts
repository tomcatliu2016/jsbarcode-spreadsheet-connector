export const toSparkLineData = (jsCodeData : string) => {
    let lastChar=null;
    let index = -1;
    let ret=[];
    for (let i = 0; i < jsCodeData.length; i++) {
        if(jsCodeData[i]!==lastChar){
            index += 1;
            ret[index]= [1];
        } else if(jsCodeData[i]===lastChar){
            ret[index][0] += 1;
        }
        lastChar = jsCodeData[i];
    }
    return ret;
}

export const BarcodeOpt = (source : any) => {
    return [["charttype","bar"],["color1","black"],["color2","white"]];
}