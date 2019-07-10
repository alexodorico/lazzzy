# Lazzzy
### Automatically lazy load images inserted into the DOM

Lazzzy uses the Intersection Observer & Mutation Observer APIs to watch for updates to the DOM. After a change is detected, the elements inserted (and any children) are recursively searched for an image tag. If one is found, a class of your choosing is added to the image element. Finally, when the image comes into the viewport the image will be loaded.

#### Usage
The first argument is the ID of the element that you want to watch for changes.

The second argument is optional, and is the name of the class you want to add to the image element.

```
import lazzzy from 'lazzzy';

lazzzy("elementId", "className")
```

Images need to have a `data-src` attribute as well. This should be URL of the image being lazy loaded

`<img src="path/to/placeholder.jpg" data-src="path/to/image.jpg">`