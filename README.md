# Code The Dream PreWork Assignment

Here is my submission for the CTD prework assigment. I chose to create a webpage using Spotify's API to display the top 5 albums and the top 5 playlists of the day.

### Features

I built this webpage using React.js and implemented a Spotify Client class in JavaScript where all my API calls are implemented and client credentials are handled.

### Functionality

This webpage fetches the top 5 albums and top 5 playlists of the day in their respective tabs. If the user clicks on the album/playlist card, they will be navigated to Spotify's webpage of the respective album or playlist. Similarly, if they click on a specific song, they will be navigated to Spotify's webpage displaying the song.

### Project Structure

All the React.js components I implemented can be located in /client/src/components and /client/src/pages. All the css I wrote can be found in /client/src/App.css. Lastly, all my Spotify API calls can be found in /client/src/SpotifyClient.

## How to run

### Live Webpage

The webpage will be hosted on this <a href="https://ctd-prework-assignment.onrender.com/#" target="_blank">link</a>. Simply open it in a new tab and see it in action.

### Locally

If the link above doesn't work for some reason, you can run the webpage locally by cloning this github repository, navigating into the client folder, and running

```
npm install
```

Once all packages are installed, run

```
npm run dev
```

The webpage should now be hosted locally and should run on your [localhost](http://localhost:5173/)
