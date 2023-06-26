function makeDiv(){
    const gridSizeInput = document.getElementById('cellVal');
    const cells = parseInt(gridSizeInput.value);

    if (isNaN(cells) || cells <= 1 || cells > 64) {
        alert('Please enter a grid size between 2 and 64.');
        return;
      }
const container = document.querySelector('#container');    
    container.style.setProperty('--grid-cells', cells);
    container.innerHTML = '';
    for (let i=0; i < cells*cells; i++){
        let cell = document.createElement('div');
        cell.classList.add('gridDiv');
        container.appendChild(cell);
    } 
}

container.addEventListener('click', event => {
    let target = event.target;  
    if (target.style.backgroundColor === 'black'){
        target.style.backgroundColor = 'white';
    }  
    else if (target.className === 'gridDiv') {
        target.style.backgroundColor = 'black';
    }
})


