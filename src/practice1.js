const parseData = ({data, column}) => {
    return data.map((dataValue) => {
        const dataObject = {};
        column.map((columnObject) => columnObject.name)
        .forEach((name, index) => {   
            dataObject[name] = dataValue[index];         
        });
        return dataObject;
    });
}

export { parseData };
