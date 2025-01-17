const gratersymbol1 = document.querySelector( ".grater-symbol1" );
const discriptionsublist1 = document.querySelector(".discription-sublist1");
discriptionsublist1.classList.add( "sublist-active");
gratersymbol1.addEventListener("click", ()=>{
     discriptionsublist1.classList.toggle("sublist-active");

     if(gratersymbol1.style.border==""){
         gratersymbol1.style.border="2px solid blue";
         gratersymbol1.style.transform="rotate(90deg)";
         
        }else{
            gratersymbol1.style.border="";
            gratersymbol1.style.transform="rotate(-0deg)";
     }
})
gratersymbol1.classList.add("rotate-transition");


const gratersymbol2 = document.querySelector( ".grater-symbol2" );
const discriptionsublist2 = document.querySelector(".discription-sublist2");
discriptionsublist2.classList.add( "sublist-active");

gratersymbol2.addEventListener("click", ()=>{
    discriptionsublist2.classList.toggle("sublist-active");
    if(gratersymbol2.style.border=="")
    {
        gratersymbol2.style.border="2px solid blue";
        gratersymbol2.style.transform="rotate(90deg)";
    }else{
        gratersymbol2.style.border="";
        gratersymbol2.style.transform="rotate(0deg)";
    }
})
gratersymbol2.classList.add("rotate-transition");


const maincontentpage = document.querySelector(".main-content-page");
const maincontentpage2 = document.querySelector(".main-content-page2");

const articlebutton = document.querySelector(".article-button");
const talkbutton = document.querySelector(".talk-button");

maincontentpage2.classList.add("main-content-page-hide");


talkbutton.addEventListener("click",(event)=>{
    event.preventDefault(); 
    maincontentpage.classList.add("main-content-page-hide");
    // maincontentpage2.classList.add("main-content-page-show"); 
    maincontentpage2.classList.remove("main-content-page-hide"); 
    // maincontentpage.classList.remove("main-content-page-show");
}) 

articlebutton.addEventListener("click",(event)=>{
    event.preventDefault(); 
    maincontentpage2.classList.add("main-content-page-hide"); 
    // maincontentpage2.classList.remove("main-content-page-show");
    // maincontentpage.classList.add("main-content-page-show");
    maincontentpage.classList.remove("main-content-page-hide");
})
