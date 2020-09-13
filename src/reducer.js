export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // remove after finishing dev
  // token:
  // "BQBO9wuw1g-i4547dFE2i22PoF9SlKTaeLir-6RCP44UGZxa1j_-a9lJ2CpgqZTCQokXDvdJt4pj5Em6nPwUFOuLpkZA4Ms-Yz8vmtHvqKXQIKLZJ3G0Bq2T02hcEY6OGWX3D-UzSBo74R2crb56abnibNQTgl3FSdgaHJZENHp1p3x6jmmY",
};

const reducer = (state, action) => {
  console.log(action);

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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
