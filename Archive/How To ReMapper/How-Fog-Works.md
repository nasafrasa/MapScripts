# Basics of Fog

I hope this tutorial clears everything up! (get it?)

There are two ways of making fog, the **static way** and the **animated way**.

## Static Fog

Before we can change any properties of fog, we need to assign it to a variable! We can do this by using a handy function called `getBaseEnvironment();`. This will allow us to edit the properties of the fog.

```ts
// Make sure to import the "getBaseEnvironment" function in your import statement at the top of your code!

const staticFog = getBaseEnvironment();
```

* `const staticFog = getBaseEnvironment();` - makes a new variable called `staticFog` (this can be called anything) which allows us to change settings about the fog

To change the properties of the fog, we're going to have to change the property's value to something other than `undefined`, and then change that value to the one we want.

```ts
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.attenuation = 0;
staticFog.push();
```

* `staticFog.components.BloomFogEnvironment = {};` - changes `BloomFogEnvironment` to a value that is not `undefined`
* `staticFog.components.BloomFogEnvironment.attenuation = 0.0001;` - changes the attenuation of the fog to 0.0001
* `staticFog.push();` - pushes the fog to the map.


## Animated Fog

We can also animate the properties of fog by assigning it to a track!

```ts
// Make sure to import the "baseEnvironmentTrack" class in your import statement at the top of your code!

baseEnvironmentTrack("FogTrack");
```

The code above assigns the fog to a track called "FogTrack", which can be set to anything, but in this case I'll be using "FogTrack" for simplicity. We can then change the properties of this track by making an `animateComponent` variable and animate that.

```ts
// Make sure to import the "CustomEvent" class in your import statement at the top of your code!

const animateFog = new CustomEvent().animateComponent("FogTrack");
animateFog.fog.attenuation = [0.00001];
animateFog.push();
```

* `const animateFog = new CustomEvent().animateComponent("FogTrack");` - creates a new variable called `animateFog` (this can be called anything) which animates the component "FogTrack" (our fog track)
* `animateFog.fog.attenuation = [0.00001];` - changes the attenuation of the fog to 0.00001
* `animateFog.push();` - pushes the fog to the map.

# All Features of the Base Environment
## Fog

Fog is split into two parts, Atmospheric density (`attenuation` & `offset`) and Height Fog (`startY` & `height`). Atmospheric density deals with the fog that follows and is always around the player. Height Fog is fog that fades out all objects from a certain height onwards, this is why you can't change its density, since it will always have a point where the fog dissolves everything.

### Attenuation

Attenuation is basically the intensity of the atmospheric density of the fog (basically how dense it is) between -1 and 1 (0 and 1 for Quest). It's scaling is logarithmic, which means there's for example, a big change between 0.01 and 0.02, but barely any change between 0.1 and 0.2. This is most often used for adding depth to an environment and making it feel more dynamic and alive.

<img src="https://user-images.githubusercontent.com/86539501/201542344-fb141bca-835a-430c-9a44-4c4d9958de59.jpg" width="350">

```ts
// Static Fog
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.attenuation = 0.00001;

// Animated Fog
animateFog.fog.attenuation = [0.00001];
```
The Red Text is the number of the attenuation. The White Text is how far away a geometry cube is from the player (in Blender Units)

***

### Offset

Offset is how far away the fog attenuation starts from the player. The bigger the number, the further away the fog will start. For the sake of simplicity these diagrams are 2D instead of 3D, in game this is not a circle, but a sphere around the player.

<img src="https://user-images.githubusercontent.com/86539501/201554135-5ca0cb4e-25ec-4afb-8ff6-b1b80ef76d5e.jpg" width="350">

```ts
// Static Fog
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.attenuation = 0.01;
staticFog.components.BloomFogEnvironment.offset = 0;

// Animated Fog
animateFog.fog.attenuation = [0.01];
animateFog.fog.offset = [0];
```

These diagrams are not 1:1 what they are in game, but they give you a good visualization on how they work

***

More Examples:

<img src="https://user-images.githubusercontent.com/86539501/201554392-f485459c-7c3f-426f-b9e4-ec367656fc0d.jpg" width="350">

```ts
// Static Fog
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.attenuation = 0.01;
staticFog.components.BloomFogEnvironment.offset = 100;

// Animated Fog
animateFog.fog.attenuation = [0.01];
animateFog.fog.offset = [100];
```

***

<img src="https://user-images.githubusercontent.com/86539501/201554438-eca4651a-0109-43c2-880a-9ba42e25f199.jpg" width="350">

```ts
// Static Fog
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.attenuation = 0.01;
staticFog.components.BloomFogEnvironment.offset = 10000;

// Animated Fog
animateFog.fog.attenuation = [0.01];
animateFog.fog.offset = [10000];
```

***
### Height & Start Y

The Height and Start Y of fog is the intensity of the fog up and down. `startY` is where all objects will be dissolved into the fog (or the Y axis; up and down), (Blender/Unity units). `height` is how big the fade out/gradient of the fog is (also on the Y axis; up and down), (Noodle units; 0.6 of Blender/Unity units).

