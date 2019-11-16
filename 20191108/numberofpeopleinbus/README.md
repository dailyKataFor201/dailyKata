# Title : Numberr of people in the bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

## input : a lit of integer arrays. [[in people, out people],[...],[...]]
## output : number of people in the bus

## TestCase
- Test.assertEquals(number([[10,0],[3,5],[5,8]]),5);
- Test.assertEquals(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
- Test.assertEquals(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);

## 1. understand
- each array in the array means bus station and the first element is number of people get into the bus and second one is number of people people get off the bus
- I think it will be clear if I use method Reduce()
## 2. plan
- add first element and minus second element in reduce

## 3. excute
## 4. review