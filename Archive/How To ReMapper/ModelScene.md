# Tutorial
Model Scene is the model to object tool within ReMapper, note that you will need the [.rmmodel exporter](https://github.com/Swifter1243/ReMapper-Blender-Exporter)
# **Documentation**


| Property  | Type             | Description                                                     |
|-----------|------------------|-----------------------------------------------------------------|
| `Object`  | groupObjectTypes | Object to spawn on model objects with no track                  |
| `Scale`   | Vec3             | The scale multiplier for the spawned object previously mentioned|
| `Anchor`  | Vec3             | The anchor offset for the spawned object previously mentioned.  |
| `Rotation`| Vec3             | The rotation offset for the spawned object previously mentioned |

## methods

to call a model scene you will obviously need to import `ModelScene` and then call in one of 2 ways:

| method      | Type           | description                                                                                                                                         |
|-------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `animate()` | animated model | Animated model which you can set a duration to and the model will be despawned at that time, all animations from the model will be exported exactly |
| `static()`  | static model   | Static model which can not be despawned and cant have a duration set to it, any animations in the model wont show up in game                        |

to call an animated model scene, type this:
```js
//initialize a new model scene with a black cube geometry object
const scene = new ModelScene(new Geometry())

scene.animate([
   ["rmmodel name", time, duration]
])
```
to call a static scene type this:
```ts
scene.static("rmmodel name")
```
as you can see static is simpler but gives you less options

### animated scene
inside the animated scene array there are 3 parameters
| property   | Type   | description                                                                       |
|------------|--------|-----------------------------------------------------------------------------------|
| model name | string | the name of your exported .rmmodel with out the .rmmodel extensions, ex: "scene1" |
| time       | number | the time that the model should spawn and the time the duration will start         |
| duration   | number | the duration that the model should last in game                                   |

## addPrimaryGroups
`addPrimaryGroups` is a function which allows for objects with different materials in blender to spawn different game objects in game

| property       | Type               | description                                                            |
|----------------|--------------------|------------------------------------------------------------------------|
| track          | string | string[] | the name of the object's material within blender                       |
| object         | groupObjectTypes   | the game object to assign to the objects with said material in blender |
| objectScale    | Vec3               | The scale multiplier for the spawned object previously mentioned       |
| objectAnchor   | Vec3               | The anchor offset for the spawned object previously mentioned          |
| objectRotation | Vec3               | The rotation offset for the spawned object previously mentioned        |
