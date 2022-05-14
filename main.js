
let btn = document.querySelectorAll('button');
let reset = document.getElementById('reset')
// let div = document.querySelector('div');

// div.addEventListener('click', () => {
//     if(btn.style.display === 'none'){
//          btn.style.display='';
//     }
//     else{
//          btn.style.display='none';
//      }          I
// });



let refresh = document.getElementById('reset');
refresh.addEventListener('click', _ => {
            location.reload();
})

btn.forEach(function (item){
    console.log(item);
    item.addEventListener('click', function() {
        item.style.display = "none";
    })

})