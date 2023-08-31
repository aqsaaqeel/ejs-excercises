/* Q-1: These are the bindings that the project from Chapter 7 creates:

roads
buildGraph
roadGraph
VillageState
runRobot
randomPick
randomRobot
mailRoute
routeRobot
findRoute
goalOrientedRobot
If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module, and what would their interfaces look like?

Which pieces are likely to be available prewritten on NPM? Would you prefer to use an NPM package or write them yourself?

*/

// Solution:

/* A graph.js - (roads, buildGraph, roadGraph)
village.js - (VillageState)
robot.js - (runRobot, randomPick, randomRobot,  mailRoute, routeRobot, findRoute, goalOrientedRobot) */


/* Q-2: Write a CommonJS module, based on the example from Chapter 7, that contains the array of roads and exports the graph data structure representing them as roadGraph. 
It should depend on a module ./graph, which exports a function buildGraph that is used to build the graph. This function expects an array of two-element arrays 
(the start and end points of the roads).*/
//Solution:

// Add dependencies and exports
const {buildGraph} = require("./graph");

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

exports.roadGraph = buildGraph(roads.map(r => r.split("-")));

/*Q-3: The require function given earlier in this chapter supports this type of dependency cycle. 
Can you see how it handles cycles? What would go wrong when a module in a cycle does replace its default exports object?*/

/*Solution: Node.js handles circular dependencies by caching modules and allowing asynchronous execution. Modules can access each other's exports,
but problems arise if a module replaces its default exports object, breaking the circular dependency resolution mechanism. */

