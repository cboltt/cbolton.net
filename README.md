# Code & Confusion
_A personal website built in React._

Just a site that can be used to feature projects, host random experiments, and other generally boring stuff :joy:.

## Project Goals
_I already have a [personal site](http://codeandconfusion.com), so when I decided to re-build it here, I wanted to accomplish a few things along the way._

- [x] Implement a world-class build system using webpack.
- [x] Avoid the use of boiler-plate code*
- [x] Use a clean and concise system for styling
- [x] Follow the feature-branch -> Pull Request process
- [x] Launch the app on Heroku instead of Github Pages
- [x] Utilize some great third-party components or npm modules
- [x] Document the build process
- [x] Store all site data in json instead of inline
- [x] Use good linting standards
- [ ] Use Redux and its design patterns
- [ ] Connect to an external API
- [ ] Implement testing

*See Appendix 1

## Features
_What makes this site great?_

### React, Babel & Webpack
Code & Confusion uses a standard webpack-based build system, allowing me to use some lovely features like the Babel compiler for ES6 features, SASS, and, of course, a JSX-powered React environment.

### SCSS Globbing & BEM
One of my biggest gripes when working on personal project is CSS management. With webpack, I can implement npm modules that generate BEM-style classname automatically and automatically glob scss partial files, allowing for each React component to have their styles in their own file.

### Masonry Grid system
_Description coming soon!_


### Linting
_Feature coming soon!_

### Redux Storage
_Feature coming soon!_

### Testing
_Feature coming soon!_

### External API
_Feature coming soon!_


## Links and References
_During the build process, I found these resources particularly useful:_

* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Import Glob Loader](https://www.npmjs.com/package/import-glob-loader)
* [React BEM Helper](https://www.npmjs.com/package/react-bem-helper)
* [Heroku React Buildpack](https://blog.heroku.com/deploying-react-with-zero-configuration#new-zero-configuration-experience)


## Appendices
_Not everything can run so smoothly_

### Appendix 1: create-react-app boiler-plate
In order to full grasp webpack, I wanted to start this project without implementing any boiler-plate code so I could fully understand what my code was doing. Up until @7d51a7da3629e95ef17d0f8b565d16cf0203a1f0, this was working out great! At this point however, I realized that I was going to need to deploy my app to Heroku, and wanting to avoid being in configuration purgatory forever, I switched over my webpack config to that of create-react-app. This allowed me to use Heroku's react buildpack and seemlessly deploy the app to their platform.
