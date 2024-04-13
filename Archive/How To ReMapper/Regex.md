# Tutorial
Regex is a class to assist with constructing regex strings for use in environment statements.  Note that this is not a regex tutorial, find one [here(https://youtu.be/sa-TUpSx1JA), test your regex strings with a [regex website](https://regexr.com)

# Documentation
| property        | Type    | description                                                            |
|-----------------|---------|------------------------------------------------------------------------|
| `new Regex()`   | string? | the initial string of your regex statement                             |
| `.start("")`    | string  | Specifies the start with the end of a previous separator: "]"          |
| `.add("")`      | string  | adds specified string to the regex statement                           |
| `.seperate()`   | number? | Refers to separation of gameObjects: ".[x]". E.X. "Thing.[0]Thing"     |
| `.vary()`       | number  | Refers to gameObject name variation: " (x)". E.X. "Thing", "Thing (1)" |
| `.verify()`     | void    | Tests the regex expression's validity                                  |
| `.end()`        | void    | Specifies the end of the regex string                                  |

Example usage since this can get a little confusing:
```ts
const env = new Environment("", "Regex") //must use regex for this class to work
env.id = new Regex().add("DayAndNight").separate().add("Night").separate().add("DirectionalLightFront").end() // billie dir light regex
env.push();
```