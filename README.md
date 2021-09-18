# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## Checklist
- [x] Database creation and data config, move to database.sql
- [x] Create REST methods in gallery.router.js
- [x] Create pool.js and install PG
- [x] basic HTML page styling in app.jsx
- [x] Declare postList const and newPost const with set functions in app.jsx -      modified - newPost was going to be an array containing path and description params. Then realized issue...how to use setState function to modify two params at the same time?? - edit - idea: to update 1 param at event, hold other static aka updating path setState({description: 'newPost.description', path: event.target.value})
- [x] GET function
- [x] RENDER function with .map
- [x] PUT function to increase "likes" with button
- [x] conditional rendering - show photo vs show description on click
- [x] DELETE function w/ axios PLUS handling function called on button click
- [x] POST function w/axios called on form submit w/ submit button
- [ ] Break down app.jsx into components - galleryForm, galleryList, galleryItem, etc
- [ ] Clear form inputs on form submit/new post
- [ ] add placeholders to form inputs
- [ ] Change path -> relative to absolute
- [ ] Conditional/checks at post addition - no fields left empty (alert), must be text
- [ ] sweet alerts - alert for post entry and post deletion
- [ ] STYLING