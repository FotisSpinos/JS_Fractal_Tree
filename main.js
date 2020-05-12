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

    inputFieldAngle.defaultValue = 20;

    // create input box text for fractal angle
    let sizeText = document.createTextNode("\t Size Coefficient \t");
    document.body.appendChild(sizeText);

    //create input field box for fractal size
    inputFieldSize = document.createElement('INPUT');
    inputFieldAngle.setAttribute("type", "text");
    document.body.appendChild(inputFieldSize);

    inputFieldSize.defaultValue = 0.65;
}

let fractalTree;

function updateInput()
{
    
    //alert("Update occured");
    if(fractalTree != null)
        fractalTree.active = false;

    generateTree();
}

function generateTree()
{
    //Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // create first branch
    let root = new Branch(canvas.width / 2, canvas.height, 200,  0);

    let angleOffset = parseFloat(inputFieldAngle.value);
    let sizeCoefficient = parseFloat(inputFieldSize.value);

    //Creates the fractal tree object
    fractalTree = new FractalTree(root, angleOffset, sizeCoefficient, 0.1);

    //Draw the fractal tree
    fractalTree.draw();

    //alert("Update fractal");
}

//Add Event listener
addEventListener("input", updateInput);