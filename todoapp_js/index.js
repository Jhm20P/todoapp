let tasks = [];
let tilføj = document.querySelector("#plus");
let tekst = document.querySelector("#indput");
let slet = document.querySelector("#minus");

function tilføjTekst(){
    let taskValue = tekst.value;
    tasks.push(taskValue);
    console.log(tasks);   
    let opgaver = document.querySelector(".task").innerHTML = tasks.join("<br>");
    /* let iterator = tasks.values();
    for(const value of iterator) {
        let opgaver = document.querySelector(".task").innerHTML = value;
    }
   tasks.foreach((element) => {
       let opgaver = document.querySelector(".task").innerHTML = element;
   });*/ 

}


function sletTekst(){
    tasks.pop();
   console.log(tasks) 
    let opgaver = document.querySelector(".task").innerHTML = tasks.join("<br>");
}

tilføj.addEventListener("click", tilføjTekst);
slet.addEventListener("click", sletTekst);
