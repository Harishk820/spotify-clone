export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: "BQCxH4AZ2CiRg8srUHSFmVH0FP-CwVtQkP4YZt9IMqxj2lE5v0rkvY0lG91bvVzI-knU915nMr0Aak-5dJJ7YDQh3o3uG10Fdt-BsFNM1m2efRHLwYRBU7YBI3ENHMsQuWDdSB_8Jm00PTjED_RHYDkyur2i4Se7X1ot48quQrhLIqXMDhIF5Wzi5slyngXerEfnB0p9NsuD3-Xb3LZg",
};

// action-> type , payload
const reducer = (state, action) => {
  // for debugging
  console.log('action:->', action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    // case "SET_SPOTIFY":
    //   return {
    //     ...state,
    //     spotify: action.spotify,
    //   };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
}
export default reducer;