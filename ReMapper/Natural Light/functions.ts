import * as rm from 'https://deno.land/x/remapper@3.1.2/src/mod.ts';

export function softRemove(lookup: rm.LOOKUP, id: Array<string>){
    id.forEach((env) =>{
        const sR = new rm.Environment(env, lookup);
        sR.position = [-69420,-69420,-69420];
        sR.push();
    })
};

export function hardRemove(lookup: rm.LOOKUP, id: Array<string>){
    id.forEach((env) =>{
        const hR = new rm.Environment(env, lookup);
        hR.active = false;
        hR.push();
    })
};

export function animateTrack(time: number, duration: number, track: rm.TrackValue, anim: (x: rm.AnimationInternals.AbstractAnimation) => void) {
    const event = new rm.CustomEvent(time).animateTrack(track, duration);
    anim(event.animate);
    event.push(false);
};