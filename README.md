Image Grid Effect
=======================

**Create grid effect for images**

------

## Installation

justify-multiple-images depends on plain javascript. To use it, include this in your page :

    <script src="jquery.js" type="text/javascript"></script>
    <script src="image_grid_effect.js" type="text/javascript"></script>

------

## Usage

Set id `image` for img element and target element id with `main`. the default canvas `width` and `height` is to set to `300 x 300`. You can customize your own width and height as shown below.

    <img id='image' src='effect.png' />
    <div id='main'></div>

Now add this JavaScript code to your page :

    $(function() {
      // rows = colomns = numberOfGrids = 4;
      // imageToGrid(numberOfGrids, width of canvas, height of canvas); 
      imageToGrid(2, 300, 300);
    });

You're done.

------

## Demo

See it in action on our [home page](https://itsmepvr.github.io/projects/image-grid-effect/).

------

## Author

**Venkata Ramana P**

+ [https://itsmepvr.github.io](https://itsmepvr.github.io)
+ [https://github.com/itsmepvr](https://github.com/itsmepvr)
+ [https://linkedin.com/in/itsmepvr](https://linkedin.com/in/itsmepvr)


------

## Copyright and license

Copyright 2019 Itsmepvr under [The MIT License (MIT)](LICENSE).
