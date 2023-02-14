let bold=0
let italic=0
let under=0
let upper=0
const totalValue=document.getElementById('text');


document.getElementById('bold').addEventListener('click',function(){
    bold+=1
    if(bold%2 !=0){
        totalValue.style.fontWeight='bold'
    }
    else{
        totalValue.style.fontWeight='normal'
    }
});
document.getElementById('italic').addEventListener('click',function(){
    italic+=1
    if(italic%2 !=0){
        totalValue.style.fontStyle='italic'
    }
    else{
        totalValue.style.fontStyle='normal'
    }
})
document.getElementById('under').addEventListener('click',function(){
    under+=1
    if(under%2 !=0){
        totalValue.style.textDecoration='underline'
    }
    else{
        totalValue.style.textDecoration='none'
    }
})
document.getElementById('left').addEventListener('click',function(){
       totalValue.style.textAlign='left'
})
document.getElementById('center').addEventListener('click',function(){
       totalValue.style.textAlign='center'
})
document.getElementById('right').addEventListener('click',function(){
       totalValue.style.textAlign='right'
})

document.getElementById('quantity').addEventListener('click',function(){
    const number = document.getElementById("quantity").value;
  totalValue.style.fontSize = `${number}px`;
})

document.getElementById('big').addEventListener('click',function(){
    under+=1
    if(under%2 !=0){
        totalValue.style.textTransform='uppercase'
    }
    else{
        totalValue.style.textTransform='lowercase'
    }
})

document.getElementById('colors').addEventListener('change',function(){
   const color=document.getElementById('colors').value ;
   totalValue.style.color=color;

})