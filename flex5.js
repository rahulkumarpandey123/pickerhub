//let main=document.querySelector("#main");
function hide(){
   let cancel=document.querySelector("#cancel");
   let main=document.querySelector("#main");
   main.style.display="none";
   cancel.style.display="block";
}
function show(){
    let cancel=document.querySelector("#cancel");
    let main=document.querySelector("#main");
    main.style.display="flex";
    cancel.style.display="none";
 }
