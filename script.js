// Base class Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    // Placeholder method to be overridden by subclasses
    draw() {
        return '';
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const circle = document.createElement('div');
        circle.className = 'shape circle';
        circle.style.backgroundColor = this.color;
        circle.style.width = '100px';
        circle.style.height = '100px';
        return circle;
    }
}

// Triangle class extending Shape
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const triangle = document.createElement('div');
        triangle.className = 'shape triangle';
        triangle.style.borderBottomColor = this.color;
        return triangle;
    }
}

class Rectangle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const rectangle = document.createElement('div');
        rectangle.className = 'shape rectangle';
        rectangle.style.backgroundColor = this.color;
        rectangle.style.width = '150px';
        rectangle.style.height = '100px';
        return rectangle;
    }
}



/* 
/* Hint: The ShapeManager class manages different types 
/* of shapes as instances of the Shape class, demonstrating polymorphism.
*/
// TODO: Create the ShapeManager class to manage shapes
class ShapeManager {
/* Hint: The ShapeManager class must include the following:
   - A constructor to initialize an empty array for storing shapes.
   - The addShape method to add new shapes to the array and call updateShapeContainer.
   - The updateShapeContainer method to update the UI by rendering each shape in the array.
*/
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
        this.updateShapeContainer();
    }

    updateShapeContainer() {
        const container = document.getElementById('shapeContainer');
        container.innerHTML = ''; // Clear existing shapes

        this.shapes.forEach(shape => {
            const shapeElement = shape.draw();
            container.appendChild(shapeElement);
        });
    }


}

// Initialize ShapeManager
// The ShapeManager instance will manage all shapes created through the form
const shapeManager = new ShapeManager();

// Handle form submission to add a new shape
document.getElementById('addShapeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const shapeType = document.getElementById('shapeType').value;
    const color = document.getElementById('color').value;

    let newShape;

    // Ensure that the Rectangle class is implemented before testing this functionality
    switch (shapeType) {
        case 'circle':
            newShape = new Circle(color);
            break;
        case 'rectangle':
            newShape = new Rectangle(color);
            break;
        case 'triangle':
            newShape = new Triangle(color);
            break;
    }

    shapeManager.addShape(newShape);

    // Clear form inputs
    document.getElementById('shapeType').value = 'circle';
    document.getElementById('color').value = '#000000';
});

// Final Hint: As you complete each TODO, test your code by adding some shapes through the form.
// Use console.log statements to help debug and ensure that each part of your code is working correctly.