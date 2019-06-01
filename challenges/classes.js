// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attrs){
  this.length = attrs.length;
  this.width = attrs.width;
  this.height = attrs.height;
  }

  volume(){
    return `Cuboid Volume: ${this.length * this.width * this.height}`
  }

  surfaceArea(){
    return `Cuboid Surface Area: ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`
  }

  drawCuboid(){ //prints a face of the cuboid
    let row = '';
    for (let i = 0; i < this.length; i++){
      row += '⬛'
    }
    for (let i = 0; i < this.height; i++){
      console.log(row)
    }
  }

}

let cuboid = new CuboidMaker({length: 4, width: 5, height: 5})

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attrs){
    super(attrs);
    this.isCube = (this.length !== this.width || this.length !== this.height || this.width !== this.height); // checks if object is a cube
  }

  volume(){
    if (this.isCube){
      return (`${this} is not a cube! please use CuboidMaker`)
    }
    return `Cube Volume: ${Math.pow(this.height, 3)}`
  }

  surfaceArea(){
    if (this.isCube){
      return (`${this} is not a cube! please use CuboidMaker`)
    }
    return `Cube Surface Area: ${6 * Math.pow(this.height, 2)}`;
  }
}

let notACube = new CubeMaker({length: 4, width: 5, height: 5})
let cube = new CubeMaker({length: 9, width: 9, height: 9})

console.log(notACube.volume());
console.log(notACube.surfaceArea());

notACube.drawCuboid();

console.log(cube.volume());
console.log(cube.surfaceArea());

cube.drawCuboid();
