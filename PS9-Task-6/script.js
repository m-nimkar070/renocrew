const URL = "https://official-joke-api.appspot.com/jokes/ten"
const imgURL ="https://miro.medium.com/max/1024/1*DUblwf5wpci3hVlmG4ZnDw.png"

const getJokes = async () =>{
  const response = await fetch(URL)
  .then((response => {return response.json()}))
  // console.log(data);
  .then(data =>{
    console.log(data);
    let ihtml = ''
    data.forEach(joke =>{
      ihtml += `
      <div class="card";">
        <img class="card-img-top" src=${imgURL} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${joke.setup}</h5>
          <p class="card-text">${joke.punchline}</p>
          <a href=${URL} target="_blank" class="btn btn-primary">Go to jokes Source</a>
        </div>
      </div>
      `
    });
    containerBody.innerHTML = ihtml;
  })
};

getJokes();

//Practice set questions

// let n = localStorage.getItem("note");
// alert("Your note is " + n);

// let a = prompt("Enter your note");
// if(a){
//   localStorage.setItem("note", a);
// }

// let c = confirm("Do you want to delete your note ?");
// if(c){
//   localStorage.removeItem("note");
//   alert("Note deleted successfully");
// }