// Module 113C - Memory Manager
let memory = {};

export function remember(key, value) {
  memory[key] = value;
}

export function recall(key) {
  return memory[key] || null;
}

export function clearMemory() {
  memory = {};
}