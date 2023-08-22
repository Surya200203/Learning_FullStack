let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');


btn.addEventListener('click',function(){
    let task = document.createElement('li');
    task.innerText = inp.value;
    

    let delBtn = document.createElement('button');
    delBtn.innerText ="delete";
    delBtn.classList.add("delete");

    task.appendChild(delBtn);
    ul.appendChild(task);
    inp.value ='';
    
});

ul.addEventListener('click',function(event){
    if(event.target.nodeName == "BUTTON"){
        let litItem = event.target.parentElement;
        litItem.remove();
    }
});

