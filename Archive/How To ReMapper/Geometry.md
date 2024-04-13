# Tutorial
geometry is a feature of chroma to make objects in environments universally, it also allows you to make different shapes such as cylinders and spheres.
# Documentation
| Parameter  | type               | description                           |
|------------|--------------------|---------------------------------------|
| `type?`    | `GEO_TYPE`         | type The geometry shape type.         |
| `material` | `GeometryMateiral` | The material on this geometry object. |

# `material` params
| Parameter         | type         | description                                                      |
|-------------------|--------------|------------------------------------------------------------------|
| `shader`          | `GEO_SHADER` | the shader of the geometry object                                |
| `color?`          | `ColorType`  | the color of this geometry object                                |
| `track?`          | string       | the track of this geometry object to animate **only it's color** |
| `shaderKeywords?` | string[]     | the keywords for this geometry objects shader                    |
# Methods
| Method   | type | Description                  |
|----------|------|------------------------------|
| `push()` | void | push the geometry to the map |

### Example
```ts
const geo = new Geometry("Cube", {
   shader: "InterscopeCar",
   color: [1, 0, 1, 1],
   shaderKeywords: []
})
geo.position = [0, 10, 0]
geo.push();
```