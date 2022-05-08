
let btn=document.querySelector('button');
let div=document.querySelector('div');
div.addEventListener('click', () =>{
    if(btn.style.display === 'none'){
         btn.style.display='block';
    }
    else{
         btn.style.display='none';
                                
                                
              }          I
})

document.getElementById("reset").onclick = function() {
    btn.style.display ="";
};
