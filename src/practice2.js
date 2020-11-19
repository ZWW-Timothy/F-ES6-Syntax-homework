const inject = (stringData, objectData) => {
    const result = [];
    for (let i = 0; i < stringData.length; i += 1) {
        const objectTemp = objectData.find(object => object.index === i);
        if (objectTemp) {
            result.push(objectTemp.content);
        }
        result.push(stringData[i]);
    }
    return result;
}

export { inject };
