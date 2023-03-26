# Thumbnail Generator.

Sinapsis Challenge.

## How run.

1. Execute `npm install`
2. Configure the .env file - explication on next section -
3. Execute `npm run dev` for development or `npm run start` to build and execute locally on port 4200

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

We use vitest and React testing library

## Features

1. Use images on your gallery or take with your camera.
2. Crop and resize your images.
3. Download the images.
4. Logged how Guest or use our google account with Auth0 and upload our images on the web
