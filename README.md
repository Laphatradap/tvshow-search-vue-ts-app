# TV Shows Search App (Vue and Typescript)

## [Checkout the deployed version here!](https://tvshows-vue-ts.netlify.app/)

## Technologies used

- [Vue](src/components/card.vue)
- [Typescript](src/store/modules/shows.ts)
- [Sass](src/views/Home.vue)
- [Axios](src/store/api.ts)

## Features implemented

- A homepage displays 10 TV shows with search bar and sorting options
  - User can search for a TV show by its name.
  - User can sort tvshows alphabetically A-Z or reverse Z-A and by rating in ascending or descending order.
- A detail page displays following:
  - Show cover image. When click, it will direct to the www.tvmaze.com for that specific show
  - Show info e.g. language, genres, rating and description
  - 3 more TV Shows with similar names
- A randomize page where user can click a button to get new random show

_If any show cover image is missing, it is replaced by "no image yet image"._

## Screenshots

![tvshow-homepage](https://user-images.githubusercontent.com/44722798/88680247-96442c00-d0f0-11ea-98eb-6e25bd68ff9b.png)
![tvshow-details](https://user-images.githubusercontent.com/44722798/88680254-98a68600-d0f0-11ea-912f-ad4d5489180b.png)
![tvshow-random](https://user-images.githubusercontent.com/44722798/88680265-9b08e000-d0f0-11ea-9163-8832de5561a8.png)

## Styling with Sass

Write media queries with [Sass Mixins](src/styles/_mixins.scss) for responsive design

### Git usage

- [git branches and commit messages](https://github.com/Laphatradap/tvshows-vue-ts-app/pull/1)

**Any feedback to improve my code or git usage: [please drop me a message](https://www.linkedin.com/in/laphatradaphusri/)!**

## Project setup & other scripts

```
git clone https://github.com/Laphatradap/tvshows-vue-ts-app.git
cd tvshows-vue-ts-app
npm install
```

##### Compiles and hot-reloads for development

```
npm run serve
```

##### Compiles and minifies for production

```
npm run build
```

##### Run your unit tests

```
npm run test:unit
```

##### Run your end-to-end tests

```
npm run test:e2e
```

##### Lints and fixes files

```
npm run lint
```

##### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
