import Interface from './interface/IndexInterface.js';
import World from './game entities/World/IndexWorld.js';

const worldInstance = new World();
new Interface(worldInstance);
