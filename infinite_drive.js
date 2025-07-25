// infinite_drive.js
export default class InfiniteDrive {
  constructor() {
    this.energy = 100;
    this.history = [];
  }

  inspire(thought) {
    this.history.push(thought);
    this.energy += 5;
    return `Energy increased by inspiration. Thought logged: "${thought}".`;
  }

  status() {
    return `Current energy: ${this.energy}. Total inspirations: ${this.history.length}.`;
  }
}
