string=""
let btn=document.querySelectorAll(".button");
let inp=document.querySelector(".inp");
Array.from(btn).forEach((b)=>{
b.addEventListener("click",(e)=>{
    if (e.target.innerText == "="){
        let ev=eval(string);
        inp.value=ev;
        console.log(inp.value=ev);
    }
    else if(e.target.innerText == "AC"){
        string="";
        inp.value=string;
    }
    else if (e.target.innerText=="÷"){
         string = string + "/";
        inp.value=inp.value+"÷";
    }
    else if(e.target.innerText=="x"){
        inp.value=inp.value+"x";
        string+="*";
    }
    else if(e.target.dataset.value == "delete"){
        string=string.slice(0,-1);
        inp.value=inp.value.slice(0,-1);
        console.log(inp.value);
        console.log(string);
    }
    else{
    string=string+e.target.innerText;
    inp.value=inp.value+e.target.innerText;
    console.log(string);
}
})
});