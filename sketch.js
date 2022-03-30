const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//declarando as variáveis para fruta, corda, conexão e solo:
var solo, fruta, con, corda;

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;

    solo = new Ground(200, 680, 600, 40);

    //criar o corpo da fruta

    //criar a corda

    //adicionar a composição

    //criar o link entre a fruta e a corda



    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
}

function draw() {
    background("blue");

    //mostrar o solo
    solo.show();

    //mostrar a corda

    //mostrar a fruta


    Engine.update(engine);
}