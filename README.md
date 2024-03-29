# TDD Intro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
which is why you'll see a bunch of unnecessary stuff in this repo.

## Overview

The purpose of this repo is to provide developers with a series of basic exercises design to improve
their TDD skills.

To run tests in this repo, use:
`npm test`

## Exercises

The following exercises are intended to be undertaken in the order presented here.

### FizzBuzz

The formal rules of [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) are as follows:

Given an array of integers or integer-like strings, build a new array in which:

* Numbers divisible by 3 are replaced with "Fizz"
* Numbers divisible by 5 are replaced with "Buzz"
* Numbers divisible by 15 are replaced with "FizzBuzz"

### Stack

The goal of this exercise is to use an ES6 class to build a stack. Please note the following parameters:

* The stack must be an internal variable of the MyStack class.
* The stack must have a method to retrieve its size.
* The stack must have a method to retrieve the internal variable used to store the stack.
* The stack must be able to push elements onto itself, to a maximum of 10.
 * If a push is attempted when the stack is at maximum size, throw a descriptive error.
* The stack must be able to pop off the last element added to it, returning that element and reducing the size of the stack.
 If a pop is attempted when the stack is empty, throw a descriptive error.
* ***You may not use Javascript's native array `push` and `pop` methods.***

### User Info API

The goal of this exercise is to build a controller for a User Info service.
***Note:*** The `ExternalApiFetcher.js` file has been built for your convenience. Do not modify it.
Instead, you'll have to mock out that dependency.

The UserInfoController should have the two following methods:

#### getUser
###### Params
* id - an integer which will serve as a pretend primary key for the user concept
  * throw a descriptive error if this is not present or falsy.
###### Returns
* An object of the following form:
``` 
    {
        name: "John McKeever",
        phone: "123-456-7899",
        address: "55 Some Road Lane"
    }
```

#### getAllUsers
###### Returns
* An array of objects of the following form:
``` 
    {
        name: "John McKeever",
        phone: "123-456-7899",
        address: "55 Some Road Lane"
    }
```