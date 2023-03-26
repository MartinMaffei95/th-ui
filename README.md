<img 
alt="Thumbnail generator Logo"
src="https://raw.githubusercontent.com/MartinMaffei95/th-ui/d77b5f180722cf88d8a2dd8d9439916d4dc3c72c/docs/logo.svg"
width="30vw"
/>

# Thumbnail Generator.

Sinapsis Challenge. This is a UI for a Thumbnail Generator. Let you create thumbnails from iamges of your gallery or our picking photos with your camera.

## How run.

1. Execute `npm install`
2. Configure the .env file - explication on next section -
3. Execute `npm run dev` for development or `npm run start` to build and execute locally on port 4200
4. Happy hacking

## .env file.

You will need configure

```js
// This is for configuring Auth0
VITE_AUTH0_DOMAIN; // = Your domain of Auth0
VITE_AUTH0_CLIENTID; // = Auth0 client number

// This is the uri of the API.
VITE_API_URI; //You can use ==> https://thumbnail-api.adaptable.app
```

## Structure.

The project structure is based on clean architecture. Here have diagram with the folder structure

![Clean Architecture Diagram](https://github.com/MartinMaffei95/th-ui/blob/main/docs/CleanArchitectureDiagram.png?raw=true)

## Tests.

We use vitest and React testing library.

![Test coverage](https://raw.githubusercontent.com/MartinMaffei95/th-ui/main/docs/Tests.png)

## Features

1. Use images on your gallery or take with your camera.
2. Crop and resize your images.
3. Download the images.
4. Logged how Guest or use our google account with Auth0 and upload our images on the web

## Requirements for the project

🟢 The UI let's you upload files through AJAX  
🟢 You should mock the required endpoints (or solve and integrate with:thumbnail-generator-api)  
🟢 It should preview the image that is going to be processed  
🟢 It should give the users the urls of the new thumbnails and preview them

### Grading Guidelines

🟢 Every requirement is met  
🟢 The solution runs on our enviroment  
🟢 Tech Stack: React v18 (or highest) using Typescript  
🟢 It leverages some design framework: Material UI (https://mui.com/)  
🟢 Any ENV specific value should be configurable and documented  
🟢 Everything should work after following a simple README (ideally: npm install; npm start)  
🟢 The code should be clear and easy to read / debug  
🟢 It's responsive and works well with desktops, phones and tablets  
🟢 It includes transitions, loaders, progress status  
🟢 It uses Redux extensively (https://redux-observable.js.org/)  
🟢 Includes a simple login (recommended: AWS Cognito or Auth0)

### Nice moves

🟢 It uses Styled Components for the styling of the components instead of using css or scss. Including the general css such as resets, font-family, etc in the index.css.  
🟢 It includes drag-and-drop functionality + visual cues to help the user  
🟢 It's Dockerized for local development / testing  
🟢 It includes some kind of testing (unit tests, integration tests, etc) with at least 70% coverage

### Wait, WHAT?!

🟢 It works also with the device camera  
🟢 It include a croping area / resize helper