Examples:

<img src="https://user-images.githubusercontent.com/86539501/201544119-cd0a08d9-5974-47c2-89ba-e464b7392990.jpg" width="350">

```ts
// Static Fog
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.startY = -4;
staticFog.components.BloomFogEnvironment.height = 4;

// Animated Fog
animateFog.fog.startY = [-4];
animateFog.fog.height = [4];
```
The `height` number is the number relative to the `startY` number. For example if `startY` was -4 and `height` was 4, the gradient would be like above and end at 0, but if `startY` were 0 and `height` was still 4, the gradient would end at 4 instead. 

***

Here are some more examples:

<img src="https://user-images.githubusercontent.com/86539501/201544339-fae12906-6f4f-4d78-948e-76089a8918f1.jpg" width="350">

```ts
// Static Fog
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.startY = -1;
staticFog.components.BloomFogEnvironment.height = 2;

// Animated Fog
animateFog.fog.startY = [-1];
animateFog.fog.height = [2];
```
***
<img src="https://user-images.githubusercontent.com/86539501/201544379-c9beccca-d32e-48be-ba75-5d6c815f3505.jpg" width="350">

```ts
// Static Fog
staticFog.components.BloomFogEnvironment = {};
staticFog.components.BloomFogEnvironment.startY = 2;
staticFog.components.BloomFogEnvironment.height = -3;

// Animated Fog
animateFog.fog.startY = [2];
animateFog.fog.height = [-3];
```
You can even invert fog! You would usually use this for environments with full ground and caves.
***


## Light Multiplier (Only works with Environment Lights, not Geometry Lights)

### Bloom Fog Intensity and Color Alpha Multipliers

The Bloom Fog Intensity Multiplier (BFIM) increases the amount of bloom that comes off of all original environment light sources. The Color Alpha Multiplier (CAM) increases the brightness of the light source itself, for lasers it would be their box light. These settings are usually used for tweaking a maps lighting at the end of its development, you could think of it as post-processing for lights/lasers.

<img src="https://user-images.githubusercontent.com/86539501/201557075-4d43aa5e-3d7c-425b-9e53-ad5b5f2dfe82.jpg" width="350">

```ts
// Static Fog
staticFog.components.TubeBloomPrePassLight = {};
staticFog.components.TubeBloomPrePassLight.bloomFogIntensityMultiplier = 1;
staticFog.components.TubeBloomPrePassLight.colorAlphaMultiplier = 1;

// Animated Fog
animateFog.lightMultiplier.bloomFogIntensityMultiplier = [1];
animateFog.lightMultiplier.colorAlphaMultiplier = [1];
```

***

<img src="https://user-images.githubusercontent.com/86539501/201557380-e3a4e181-b3b0-48d1-86a1-e2113589aaf5.jpg" width="350">

```ts
// Static Fog
staticFog.components.TubeBloomPrePassLight = {};
staticFog.components.TubeBloomPrePassLight.bloomFogIntensityMultiplier = 1;
staticFog.components.TubeBloomPrePassLight.colorAlphaMultiplier = 5;

// Animated Fog
animateFog.lightMultiplier.bloomFogIntensityMultiplier = [1];
animateFog.lightMultiplier.colorAlphaMultiplier = [5];
```

***

<img src="https://user-images.githubusercontent.com/86539501/201557521-ed2d9c28-4a4c-4627-91a0-7195e6e0d98a.jpg" width="350">

```ts
// Static Fog
staticFog.components.TubeBloomPrePassLight = {};
staticFog.components.TubeBloomPrePassLight.bloomFogIntensityMultiplier = 5;
staticFog.components.TubeBloomPrePassLight.colorAlphaMultiplier = 1;

// Animated Fog
animateFog.lightMultiplier.bloomFogIntensityMultiplier = [5];
animateFog.lightMultiplier.colorAlphaMultiplier = [1];
```

***

<img src="https://user-images.githubusercontent.com/86539501/201557585-5442136e-b9b5-4bc2-a4b8-4deb3b8e3153.jpg" width="350">

```ts
// Static Fog
staticFog.components.TubeBloomPrePassLight = {};
staticFog.components.TubeBloomPrePassLight.bloomFogIntensityMultiplier = 0;
staticFog.components.TubeBloomPrePassLight.colorAlphaMultiplier = 5;

// Animated Fog
animateFog.lightMultiplier.bloomFogIntensityMultiplier = [0];
animateFog.lightMultiplier.colorAlphaMultiplier = [5];
```

***

<img src="https://user-images.githubusercontent.com/86539501/201557607-2602a37a-e092-40d1-b299-7611c83ba138.jpg" width="350">

```ts
// Static Fog
staticFog.components.TubeBloomPrePassLight = {};
staticFog.components.TubeBloomPrePassLight.bloomFogIntensityMultiplier = 5;
staticFog.components.TubeBloomPrePassLight.colorAlphaMultiplier = 0;

// Animated Fog
animateFog.lightMultiplier.bloomFogIntensityMultiplier = [5];
animateFog.lightMultiplier.colorAlphaMultiplier = [0];
```
