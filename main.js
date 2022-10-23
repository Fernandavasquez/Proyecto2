const contador = document.getElementById("conte");
const incre = document.getElementById("incre");
const dism = document.getElementById("dise");
const res = document.getElementById("resete");

let num = 0;
incre.addEventListener("click", ()=>{
    if(num>=0)
    {
 contador.style="color:green";
    }

        num++;
        contador.innerText = num;
    
    
    
});

dism.addEventListener("click", ()=>{
    if(num<=0){
        contador.style="color:red";
    }

    
        num--;
        contador.innerText = num;
    
   
});


res.addEventListener("click", ()=>{
    num=0;
    contador.style="color:yellow";
    contador.innerText = num;
});