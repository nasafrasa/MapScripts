import * as rm from 'https://deno.land/x/remapper@3.1.2/src/mod.ts';
import * as fn from "./functions.ts";

const map = new rm.Difficulty("ExpertPlusNoArrows", "HardStandard");

// Make map constants
const SONG_LENGTH = 321;
const LEFT_COLOR = [111 / 255, 66 / 255, 103 / 255] as rm.Vec3;
const RIGHT_COLOR = [165 / 255, 186 / 255, 219 / 255] as rm.Vec3;

// Add tracks and colors to all notes, arcs, and chains in the map
rm.notesBetween(0, SONG_LENGTH, x => {
    x.spawnEffect = false;
    x.track.add("Notes");
    if (x.type == 0) {
        x.color = LEFT_COLOR;
        x.track.add("LeftNotes");
    };
    if (x.type == 1) {
        x.color = RIGHT_COLOR;
        x.track.add("RightNotes");
    };
});
rm.arcsBetween(0, SONG_LENGTH, x => {
    x.spawnEffect = false;
    x.track.add("Arcs");
    if (x.type == 0) {
        x.color = LEFT_COLOR;
        x.track.add("LeftArcs");
    };
    if (x.type == 1) {
        x.color = RIGHT_COLOR;
        x.track.add("RightArcs");
    };
});
rm.chainsBetween(0, SONG_LENGTH, x => {
    x.spawnEffect = false;
    x.track.add("Chains");
    if (x.type == 0) {
        x.color = LEFT_COLOR;
        x.track.add("LeftChains");
    };
    if (x.type == 1) {
        x.color = RIGHT_COLOR;
        x.track.add("RightChains");
    };
});


//! Environment

// Moves waterfall to make it look like water
const waterfall = new rm.Environment("Waterfall$", "Regex");
waterfall.track.value = "WaterTrack";
waterfall.push();

// Animate water to disappear for certain environments
fn.animateTrack(0, 0, "WaterTrack", x => {
    x.scale = [100, 1, 5];
    x.position = [0, 0, -50];
});
fn.animateTrack(132, 0, "WaterTrack", x => {
    x.scale = [0, 0, 0];
});
fn.animateTrack(164, 0, "WaterTrack", x => {
    x.scale = [100, 1, 5];
});
fn.animateTrack(212, 0, "WaterTrack", x => {
    x.scale = [0, 0, 0];
});
fn.animateTrack(228, 0, "WaterTrack", x => {
    x.scale = [100, 1, 5];
});


// Assigning tracks to objects in the environment
const leftRailing = new rm.Environment("]Left", "Contains");
leftRailing.track.add("RailingTrack");
leftRailing.push();

const rightRailing = new rm.Environment("]Right", "Contains");
rightRailing.track.add("RailingTrack");
rightRailing.push();

const curveRailing = new rm.Environment("Curve", "Contains");
curveRailing.track.add("RailingTrack");
curveRailing.push();

const backRailing = new rm.Environment("RailingFullBack", "EndsWith");
backRailing.position = [0, 0, 9];
backRailing.track.add("RailingTrack");
backRailing.push();

const neonTubes = new rm.Environment("NeonTubeDirectional", "Contains");
neonTubes.track.add("LightTubeTrack");
neonTubes.push();

// Take railing object and duplicate it a few times while moving duplicates forward
const railing = new rm.Environment("RailingFullFront", "EndsWith");
railing.position = [0, -2, 25];
railing.rotation = [0, 10, 0];
railing.track.value = "RailingTrack";
railing.push();

railing.duplicate = 1;
railing.position = [0, -2, 50];
railing.rotation = [0, -10, 0];
railing.track.value = "RailingTrack";
railing.push();

railing.duplicate = 1;
railing.position = [0, -2, 0];
railing.rotation = [0, 5, 0];
railing.track.value = "RailingTrack";
railing.push();

railing.duplicate = 1;
railing.position = [0, -2, -25];
railing.rotation = [0, -5, 0];
railing.track.value = "RailingTrack";
railing.push();

