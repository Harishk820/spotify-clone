
// residrects to spotify authentication page(on click of login button)
export const authEndpoint = "https://accounts.spotify.com/authorize";

const myclientId = "978717d30366403397bbe922294678d8";
//const clientId = "cff76213089a4e228206c8bf120d67cb";
//const clientId = "b10ac7cc459d474e961a6603c15da715"

// redirects to home page once authenticated/once logged in
const redirectUri = "https://clone-myspotify.netlify.app/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-recently-played",

];

// pulls the access token from the url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// login url(returns a token after succesfull authentication)
export const loginUrl = `${authEndpoint}?client_id=${myclientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;