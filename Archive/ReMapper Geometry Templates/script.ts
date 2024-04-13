import { Difficulty, ModelScene, Geometry, ENV, Environment } from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

const map = new Difficulty("ExpertPlusLawless.dat", "ExpertPlusStandard.dat");
const scene = new ModelScene(new Geometry()); // This creates a new envrionment using geometry


// What all of these functions do is take the material of an object in Blender and applies the stated properties to all objects with that material

// Use this one for an example...

scene.addPrimaryGroups(
  "Cube", // Material Name
  new Geometry("Cube", { // What geometry object type we want to use
    _shader: "Standard", // The shader of the material
    _color: [0, 0, 0], // The color of the material
    // Other properties can also go here
  }),
);

// We continue this process with all the geometry types

scene.addPrimaryGroups(
  "Triangle",
  new Geometry("Triangle", { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING THE PLAYER
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Capsule",
  new Geometry("Capsule", {
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Plane",
  new Geometry("Plane", { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING UPWARDS
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Quad",
  new Geometry("Quad", { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING THE PLAYER
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Sphere",
  new Geometry("Sphere", {
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Cylinder",
  new Geometry("Cylinder", {
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);

// This material only works if you are using the BTS environment, if you are not using BTS, delete the addPrimaryGroups function below

scene.addPrimaryGroups(
  "BTSHighClouds",
  new Environment(ENV.BTS.HIGH_CLOUDS.ID, "Regex"),
  ENV.BTS.HIGH_CLOUDS.SCALE,
  ENV.BTS.HIGH_CLOUDS.ANCHOR,
);

// When we want to make the environment, we call either this function or that "static" function
scene.animate([
    ["template", 0], // Put the name of your .rmmodel file here and time you want it to show up, more detail on Swifter's Gtihub
]);


// !!! Make sure NOT to copy and paste the base objects in the template file, instead use Shift+D to duplicate the object. 
// !!! If you don't do that Blender will make a new material for the copy and pasted version, using duplication keeps the same material

// ! Also make sure to disable the `Template Objects` collection in Blender, you don't want to see those

map.save();
