ReMappers work by making variables for walls, notes, etc. and changing properties of that variable.

```ts
const cat = new Wall();
```

* `const` - declares that variable is being made on this line
* `cat` - the name of the variable we are creating, this can be renamed to anything.
* `new` - basically says we are making a new object
* `Wall()` - the name of the object we are making, in this case, a wall

We can then go on to change properties of this wall.

```ts
cat.time = 8;
```

* `cat` - the name of the variable that we would like to change a property of
* `time` - a property of the wall that we can change, in this case the time of the wall
* `8` - the value we are giving to that property of the wall, in this case setting the `time` property to `8`

We then have to save it to the map by pushing it to the difficulty. Without doing this, nothing would be changed to the map.

```ts
cat.push();
```

* `cat` - the variable that we want to put into the map
* `push();` - puts the variable (in this case a wall) into the map 

Heres an example:

```ts
const cat = new Wall();
cat.time = 8;
cat.duration = 4;
cat.push();
```

* `const cat = new Wall();` - creates a variable called `cat` which is a wall
* `cat.time = 8;` - makes the wall appear at beat 8
* `cat.duration = 4;` - makes the wall last for 4 beats
* `cat.push();` - saves the wall to the map

For all properties you can change of a wall, go [here.](Wall)

![Screenshot (200)](https://user-images.githubusercontent.com/86539501/201486132-fd10f0e1-c149-457c-9e7c-d7da8e6a5e02.png)