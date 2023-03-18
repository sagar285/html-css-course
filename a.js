

// The Promise.resolve() static method "resolves"
//  a given value to a Promise. 
//  If the value is a promise,
//   that promise is returned;
//    if the value is a then able, Promise.resolve() 
// will call the then() method with two callbacks it
// prepared; otherwise the returned promise will 
// be fulfilled with the value.
console.log(Promise.resolve(5));





