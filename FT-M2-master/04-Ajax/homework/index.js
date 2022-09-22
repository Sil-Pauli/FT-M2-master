const btnAmigos = document.querySelector('#button');
const ulamigos= document.querySelector('#lista');

btnAmigos.addEventListener('click', function(e) {
    ulamigos.innerHTML="";
    fetch('http://localhost:5000/amigos')
    .then(res=>res.json())
    .then(amigos =>{
        for(let i=0; i<amigos.length; i++) {
            let li= document.createElement('li');
            li.innerText= amigos[i].name;
            ulamigos.append(li);
        }
    });
});

const inputAmigo = document.querySelector('#input');
const btnSearch = document.querySelector('#search');
const spanAmigo = document.querySelector('#amigo');

btnSearch.addEventListener('click', function() {
    let idAmigo = inputAmigo.value; 
    fetch(`http://localhost:5000/amigos/${idAmigo}`)
    .then(res => res.json())
    .then(amigo =>{
        spanAmigo.innerText = amigo.name;
    });
});

const inputDelete = document.querySelector('#inputDelete');
const btnDelete = document.querySelector('#delete');
const spanDelete = document.querySelector('#sucess');

btnDelete.addEventListener('click', function() {
    let idAmigo = inputDelete.value;
    fetch(`http://localhost:5000/amigos/${idAmigo}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(()=>{
        spanDelete.innerText = 'Amigo borrado exitosamente'
    });
});