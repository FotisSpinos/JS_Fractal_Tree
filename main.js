"use strict";

let canvas;
let ctx;

let inputFieldAngle;
let inputFieldSize;

//initialize
window.onload = function()
{
    init();
    generateTree();
}

// Sets up all application elements
function init()
{
    //Add canvas to the html document
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    // set canvas dimentions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 70;

    //define canvas context
    ctx = canvas.getContext('2d');

    // create input box text for fractal angle
    let angleText = document.createTextNode("Angle offset \t");
    document.body.appendChild(angleText);

    //create input field box for fractal angle
    inputFieldAngle = document.createElement("INPUT");
    inputFieldAngle.setAttribute("type", "text");
    document.body.appendChild(inputFieldAngle);

    inputFieldAngle.defaultValue = 10;

    // create input box text for fractal angle
    let sizeText = document.createTextNode("\t Size Coefficient \t");
    document.body.appendChild(sizeText);

    //create input field box for fractal size
    inputFieldSize = document.createElement('INPUT');
    inputFieldAngle.setAttribute("type", "text");
    document.body.appendChild(inputFieldSize);

    inputFieldSize.defaultValue = 0.65;
}

function updateInput()
{
    // Generate tree when the browser is ready to render
    requestAnimationFrame(generateTree);
}

function generateTree()
{
    //Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // create first branch
    let root = new Branch(canvas.width / 2, canvas.height, 200,  0);

    let angleOffset = parseFloat(inputFieldAngle.value);
    let sizeCoefficient = parseFloat(inputFieldSize.value);

    //handle special cases for the angle offset
    if(angleOffset < 0)
        angleOffset = -angleOffset;
    else if(angleOffset == 0)
        angleOffset = 1;

    //handle special cases for the size coefficient
    if(sizeCoefficient > 0.7)
        sizeCoefficient = 0.7;
    else if(sizeCoefficient <= 0)
        sizeCoefficient = 0.1;

    //Creates the fractal tree object
    let fractalTree = new FractalTree(root, angleOffset, sizeCoefficient, 0.1);

    //Draw the fractal tree
    fractalTree.draw();
}

//Add Event listener
addEventListener("input", updateInput);