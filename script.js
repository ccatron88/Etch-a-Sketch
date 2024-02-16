const gridDiv = document.querySelector("#grid-container");

document.addEventListener('DOMContentLoaded', () => {
    let gridNum = 16;
    let squareSize = 660 / gridNum;
    
    // create given number of divs
    for (let i = 0; i < gridNum; i++) {
        const rowElement = document.createElement('div')
        rowElement.setAttribute("style", "display: flex; flex-direction: row;");
        for (let j = 0; j < gridNum; j++) {
            const divElement = document.createElement('div');
            divElement.classList.add('grid-div');
            divElement.setAttribute('style', `height: ${squareSize}px; width: ${squareSize}px`)
            rowElement.appendChild(divElement);
        }
        gridDiv.appendChild(rowElement);
    }

    // add event listener for all divs with class 'grid-div' for mouseover effect
    document.querySelectorAll('.grid-div').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('black-background');
        })
    })
})

const createGrid = (number) => {
    let gridNum = number;
    let squareSize = 660 / gridNum

    document.querySelectorAll('.grid-div').forEach(item => {
        item.remove();
    })
    
    // create given number of divs
    for (let i = 0; i < gridNum; i++) {
        const rowElement = document.createElement('div')
        rowElement.setAttribute("style", "display: flex; flex-direction: row;");
        for (let j = 0; j < gridNum; j++) {
            const divElement = document.createElement('div');
            divElement.classList.add('grid-div');
            divElement.setAttribute('style', `height: ${squareSize}px; width: ${squareSize}px`)
            rowElement.appendChild(divElement);
        }
        gridDiv.appendChild(rowElement);
    }

    let red, green, blue = ``

    // add event listener for all divs with class 'grid-div' for mouseover effect
    document.querySelectorAll('.grid-div').forEach(item => {
        item.addEventListener('mouseenter', () => {
            // item.classList.add('black-background');
            red = colorNum();
            blue = colorNum();
            green = colorNum();
            item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        })
    })
}

document.querySelector('#squares-btn').addEventListener('click', () => {
    message = 'Please enter the number of squares \nyou would like the grid to display: '
    let gridNumber = prompt(message, 16);
    if (gridNumber > 100) {
        message = 'Number is too large. Please select a number \nthat is 100 or less';
        gridNumber = prompt(message, 16);
        createGrid(gridNumber)
    } else {
        createGrid(gridNumber);
    }
})

const colorNum = () => {
    return randomNum = Math.floor((Math.random() * (255 - 0) + 0));
}
