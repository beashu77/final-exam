let SearchImages=async(value)=>{
    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`);
        let data=await res.json();
        return data;

    }catch(err){
        console.log(err);
    }
};

let append=(data,container)=>{
    console.log("fetch",data)
    data.map((el)=>{
        let div=document.createElement("div");
        div.setAttribute("class","news");

        let innDiv=document.createElement("div");
        innDiv.setAttribute("id","innDiv")
        let img=document.createElement("img");
        img.setAttribute("id","img")
        img.src=el.urlToImage;
        let mini=document.createElement("div");
        mini.setAttribute("id","mini")
        let h3=document.createElement("h3");
        h3.innerText=el.title;
        let p=document.createElement("p");
        p.innerText=el.description;
        mini.append(h3,p);
        innDiv.append(img);

        div.append(innDiv,mini);
        container.append(div);


    });
}


let Search_from_input=async(value)=>{
    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        let data=await res.json();
        return data;

    }catch(err){
        console.log(err);
    }
};

export{SearchImages,append,Search_from_input}