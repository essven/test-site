"use strict";

//modal window
const modal = document.querySelector('.modal');
const buttonsOrder = document.querySelectorAll('button');

buttonsOrder.forEach(button =>{
    button.addEventListener('click', ()=>{
        openModal();
    });
});

modal.addEventListener('click', (e) => {
    if (e.target == modal || e.target.getAttribute('data-close') == ''){
        closeModal();
    }
});

function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
}

function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
}

// change size
const sizeConteiner = document.querySelectorAll('.size');

sizeConteiner.forEach(elem => {

    elem.addEventListener('click', e => {
        if(!e.target.classList.contains('selected') && !e.target.classList.contains('not-available')){
            e.target.classList.add('selected');
        }else{
            e.target.classList.remove('selected');
        }
    });
});

// change class for filter: everyday or erotic

const buttons = document.querySelectorAll('.button');
// const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();

        buttons.forEach(elem => {
            elem.classList.remove('active');
        });
        e.target.classList.add('active');

        // cards.forEach(card => {
        //     console.log(e.target.getAttribute('data'), card.getAttribute('data'));
        //     if (e.target.getAttribute('data') == card.getAttribute('data')) {
        //         card.style.display = 'block';
        //     }else{
        //         card.style.display = 'none';
        //     }            
        // });
    });  
});

