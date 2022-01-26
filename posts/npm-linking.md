---
date: 2019-09-10
title: Local development on npm packages
tags: ["npm","link","linking","development","post"]
---


When you run the `npm install` command, npm looks at the package.json file in the root of the current project and fetches the appropriate published version of each package from the public NPM registry.

When we develop locally we want to ensure we can see the changes In our application as quickly as possible, and don’t want to have to `npm publish` and then `npm install` for each change.

We can do this using npm link. In order to do this we need to have both projects checked out on our local machine.

First of all we need to tell the dependancies that we are going to link it. So we go into the package we want to work on (after a git clone) and type `npm link`


```
cd shared

npm link

cd ../
```

This will tell NPM that we will be linking the package into another package shortly.

Then we need to goto the directory that will be consuming the package and type:

```

npm link [PACKAGE-NAME]

```
[PACKAGE-NAME] should be replaced with the name of the package you wish to link into the current project.

Now the package should behave as if it has been installed via an `npm i`.



There are a number of tools which can easily tell you which packages you have linked for a given project, and example is:



https://www.npmjs.com/package/npm-link-check

For more info, please see the docs: 

https://docs.npmjs.com/cli/link

        