// Animate railings to disappear on certain environments
fn.animateTrack(132, 0, "RailingTrack", x => {
    x.scale = [0, 0, 0];
});
fn.animateTrack(164, 0, "RailingTrack", x => {
    x.scale = [1, 1, 1];
});
fn.animateTrack(212, 0, "RailingTrack", x => {
    x.scale = [0, 0, 0];
});
fn.animateTrack(228, 0, "RailingTrack", x => {
    x.scale = [1, 1, 1];
});

// Animate light tubes to disappear on certain environments
fn.animateTrack(132, 0, "LightTubeTrack", x => {
    x.scale = [0, 0, 0];
});
fn.animateTrack(164, 0, "LightTubeTrack", x => {
    x.scale = [0.4, 1.5, 0.4];
});
fn.animateTrack(212, 0, "LightTubeTrack", x => {
    x.scale = [0, 0, 0];
});
fn.animateTrack(228, 0, "LightTubeTrack", x => {
    x.scale = [0.4, 1.5, 0.4];
});


// Moves Moon onto the horizon
const moon = new rm.Environment("Moon", "EndsWith");
moon.scale = [0.5, 0.5, 0.5];
moon.position = [0, 4, 50];
moon.push();

// Stretches sun to be really tall
const sun = new rm.Environment("Sun", "EndsWith");
sun.scale = [1, 1000, 1];
sun.position = [0, 5, 100];
sun.track.add("SunTrack");
sun.push();

// Animate sun to change position/scale between environments
fn.animateTrack(132, 0, "SunTrack", x => {
    x.position = [0, 5, 18];
    x.scale = [0.5, 1000, 0.5];
});
fn.animateTrack(164, 0, "SunTrack", x => {
    x.position = [0, 5, 100];
    x.scale = [1, 1000, 1];
});
fn.animateTrack(212, 0, "SunTrack", x => {
    x.position = [0, 5, 18];
    x.scale = [0.5, 1000, 0.5];
});
fn.animateTrack(228, 0, "SunTrack", x => {
    x.position = [0, 5, 100];
    x.scale = [1, 1000, 1];
});


// Deactivate all objects that contain these words in the environment
fn.hardRemove("Contains", [
    "Clouds",
    "Mountains",
    "BackgroundGradient",
    "BottomPairLasers",
    "PlayersPlace",
    "Ripples",
    "HUD",
    "Tunnel"
]);


// Fog changes and animations
rm.adjustFog(x => {
    x.attenuation = 0.0025;
    x.height = -5;
    x.startY = 20;
}, 0);
rm.adjustFog(x => {
    x.attenuation = -0.0025;
}, 132);
rm.adjustFog(x => {
    x.attenuation = 0.0025;
}, 160);
rm.adjustFog(x => {
    x.attenuation = -0.0025;
    x.height = 0;
    x.startY = -2000000;
}, 212);
rm.adjustFog(x => {
    x.attenuation = [[-0.000175, 0], [-0.02, 1, "easeInExpo"]];
    x.height = -5;
    x.startY = 20;
}, 228, 72);


// Import and make Blender Model
const scene = new rm.ModelScene(new rm.Geometry());
scene.animate([
    ["environment", 0],
    ["pillars", 132, 32],
    ["environment", 164],
    ["grid", 212, 16],
    ["environment", 228]
]);


//! Export

// Assigns settings to the map to make sure the player plays it as intended
map.require("Chroma");
map.suggest("Chroma", false);
map.require("Noodle Extensions", false);
map.rawSettings = rm.PRESET.CHROMA_SETTINGS;
map.settings.smoke = true;
map.settings.mirrorQuality = "HIGH";
map.colorLeft = LEFT_COLOR;
map.colorRight = RIGHT_COLOR;
map.NJS = 12;
map.offset = 0.5;
map.save();

// Export map into a zip file without the import difficulty
rm.exportZip(["ExpertPlusNoArrows"]);