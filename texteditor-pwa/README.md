# texteditor-pwa

![npm express](https://img.shields.io/npm/l/express)</br>

## Description

The texteditor-pwa application is a progressive web application that allows the user to create notes that are stored with or without
internet connection that is retrievable later. It uses a server/client set up with installed applications that include : webpack, workbox, and
IndexDB. The application is also installable for your device.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [ScreenShot](#Screenshot)
- [Github/Heroku](#Github/Heroku)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

---

## Installation

Ensure that Node is already installed https://nodejs.org/en/download/

- Install webpack plugins : https://webpack.js.org/
in CLI type in
  <ul>
<ol>`npm i --save-dev html-webpack-plugin` </ol>
<ol>`npm i --save-dev webpack-pwa-manifest`</ol>
<ol>`npm i --save-dev workbox-webpack-plugin` </ol>
<ol>`npm i --save-dev babel-loader` </ol>
<ol>`npm install --save-dev style-loader`</ol> 
<ol>`npm i --save-dev css-loader`</ol>
</ul>
- Install IndexDB : Type in CLI `npm i idb`
- Type `npm init` in terminal and answer the prompts for npm.
- Type `npm i` in terminal to instal node modules and packages.

## Usage

- First clone the repository from GitHub.
- Complete the necessary installation, in the installation tab.
- After typing `npi i` in CLI
- then type `npm run build` in client folder ( a dist folder should be created)
- should see a client-server folder structure
- then run `npm start` from the root directory
- this should start up the back end and serve the client
- run the text editor application from the terminal
- Then the JavaScript files have been bundled using webpack
- There should be a generated HTML file, service worker, and a manifest file
- In the developer tools, may turn offline, and the text editor still functions in the browser without errors
- in Developer tools of the application The IndexedDB has created a database storage. Search the indexDB files for the stored data(from creating notes).
- After entering content and subsequently click off of the DOM window
  the content in the text editor has been saved with IndexedDB
- when the text-editor is reopened after closing it, the content in the text editor
  has been retrieved from the IndexedDB database
- In order to install application, then click Install button
  then the web application is downloaded as an icon on the desktop
- when the web application is loaded , there should be a registered service worker using Workbox
- Ensure that there is a registered service worker to allow offline functionality .
- When the user registers a service worker then there should be static assets precached upon loading
  along with subsequent pages and static assets

# Screenshot

![texteditorphoto1](https://user-images.githubusercontent.com/107218022/203397822-25785359-4d57-4001-aa2f-dfa421870a6c.png)

![texteditorphoto2](https://user-images.githubusercontent.com/107218022/203397836-089629bd-5f2b-4a3c-aff4-3146c6b761a5.png)

![texteditorphoto3](https://user-images.githubusercontent.com/107218022/203397847-970ffe8c-491b-4787-935d-bf7edd68aabb.png)

## Github/Heroku

Github repository /Heroku deployed application

1. Github repo: https://github.com/munozgit85/texteditor-pwa.git
2. Heroku deployed application for production: https://fathomless-bayou-07571.herokuapp.com/
3. Heroku application for development : https://infinite-ocean-03727.herokuapp.com/

## License

License badges above covered under MIT

## Contributing

none

## Test

none

## Questions

For further Questions About This Application , Please Feel Free To Use The Contact Below:

> Email: Racquelg85@hotmail.com
> GitHub : [Racquel](https://github.com/munozgit85/texteditor-pwa.git)
