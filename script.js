const size=640
let boxno=16
const divcontainer=document.querySelector(".divcont")
draw(boxno);

let eraser=false;
let rgb=false;

let drawing= false;
document.addEventListener('mousedown',pressed)
document.addEventListener('mouseup',left)
function pressed()
{
    //console.log("Pressed")
    drawing=true;
}
function left()
{
    //console.log('left')
    drawing=false;
}

const btn=document.querySelector('.btn')
btn.addEventListener('click',clicked)
const ebtn=document.querySelector('.eraser')
ebtn.addEventListener('click',erase)
const rbtn=document.querySelector('.rgb')
rbtn.addEventListener('click',multicolour)
const cbtn=document.querySelector('.clear')
cbtn.addEventListener('click',clear)
function clicked()
{
    const inp=document.querySelector('input');
    boxno=inp.value;
    if(boxno<1||boxno>100)
    {
        alert("Number must be between 1 and 100");
        return
    }
    draw(boxno);
}
function draw(boxnumber)
{
    console.log(boxnumber)
    const divrows=document.createElement('div');
    divrows.classList.add('divrow')
    
    while(divcontainer.firstChild)
    divcontainer.removeChild(divcontainer.lastChild)
    
    for(let i=0;i<boxnumber;i++)
    {
        const divcols=document.createElement('div');
        divcols.classList.add('divcol')
        for(let i=0;i<boxnumber;i++)
        {
            const div1=document.createElement('div'); 
            div1.style.border= "1px solid black"
            div1.style.width=`${size/boxnumber}px`
            div1.style.height=`${size/boxnumber}px`
            div1.addEventListener('mouseenter',colour)
            divcols.appendChild(div1);
        }
        divrows.appendChild(divcols)
    }
    divcontainer.appendChild(divrows);
}
function colour(e)
{
    if(drawing)
    {
        if(eraser)
        {
            e.target.style.backgroundColor="white";
        }
        else
        {
            if(rgb)
            {
                if(e.target.style.backgroundColor=='')
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
            }
            else
            {
                e.target.style.backgroundColor="black";
            }
        }
    }
}
function erase(e)
{
    if(eraser)
    {
        eraser=false
        e.target.textContent='Erase'
    }
    else
    {
        eraser=true
        e.target.textContent='Draw'
    }
}
function clear()
{
    draw(boxno);
}
function multicolour(e)
{
    if(rgb)
    {
        rgb=false
        e.target.textContent='RGB'
    }
    else
    {
        rgb=true
        e.target.textContent='Black'
    }
}