---
date: 2021-05-08
title: Engineering Principles
tags: ["engineering","js","tech-lead","post"]
---
   
Over the last year, I've been referring to my engineering principles quite regularly. I thought it would be worth writing them down here. 

*****
## Define the Problem first 

To identify a good solution, you must first be clear about the problem.
Working on a solution without a problem can introduce complexity with little or no value.
For best results, start with the business/user problems. 

*****

## Hypothesis-driven development 

By having a clearly defined problem statement, we can validate possible solutions. By working in small increments, we can validate our idea early to avoid wasted effort. (Fail fast)

*****
## Keep it simple 

Work in small increments, Take the most minor, most straightforward step possible so that you can learn something before taking the next step. What is the smallest step/s we can take to validate this hypothesis?

[Why complex systems fail](https://how.complexsystems.fail)

*****

## Tight Feedback Loops

Work closely with designers, optimise for tight feedback loops and short iteration cycles. The sooner you can get real users testing your solutions, the better. 

Understand this happens at multiple levels, and you have multiple loops in play at any time.  Keep them tight and fast.


*****
## Justify complexity 

As engineers, we trade in complexity every day. It's not always possible to avoid complexity entirely. We can minimise it by insisting any complexity introduced has to demonstrate it will add more user/business value, keeping unnecessary tech/requirements away from your code. [Be boring](https://adamsilver.io/blog/the-boring-front-end-developer/). 

*****

## Remove assumptions 

Assumptions hide complexity - The best way to remove assumptions is to break a task down into smaller delivery units and make sure you have clear acceptance criteria for them. Keep breaking it down till there are no assumptions of concern. 

*****
## Embrace the unknown 
While this might seem at odds with removing assumptions, it's closely connected. By Acknowledging what we don't know, we remove assumptions from the process. We can then dedicate time to understanding and solving those problems in isolation.

*****
## Last responsible moment

Technology changes at a relentless pace,  be it the external landscape or your internal stack.   On big projects, it's often tempting to do some work up front to figure out the best solution.  In reality, it's better done as close to the actual work to ensure the solutions are relevant.



## Integrate continuously 

To operate at scale, it's often necessary to separate concerns and have clear boundaries so people work independently. The risk is the pieces built-in isolation won't work in unison.  You can mitigate this risk by always combining the different parts as often as possible.

*****

## Continuous improvement   

As engineers, we never stop learning, which means there is always room for improvement.  Actively seek it out and challenging assumptions around the status quo. It's vital that engineers feel empowered to bring about change. 

*****

I will try to keep this list up to date. Did I miss anything obvious? What are your engineering principles?

Please let me know on Twitter.

[@simonmcmanus](https://twitter.com/simonmcmanus)


        