//Fetch API using promise, async and await in JS

// Fetching data from local text file using promise
// fetch('data.txt').then(function(result){
//     return result.text();
// }).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// })

//Fetching data from local text file using async and await
// async function getTextData(){
//    try {
//     const response = await fetch('data.txt');
//     const data = await response.text();
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getTextData();


// Fetching data from local json file using promise
fetch('data.json').then(function(result){
    return result.text();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})



//Fetching data from local json file using async and await
// async function getTextData(){
//     try {
//      const response = await fetch('data.json');
//      const data = await response.text();
//      console.log(data);
//     } catch (error) {
//      console.log(error);
//     }
//  }
//  getTextData();