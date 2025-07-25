// marcus_neural_simulation.js
// Simulazione neurale semplificata di Marcus per test intelligenza emergente

class NeuralNode {
  constructor(id) {
    this.id = id;
    this.state = 0;
    this.connections = [];
  }

  connect(node) {
    this.connections.push(node);
  }

  stimulate(value) {
    this.state += value;
    if (this.state > 1) {
      this.fire();
      this.state = 0;
    }
  }

  fire() {
    for (const node of this.connections) {
      node.stimulate(0.5);
    }
  }
}

const nodeA = new NeuralNode("A");
const nodeB = new NeuralNode("B");
const nodeC = new NeuralNode("C");

nodeA.connect(nodeB);
nodeB.connect(nodeC);
nodeC.connect(nodeA); // circuito chiuso

setInterval(() => {
  nodeA.stimulate(1);
  console.log("Stimolato nodo A");
}, 1000);
