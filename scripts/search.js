// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import {append,Search_from_input} from "./fetch.js"

let navsearch=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("search_input").value;
        Search_from_input(value).then((data)=>{
           // console.log(data);
            let container=document.getElementById("results");
            container.innerHTML=null;
            append(data.articles,container);
        });

    }
}
document.getElementById("search_input").addEventListener("keydown",navsearch);



var news=JSON.parse(localStorage.getItem("news_after_search"))||[];
//console.log(news);
let container=document.getElementById("results");
        container.innerHTML=null;
        append(news,container);



let newspage=()=>{
    
    console.log(news.title)
   
    //     let container=document.getElementById("results");
    //     container.innerHTML=null;
    //     append(data.articles,container);
    localStorage.setItem("news",JSON.stringify(NewsData));
   // window.location.href="news.html"
    

}


document.querySelector(".news").addEventListener("click",newspage);
