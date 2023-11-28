// Fetching data from local text file using promise

fetch("data.txt")
  .then(function (result) {
    return result.text();
  })
  .then(function (data) {
    const paraGraph = document.querySelector(".api-data");
    paraGraph.textContent = data;
  })
  .catch(function (error) {
    console.log(error);
  });

// Fetching data from local json file using promise

fetch('data.json')
 .then(function(result){
    return result.json();
}).then(function(data){
    for(let i=0;i<data.length;i++){
        console.log(`Name:${ data[i].name } Age: ${data[i].age}`);
    }
}).catch(function(error){
    console.log(error);
})

//Fetching data from local text file using async and await

async function getTextData(){
   try {
    const response = await fetch('data.txt');
    const data = await response.text();
    console.log(data);
   } catch (error) {
    console.log(error);
   }
}
getTextData();

// Fetching data from local json file using async and await

async function getTextData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      console.log(`Name:${data[i].name} Age: ${data[i].age}`);
    }
  } catch (error) {
    console.log(error);
  }
}
getTextData();

// Fetching data from URL link using async and await

async function getTextData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      for (let i = 0; i < data.length; i++) {
        console.log(`Name:${data[i].name} & User Name: ${data[i].username}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  getTextData();
