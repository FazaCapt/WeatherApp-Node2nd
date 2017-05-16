var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Faza'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);

}

getUser(31, (userObject) => {
    console.log(userObject);
});

//jadi callback akan memenuhi dulu baru diPrint