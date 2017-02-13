# Code & Confusion
_A personal website built in React._

Just a site that can be used to feature projects, host random experiments, and other generally boring stuff :joy:.

## Project Goals
_I already have a [personal site](http://codeandconfusion.com), so when I decided to re-build it here, I wanted to accomplish a few things along the way._

- [x] Implement a world-class build system using webpack
- [x] Avoid the use of boiler-plate code (see Appendix 1)
- [x] Use a clean and concise system for styling
- [x] Follow the feature-branch -> Pull Request process
- [x] Launch the app on Heroku instead of Github Pages
- [x] Utilize some great third-party components or npm modules
- [x] Document the build process
- [x] Store all site data in json instead of inline
- [x] Use Redux and its design patterns
- [x] Connect to an external API
- [ ] Use good linting standards
- [ ] Implement testing

## Features
_What makes this site great?_

### React, Babel & Webpack
Code & Confusion uses a standard webpack-based build system, allowing me to use some lovely features like the Babel compiler for ES6 features, SASS, and, of course, a JSX-powered React environment.

### SCSS Globbing & BEM
One of my biggest gripes when working on personal project is CSS management. With webpack, I can implement npm modules that generate BEM-style classname automatically and automatically glob scss partial files, allowing for each React component to have their styles in their own file.

### Masonry Grid system
My original site used not-very-good grid framework (to put it nicely). Luckily, I was able to drop-in the awesome Masonry component that can handle organizing my list of projects dynamically.

### Redux Storage
Stores, reducers, actions, oh my! A big reason I started this project was to see if I could successfully implement the React + Redux design pattern. Currently, I use it to store data from a local json file and an external API.

### Current Browser Tab Count
While I may not update my personal projects all the time, I still want to convey that I'm a busy person :joy:. I've been know to run up a large number of Chrome tabs when I'm in the thick of working a project (my rough high-score is about 70). By showcasing how many browser tabs I have open, I hope people get how busy I might be at a given moment. See Appendix 2 for more information about how I got my tab count.

**wishlist**: The ability to automatically update the browser count instead of doing it on page load and maybe some nice animation to go along with it.

### Linting
In the past, I haven't really paid attention to linting on personal projects. For this site, I wanted to incorporate linting in the build process and in my IDE (I use Atom). Luckily Create React App came with some sensible defaults that just work!

**wishlist** Load some more opinionated eslint modules (like AirBnB's), to better hone my coding style.

### Testing
_Feature coming soon!_


## Links and References
_During the build process, I found these resources particularly useful:_

* [Official React Docs](https://facebook.github.io/react)
* [Guide: Setting up from scratch](https://stanko.github.io/setting-up-webpack-babel-and-react-from-scratch/)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Import Glob Loader](https://www.npmjs.com/package/import-glob-loader)
* [React BEM Helper](https://www.npmjs.com/package/react-bem-helper)
* [Heroku React Buildpack](https://blog.heroku.com/deploying-react-with-zero-configuration#new-zero-configuration-experience)
* [Redux tutorial](https://blog.tighten.co/react-101-using-redux)
* [Express + Postgres tutorial](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.WKFqKGQrJTY)


## Appendices
_Not everything can run so smoothly_

### Appendix 1: Create React App Boiler-plate
In order to full grasp webpack, I wanted to start this project without implementing any boiler-plate code so I could fully understand what my code was doing. Up until [this commit](https://github.com/cbolton97/codeandconfusion/tree/7d51a7da3629e95ef17d0f8b565d16cf0203a1f0), it was working out great! At this point however, I realized that I was going to need to deploy my app to Heroku, and wanting to avoid being in configuration purgatory forever, I switched over my webpack config to that of create-react-app. This allowed me to use Heroku's react buildpack and seemlessly deploy the app to their platform.

### Appendix 2: How I get my current chrome tabs
In order to get the number of browser tabs, I needed to first create a chrome extension that counts how many tabs are open (this was pretty easy). Next, I needed to create an Express server with a Postgres db in order to serve a REST endpoint on Heroku for this site to query (not so easy). I ended up using a lot of boiler-plate, and the Express tutorial linked above helped a lot. I'm hoping to clean up the code and publish it later.
