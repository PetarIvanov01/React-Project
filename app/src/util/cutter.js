function cutterFunc(maximum, data) {

    let cuttedData = data;

    if (data.length > maximum) {
        cuttedData = data.substring(0, maximum);
    }

    cuttedData = cuttedData.concat(' ...');
    return cuttedData;
}

export const descCutter = cutterFunc.bind(null, 130);
export const cardDescCutter = cutterFunc.bind(null, 30);

