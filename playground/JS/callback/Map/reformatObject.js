var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];

var reformatedArray = kvArray.map((obj) => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});

console.log(reformatedArray);