Alright so if you had followed the steps before, you should have already have this template in script.ts:
```ts
import { Difficulty } from "https://deno.land/x/remapper@3.1.1/src/mod.ts"

const map = new Difficulty("ExpertPlusLawless.dat", "ExpertPlusStandard.dat");

// SCRIPT

map.save();
```
I will go over what all of this code does, since they are **very** important pieces of code.

## Importing ReMapper Classes
```ts
// Default
import { Difficulty } from "https://deno.land/x/remapper@3.1.1/src/mod.ts"

// How you would add more classes
import { Difficulty, Wall, info, } from "https://deno.land/x/remapper@3.1.1/src/mod.ts"
```
What this does is import classes from ReMapper. So in this it's already importing the "Difficulty" class into our code, there are many more we usually want in our code, and I will tell you which classes you'll need when we're writing code for certain things. How you would add more classes is just by adding a comma followed by the class name, its not too hard!

Also you may have noticed that when you start writing down a class you want to import, a drop down menu will appear with available classes you can import! Press the up and down arrows to select them, this drop down menu is for a lot of things, not just this. This is what makes ReMapper way easier to use than plain ol' Javascript!

## Compiling your map with the "Difficulty" class
You may have noticed that the "Difficulty" class has already been imported into our ReMapper script, this is because this function represents our map itself. You can make a Difficulty variable by entering in this code:
```ts
// This code is already in the template, so don't copy and paste it lmao. 
const map = new Difficulty("ExpertPlusLawless.dat", "ExpertPlusStandard.dat");
```
The first string in the function is the **IMPORT** difficulty for your map. This is the map that you put your notes and lighting events manually in ChroMapper. In this case we have it set to our `ExpertPlusLawless.dat` file, so this is the one we would edit in ChroMapper. I have also renamed this Difficulty to "Import" for clarity in my template.

The second string in the function is the **EXPORT** difficulty for your map. This is the map that has all the cool Noodle Extensions and Chroma stuff in it. In this case we have it set to our `ExpertPlusStandard.dat` file, so this is the one we would play in game. We do **NOT** edit this one in ChroMapper, because the next time we save our file, we overwrite everything we did manually in that file. I have also renamed this Difficulty to "Export" for clarity in my template.

The Difficulty is now a variable we called `map`, so we can now apply the functions we want to it now.
```ts
// This code is also already in the template, so theres no need the Crtl+C and Crtl+V
map.save();
```
What this code does is take our map variable we just made and applies the `save();` function to it. What this does is saves the map by taking the IMPORT difficulty, applying all the ReMapper code you wrote to it, and saving it as the EXPORT difficulty.

That is how the basis of how ReMapper works and features that make ReMapper so useful when making Modcharts!

[Click here](How-Objects-Work-in-ReMapper) to continue the tutorial.


### Sidenotes:
If you want to explore all of ReMapper's classes you can replace the import statment with `import * as rm from "https://deno.land/x/remapper/src/mod.ts";`. What this does imports all the classes, but you'd have prefix all of the ReMapper functions with `rm.`. Use this only if you wanna see what classes ReMapper has to offer by typing out `rm.` and scrolling through the list of classes. 

If you ever need help with what values you can enter into a function just hover your cursor over one of the brackets of the function, it'll tell you all the inputs for the function and what classes it uses.

