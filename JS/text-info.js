

let textAreaEle=document.querySelector("#text");
let text = null;

let data={
    uppecase:0,
    lowercase:0,
    digit:0,
    consonent:0,
    vovels:0,
    space:0,
    sentence:0,
    words:0,
};

const setText = () => {
    text=textAreaEle.value;

const findLength=(item)=>(item===null ? 0 :item.length)

if(text != null)
{
    data.sentence = findLength(text.match(/\056/gi));
    data.words =findLength (text.match(/[A-Za-z]+/gi));
    data.uppecase=findLength(text.match(/[A-Z]/g));
    data.lowercase=findLength(text.match(/[a-z]/g));
    data.digit=findLength(text.match(/\d/g));
    data.space=findLength(text.match(/[\s]/gi));
    data.vovels=findLength(text.match(/[aeiou]/gi));
    data.consonent=findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
   
}
localStorage.setItem("data", JSON.stringify(data));
window.location="info.html"; 
 
};
const getData =() =>{
    return JSON.parse(localStorage.getItem("data"));
}

const showData=()=>{
    let data = getData();
    let htmlContent="";
    
    for(item in data){

        htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;

    }
    document.querySelector(".info-wrapper").innerHTML=htmlContent;  
};
