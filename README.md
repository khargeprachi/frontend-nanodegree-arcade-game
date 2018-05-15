frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

# Arcade Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [Dependencies](#dependencies)

## Instructions

The project consists of HTML, CSS and JavaScript files along with 1 image folder for the playground, enemy and player objects.

The game starts with the timer. The player can perform left, right, up and down keyboard inputs to move the player. The aim is to reach the water and increment score without colliding with the enemies. Score maximum number of wins within the given time limit. On colliding with any enemy object, the score decrements and the player has to start from the beginning position.

The game ends when timer is stopped.

The number of wins is displayed in the end.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Dependencies
Include these in the script tags
  js/resources.js
  js/app.js
  js/engine.js

Stylesheet:
  css/style.css
Images to represent the enemy, player and playground are present in the 'images' directory.
