# lazzzy
## Automatically lazy load images inserted into the DOM

lazzzy uses the Intersection Observer & Mutation Observer APIs to watch for updates to the DOM. After a change is detected, the elements inserted (and any children) are recursively searched for an image tag. If one is found, a class of your choosing is added to the image element. Finally, when the image comes into the viewport the the image will be loaded.

### Usage
The first argument is the id of the element that you want to watch for changes.

The second argument is optional, and is the name of the class you want to add to the image element.

```
import lazzzy from 'lazzzy';

lazzzy("elementId", "className")
```
