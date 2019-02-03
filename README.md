

## Jammming

Jammming is a single page react app which allows the user to search spotify and create playlists. The Authorization file is coppied from mph's OAuth template. That repository can be found <a href="https://github.com/AodenTeo/oauth-bridge-template.git">here.</a>

## Runing Jammming Locally

In order to run Jammming locally, you must the Authorization file separately (which will request the API token from spotify). It assumes that Jammming will be running on localhost:5000, but the it will be running on localhost:8888.

To run it locally, you must register the Spotify Application here:
https://developer.spotify.com/my-applications

On that page, add http://localhost:8888 as a callback url.

Write the below commands in your terminal (replacing XXXX AND YYYY with your acutal client id and secret from the page where you registered your application)

```
export SPOTIFY_CLIENT_ID=XXXX
export SPOTIFY_CLIENT_SECRET=YYYY
npm start
```

This will allow jammming to redirect you to the spotify login page to obtain authorization to modify and create playlists. 

Then you will be able to run the Jammming application locally. The app will expect that you are running it in production mode. 


