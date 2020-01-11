# range

Generate a range of numbers

## Requirements

- UNIX or GNU/Linux
- [Git](https://git-scm.com/)
- [GNU/Make](https://www.gnu.org/software/make/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

```console
$ git clone https://github.com/esgi-javascript-lab/range.git
$ cd range
```

## Install

```console
$ make install
```

*Note: this will install the necessary Node.js dependencies for testing.*

## Test


```console
$ make test
```

*Note: this will test the [`test/array.js`](./test/array.js) file.*

## Uninstall

```console
$ make uninstall
```

*Note: this will remove all the files listed in the [`.gitignore`](./.gitignore) file. This will also remove all locally generated images, volumes & orphan containers.*

## Goal

Write a function called `range` in the file [`src/array.js`](./src/array.js). This function with generate an range of numbers from a lower bound and an upper bound. This function will take two parameters which are numbers representing these boundaries. It will return an array listing all numbers between these boundaries separated by a step of 1.

Constraints:
- Calling the function with more or less than two arguments should throw an `Error`.
- Calling the function with something else than numbers should throw a `TypeError`.
- Calling the function with infinite numbers should throw a `RangeError`.
- Calling the function with the parameters `(1, 5)` should return `[1, 2, 3, 4, 5]`.
- Calling the function with the parameters `(5, 1)` shoud return `[5, 4, 3, 2, 1]`.
- Calling the function with the parameters `(-1, -5)` should return `[-1, -2, -3, -4, -5]`.
- Calling the function with the parameters `(-5, -1)` should return `[-5, -4, -3, -2, -1]`.

## Example

```javascript
"use strict";

range(1, 5); // [1, 2, 3, 4, 5]

range(5, 1); // [5, 4, 3, 2, 1]

range(-1, -5); // [-1, -2, -3, -4, -5]

range(-5, -1); // [-5, -4, -3, -2, -1]
```
