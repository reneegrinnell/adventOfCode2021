# adventOfCode2021

My (vanilla JS-based) solutions for the 2021 [Advent of Code](adventofcode.com) puzzles!

## Stuff I Learned:

### Day 2
* **Problem 2.1**
  * A new-to-me way of getting at my data with Node's [fs.readFile() method](https://www.geeksforgeeks.org/node-js-fs-readfile-method/).
  * While implementing the above, an error message led me to rename my JS file to [Common JS (.cjs) module format](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/). Then everything magically worked! Woo!
  * New-to-me uses of the .map() method c/o [this awesome person's repo](https://github.com/Uptip/advent-of-code-2021/blob/main/src/02/index.js).
* **Problem 2.2**
  * Wisdom forthcoming!
### Day 1
* **Problem 1.1**
  * I needed to refresh my memory on imports and exports outside of the React/React Native world I usually inhabit. [This](https://stackoverflow.com/questions/63588714/node9374-warning-to-load-an-es-module-set-type-module) Stack Overflow question helped me update my package.json to allow me to use `import` syntax. Looks like I could have used `require` syntax instead, according to [this other Stack Overflow discussion](https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file).
  * [Arraythis.com](https://arraythis.com/) rules! \m/
  * I should probably go back and do this without Arraythis later, lol.
  * Needed a [refresher](https://stackoverflow.com/questions/17241877/difference-between-and-1-in-javascript) on how [increment (++)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) vs [addition assignment (+=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment) operators work
* **Problem 1.2**
  * The [Sliding Window Technique](https://algodaily.com/lessons/a-birds-eye-view-into-sliding-windows) (SWT) is 1. A Thing That Exists 2. A handy [tool for solving algorithms](https://levelup.gitconnected.com/the-sliding-window-strategy-for-solving-algorithms-34c95c80c506).
  * Important reminder for programmers of all skill/experience levels: after you've wrestled with something for too long and get frustrated, it's important to take a break. I stepped away, mulled over this, went "huh", sat back down and had a solution within five minutes. Give your brain a break!