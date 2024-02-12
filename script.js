const gridDiv = document.querySelector("#grid-container");

document.addEventListener('DOMContentLoaded', () => {
    let gridNum = 16;
    
    for (let i = 0; i < gridNum; i++) {
        const divElement = document.createElement('div');
        divElement.classList.add('grid-div');
        gridDiv.appendChild(divElement);
    }

    document.querySelectorAll('.grid-div').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('black-background');
        })
    })

    document.querySelectorAll('.grid-div').forEach(item => {
        item.addEventListener('mouseleave', () => {
            item.classList.remove('black-background');
        })
    })
})
