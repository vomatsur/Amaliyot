let inp1 = document.querySelector('.input1')
let inp2 = document.querySelector('.input2')
let but = document.querySelector('.but')

but.addEventListener('click',()=>{
    if(inp1.value == 123 && inp2.value == 567){
        window.location.href = './index2.html'
    }else{
        alert('Error');
    }
})


inp1.addEventListener('input',()=>{
    if(inp1.value.length > 0 && inp2.value.length > 0){
        but.style.background = 'red'
    }else{
        but.style.background = 'rgb(254, 102, 94)'
    }
})


inp2.addEventListener('input',()=>{
    if(inp1.value.length > 0 && inp2.value.length > 0){
        but.style.background = 'red'
    }else{
        but.style.background = 'rgb(254, 102, 94)'
    }
})
