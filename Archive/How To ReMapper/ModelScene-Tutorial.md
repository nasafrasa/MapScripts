##### This is a model scene tutorial, if you are looking for specific parameters and such head to the [documentation](https://github.com/Nasafrasa/How-to-ReMapper/wiki/ModelScene)
for this tutorial, we will need 
* blender
## rmmodel exporter tutorial
rmmodels are essentially a renamed json file that ReMapper reads to bring your models to the game!  The file will need to be in your map folder and called in a model scene function to work.  
### Installing the exporter
in order to install the exporter, head to [the official repo](https://github.com/Swifter1243/ReMapper-Blender-Exporter) and grab the `script.py` file, save it somewhere where you won't lose it, we will come back to it later.  Open up blender and in the top left go to `edit -> Preferences -> Add-ons -> Install` and navigate to the `script.py` file.  Make sure to enable it by checking the box beside it, you should see a tab pop up on the right side of your screen called `ReMapper Blender Exporter` if not, click on the tiny arrow to the left of the options tab, and select ReMapper Blender Exporter.

## Model Scene tutorial
now we will set up a model environment in your map with the `ModelScene` class.
### setting up the scene
the first thing we need to do is add model scene to our imports list
```ts
import {
   ModelScene
} from "https://deno.land/x/remapper@3.0.0/src/mod.ts"
```
with that, we can call the assign a variable to the model scene class, the most commonly used variable is `scene`
```ts
const scene = new ModelScene()
```
now we need to add our primary group object which will assign all objects in blender to the specified gameObject, this will go in the `()` after `ModelScene`.  The most commonly used is a black cube geometry object, if you are unfamiliar with geometry, check out the [geometry documentation](https://github.com/Nasafrasa/How-to-ReMapper/wiki/Geometry) ReMapper will default to a black cube with `new Geometry()`.
```ts
const scene = new ModelScene(new Geometry())
```
### calling the scene
now that we have set up the scene in the script, we need to call the scene to add it in game.  There are 2 ways of calling a scene:
| static  | simpler function call, doesn't support model animations, can't be despawned                 |
|---------|---------------------------------------------------------------------------------------------|
| animate | slightly more advanced function call, supports animations, can have a set time and duration |
**note** when calling either scene function you will use `your scene variable.` since we use `scene` here we will say `scene.static` ect.
**also note** within the quotes will go you rmmodel file name __**WITHOUT**__ the `.rmmodel` extension
up first we have static:
```ts
scene.static("rmmodel file name")
```
next we have animate which is slightly more complicated:
```ts
scene.animate([
    ["rmmodel file name", time, duration]
])
```
as demonstrated above, inside the pair of square brackets will be your rmmodle file name as a string, the time you want it to spawn, and the duration you want it to last.  
You can also add multiple models into one animate statement like this:
```ts
scene.animate([
   ["goodModelHere", 0, 100],
   ["betterModelHere", 100, 200],
   ["oml this model is literally so good that -", 200, 300]
])
```
### addPrimaryGroups
with our scene set up in game, now we need to add some cool stuff to it, like lasers, spheres and other things!  THere is no extra import needed for this function to work.  This function works by changing objects in blender with a certain material from the primary scene object to a different - specified game object.  Note that once again, we will use `your scene name.` and here we are using `scene.`
first we need to call the function:
```ts
scene.addPrimaryGroups()
```
after that we have to specify the name of the material in blender:
```ts
scene.addPrimaryGroups(
   "material name as string"
)
```
now we have to specify the game object we would like to replace objects with this tag with, this works with geometry and environment objects.
this is an example for a geoetry primary group:
```ts
scene.addPrimaryGroups(
   "waterSphere"
    new Geometry("Sphere", {
       shader: "BillieWater"
    })
)
```
and an example for an environmentPeice
```ts
scene.addPrimaryGroups(
  "btsPillar",
  new Environment(ENV.BTS.PILLAR.ID, "Regex"),
  ENV.BTS.PILLAR.TRANSFORM,
  ENV.BTS.PILLAR.TRANSFORM
)
```