## Is this even the right tutorial for you?
So you want to start making some cool modcharts hey? Well your in luck! You should check below first to see if this is the tutorial for you:

**This tutorial includes:**
- How to install ReMapper
- How to use ReMapper to make Modcharts (WIP)
- How to use ReMapper Blender Exporter (WIP)
- Blender tips and tricks (WIP)
- Basics of Typescript
- How to make banger visuals

**This tutorial _is NOT_:**
- A Blender tutorial [(Find one here)](https://www.youtube.com/watch?v=nIoXOplUvAw&list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD)
- A tutorial on how to make basic Beat Saber maps and use ChroMapper [(Find one here)](https://bsmg.wiki/mapping/)
- A tutorial on how to play/playtest custom Beat Saber maps [(Find one here)](https://bsmg.wiki/mapping/#playtesting)
- A tutorial on how to make blueberry pie [(Find one here)](https://www.allrecipes.com/recipe/12196/blueberry-pie/)

## What you'll need
Now that we're settled, let's start making some modcharts! But first we need some tools to help us make them easier.
There are multiple things you need to start mapping modcharts with ReMapper. 
**You will need:**
- A Beat Saber map editor with Beatmap V3 support (I recommend using the [v3 ChroMapper Dev Build](https://cm.topc.at/dl))
- [Visual Studio Code](https://code.visualstudio.com/)
- [Blender](https://www.blender.org/) (If you want to create custom environments)
- Modded Beat Saber with Chroma and Noodle Extensions (that should've been obvious)
- Some Helpful Beat Saber Stuff (Don't download these lmao): [(Chroma Logs)](https://github.com/StormPacer/How-to-Noodle/tree/main/Chroma%20Logs) [(ReMapper Constants)](https://github.com/Swifter1243/ReMapper/blob/master/src/constants.ts)
- Motivation

Finally after all that (important) stuff we can start programming and making modcharts!

## Installing Deno and Setting up ReMapper

[**CLICK HERE FOR A VIDEO VERSION**](https://www.youtube.com/watch?v=Se0txymiRHM)

So first of all we open VSC (Visual Studio Code) and open our map folder by pressing **Crtl+K** and then **Crtl+O**. Then we select our map folder and click "Open". After this we want to install Deno, this is what ReMapper runs off of and makes everything faster and easier to use. To install Deno we open a terminal in VSC by pressing **Crtl+Shift+Backtick**. We then navigate to the map folder in the terminal by copying the path to our map and put it into the terminal:
- `cd "(Folder Path Here)"`, in my case it would look like: `cd "H:\SteamLibrary\steamapps\common\Beat Saber\Beat Saber_Data\CustomWIPLevels\Tutorial"`

To install Deno we enter this into the terminal: 
- Windows: `iwr https://deno.land/install.ps1 -useb | iex`
- Mac and Linux: `curl -fsSL https://deno.land/install.sh | sh` 
- More info on installing Deno [here](https://deno.land/manual@v1.28.3/getting_started/installation)

We then enter this in to set up ReMapper for our map: 
- `deno install --allow-all -f --reload https://raw.githubusercontent.com/Swifter1243/ReMapper-Setup/master/setup/rm_setup.ts`

Then for ReMapper's setup files we enter:
- `rm_setup`

If this doesn't work try going [here](https://git-scm.com/downloads) and download Git.

Now we should install the official Deno extension in VSC by first pressing **Crtl+Shift+X** (or by clicking the four squares icon on the left), and then searching for Deno. Select the first one (which should have the little blue check) and press "Install". We go back to our code by pressing **Crtl+Shift+E** (or by clicking the document icon on the top left) and clicking on "script.ts". 

Now VSC is gonna be mad at you that you're not using .js, so you tell it that you're using Deno. Press Ctrl+Shift+P and search for "Deno Initialize Workspace Configuration" and then say yes to all of the pop-ups. To fix the link at the top just hover over and and click "Quick Fix" and press "Cache Dependency" or something like that (I actually don't know). Now we want to install Denon which makes the code automatically compile when we save our code.

To install Denon, we enter this into the terminal:
- `deno install -qAf --unstable https://deno.land/x/denon/denon.ts`
- More info on installing Denon [here](https://deno.land/x/denon@2.5.0)

And then to start running it, we enter:
- `denon rm`

Congratulations! We now are fully set to start using ReMapper! We will now start to learn how to use ReMapper! 

[Click here](How-ReMapper-Works) to continue the tutorial.

### **Sidenotes:**
If you wanna stop now and continue later, you can! Just save your script.ts file and close VSC. Whenever you feel like coming back, open up VSC, make sure your still in the map folder, open the terminal (**Crtl+Shift+Backtick**), make sure your in the map folder in the terminal, and enter in: `denon rm`. After that you can continue creating!

If you want more details on the installation of ReMapper go [here](https://github.com/Swifter1243/ReMapper).
