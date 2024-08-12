let mydiv = document.getElementById('my-div');

document.addEventListener('mousemove',(e)=>{
    move(e)
})

function move(e){
    let x = e.pageX;
    let y = e.pageY;
    console.log(e);
    mydiv.style.left = x-100 +'px';
    mydiv.style.top = y-100 +'px';
}