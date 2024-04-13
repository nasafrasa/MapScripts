import * as rm from "https://deno.land/x/remapper@3.0.0/src/mod.ts"

/**
 * Laser Maker 5000 
 * An easy way of making lasers from Custom Environments
 * @param modelScenename The name of the ModelScene variable you made
 * @param lasers How many lasers you make
 * @param environment The Object itself, can be either Environment or Geometry
 * @param type The light type of the lasers
 * @param name Name of the lasers in Blender
 * @param scale Scale of the lasers; optional
 */
export function laserMaker5000(modelScenename: any, lasers: number, environment: rm.Environment | rm.Geometry, type: number, name: string, scale?: rm.Vec3) {
    const laserTracks: string[] = [];
    const laserEnv = environment;
    laserEnv.lightID = 101;
    laserEnv.lightType = type;
    for (let i = 1; i <= lasers; i++) laserTracks.push(name + `${i}`);
    modelScenename.addPrimaryGroups(laserTracks, laserEnv, scale);
}

/**
 * Material Maker 4000 
 * An easy and efficient way of making materials from Blender! It also makes a track for the material, "name"MaterialTrack
 * @param modelScenename The name of the ModelScene variable you made
 * @param name Name of the material in Blender
 * @param shader The Shader of the Material
 * @param type Geometry type, the shape.
 * @param color The color of the material
 * @param depth enables and disables shaderKeywords[]
 */
export function materialMaker4000(modelScenename: any, name: string, shader: rm.GEO_SHADER, type: rm.GEO_TYPE, color: rm.ColorType, depth: boolean) {
    if (depth) { rm.map.geoMaterials[name+"Material"] = { shader: shader, color: color, track: name+"MaterialTrack" } } else {
    rm.map.geoMaterials[name+"Material"] = { shader: shader, color: color, track: name+"MaterialTrack", shaderKeywords: [] } }
    modelScenename.addPrimaryGroups(name,new rm.Geometry(type, name+"Material"));
}

/**
 * Environment Remover 3000 
 * A way to remove stuff fast and easy
 * @param hard true = Removes the object by setting active to false, false = Removes the object by putting it out of sight
 * @param lookup Lookup method of remove objects
 * @param id The environment IDs to remove
 */
export function environmentRemover3000(hard: boolean, lookup: rm.LOOKUP, id: Array<string>) {
    if (hard) {
        id.forEach((env) =>{
            const hardRemover = new rm.Environment(env, lookup);
            hardRemover.active = false;
            hardRemover.push();
        })
    } else {
        id.forEach((env) =>{
            const softRemover = new rm.Environment(env, lookup);
            softRemover.position = [-69420,-69420,-69420];
            softRemover.push();
        })
    }
}

/**
 * Super Spinner 2000 
 * Returns a spin animation!
 * @param spins Number of spins
 * @param axis 0 = x, 1 = y, 2 = z
 */
export function superSpinner2000(spins: number, axis: number) {
    const spinArray: rm.KeyframesVec3 = [];
    const getTime = (value: number, index: number) => (value / spins) + (index / spins)
    let x = [0,0,0]
    let y = [0,0,0]
    let z = [0,0,0]
    if (axis == 0) { x = [0,180,360] }
    if (axis == 1) { y = [0,180,360] }
    if (axis == 2) { z = [0,180,360] }
    for (let i = 0; i < spins; i++) {
        spinArray.push([x[0],y[0],z[0],getTime(0,i)]);
        spinArray.push([x[1],y[1],z[1],getTime(0.5,i)]);
        spinArray.push([x[2],y[2],z[2],getTime(1,i)]);
    }
    return spinArray
}


