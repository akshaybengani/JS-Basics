const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is completed');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData()
        .then(text2 => {
            console.log(text2);
        });
    }).then(text3 => {
        console.log(text3);
    });
}, 2000);

console.log('Before the sync');

// This is async code because this will take time explicitly from your hardware
// The setTimeout is a inbuilt function
setTimeout(() => {
    console.log('Timer is Done!');
}, 2000);

console.log('Hello');
console.log('Hi0');