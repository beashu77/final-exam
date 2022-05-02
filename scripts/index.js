// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar} from "../components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

//https://masai-mock-api.herokuapp.com/news/top-headlines?country=
//const input_con=document.getElementById("sidebar").children;

// function cSearch(){
    


// }

// for(let el of input_con){
//     el.addEventListener("click",cSearch)
// }

import {SearchImages,append,Search_from_input} from "./fetch.js"

let search=()=>{
    let value="in";
    SearchImages(value).then((data)=>{
        console.log(data);
        let container=document.getElementById("results");
        container.innerHTML=null;
        append(data.articles,container);
    });
};

search();


let navsearch=(e)=>{
    if(e.key==="Enter"){

        let value=document.getElementById("search_input").value;
        Search_from_input(value).then((data)=>{
            console.log(data);
            var input=data.articles;
        //     let container=document.getElementById("results");
        //     container.innerHTML=null;
        //     append(data.articles,container);
        localStorage.setItem("news_after_search",JSON.stringify(input));
           window.location.href="search.html"
        });

    }
}
document.getElementById("search_input").addEventListener("keydown",navsearch);








let categories=document.getElementById("sidebar").children;

function catsearch(){
    SearchImages(this.id).then((data)=>{
        console.log(data);
        let container=document.getElementById("results");
        container.innerHTML=null;
        append(data.articles,container);
    });
}



for(let el of categories){
    el.addEventListener("click",catsearch)
}