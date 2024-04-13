# Tutorial
Docs for the CustomEvent class in ReMapper

# **Documentation**
| `CustomEvent()` | Number | The time of the custom event placed in the original class call |
|-----------------|--------|----------------------------------------------------------------|
### Event Extensions
#### `.abstract()`
| Method       | Type | Description                                 |
|--------------|------|---------------------------------------------|
| `.abstract()` | void | Create an event with no particular identity|

#### `.animateTrack()`
| Parameter | Type          | Description                          |
|-----------|---------------|--------------------------------------|
| track     | string        | the track to effect/modify |
| duration  | number        | The duration of the specified track  |
| animation | KeyframesVec3 | The animation properties to replace  |
| easing    | EASE          | The easing on this event's animation |

### `.assignPathAnimaion`
| Parameter | Type          | Description                                             |
|-----------|---------------|---------------------------------------------------------|
| track     | string        | the track to effect/modify |
| duration  | number        | The time to transition from a previous path to this one |
| animation | KeyframesVec3 | The animation properties to replace                     |
| easing    | EASE          | The easing of this event's animation                    |
### `.assignTrackParent()`
| Parameter          | Type     | Description                                                                                    |
|--------------------|----------|------------------------------------------------------------------------------------------------|
| childrenTracks     | string[] | Children tracks to assign                                                                      |
| parentTrack        | string   | Name of the parent track                                                                       |
| worldPositionStays | boolean  | Modifies the transform of children objects to remain in the same place relative to world space |
### `.assignPlayerToTrack()`
| Parameter | Type   | Description                           |
|-----------|--------|---------------------------------------|
| track     | string | Track the player will be assigned to. |
### `.animateComponent()`
| Parameter | Type   | Description                 |
|-----------|--------|-----------------------------|
| track     | string | Track(s) to effect          |
| duration  | number | Duration of the animation   |
| easing    | EASE   | The easing on the animation |
##### lil example since this can get a little confusing
```ts
new CustomEvent(0).assignPlayerToTrack("player track", 10).push();

const track = new CustomEvent(0).animateTrack("player track")
track.animate.position = [[0, 0, 0, 0], [0, 20, -20, 0.5, "easeInOutQuad"], [0, 0, 0, 1]]// move the player up and back 20 units
track.push();
```

