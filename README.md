# ReactJS Gallery

## Description

_Duration: 2 Day Sprint_

This image gallery application is a convenient server-hosted tool that allows users to quickly and easily add, display, and delete meaningful images with text descriptions in a visually appealing fashion.

The image gallery allows users to add new images and text descriptions and: toggle between the images and descriptions, 'like' an image, or delete an image. The desired action is selected by clicking one of the buttons underneath an image. Clicking an image will toggle to the text description and vice versa.

## Languages
- HTML
- Javascript (w/ReactJS, MaterialUI, and node.js)
- CSS
- SQL

## Installation
1. If desired, fork and clone this repository.
2. With node.js and npm installed, open this repository in terminal.
3. Use 'npm install' to install the required modules (Express and PostgreSQL/PG).
4. Start the server and client using 'npm run server' and 'npm run client'.
5. Access 'localhost:3000/' in your favorite browser.
6. Add .jpg images to the public 'images' folder to be added to the gallery.

## Screenshots

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
- [x] Break down app.jsx into components - galleryForm, galleryList, galleryItem, etc
- [x] Clear form inputs on form submit/new post
- [x] add placeholders to form inputs
- [ ] Change path -> relative to absolute (idea-include file upload button - see MUI example - and have a file upload button PLUS HTML input field)
- [ ] Conditional/checks at post addition - no fields left empty (alert), must be text (upload button idea - require url input OR file upload)... not super necessary with textfield required props
- [ ] MUI alerts - alert for post entry and post deletion
- [ ] STYLING - look into MUI - start w/ buttons and layout, then required input fields! BIG ISSUES - standardizing image sizing, centering gallery-container/MUI container w/in page (w/o CSS), COLOR AND FONT!!
- [ ] Deploy to Heroku!!
- [x] Warning - child unique key warning in console...why is this happening?


## Acknowledgement

Many thanks to [Prime Digital Academy](https://www.primeacademy.io/?utm_campaign=brand_search&utm_medium=cpc&utm_source=google&utm_medium=ppc&utm_campaign=Brand+Search&utm_term=prime%20digital%20academy&utm_source=adwords&hsa_mt=e&hsa_kw=prime%20digital%20academy&hsa_grp=34455376016&hsa_tgt=kwd-292678835500&hsa_ad=209774192547&hsa_ver=3&hsa_acc=5885076177&hsa_cam=670836869&hsa_src=g&hsa_net=adwords&gclid=CjwKCAjw4KyJBhAbEiwAaAQbE9A9_CGO-PE_cgrfInn9Py0N73UJJ5vs_0BQomI6E13bOdA_c6EmkRoCJikQAvD_BwE), without whom this would not be possible.

## Support

Please contact me at anthonyvlynch5@gmail.com with any concerns, problems, or suggested improvements.