# Tutorial

# Lookup Methods

Lookup methods are used for selecting objects in an environment. All the objects are listed in [these](https://github.com/NoodleExtensionsCommunity/How-to-Noodle/tree/main/Chroma%20Logs) Chroma Logs.

## Exact

Exact selects the exact object from the Chroma Logs. Usually you wouldn't want to use this for final maps, as it is not future proof and can break in any update. I would recommend using Regex for this purpose instead.

**Example:**
```ts
const env = new Environment("BillieEnvironment.[0]Environment.[27]DayAndNight.[0]Day", "Exact")
```

## Contains

Contains selects all objects with a string, its the exact same as pressing Crtl+F and searching for a specific word.

**Example:** 
```ts
const env = new Environment("DayAndNight", "Contains")
```

## Regex

Regex selects a certain object using Regex. More information on Regex [here.](https://github.com/NoodleExtensionsCommunity/How-to-Noodle/blob/main/how-tos/regex/README.md)

## StartsWith

## EndsWith




# Documentation