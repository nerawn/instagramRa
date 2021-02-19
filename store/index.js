export const state = () => ({
  white: "#ffffff",
  colorMode: {
    background: "white",
    color: "#262626",
  }
});


export const mutations = {
  setDarkMode(state) {
    state.colorMode = {
      background: "#292929",
      color: "white",
    };

  },
  setClassicMode(state) {
    state.colorMode = {
      background: "#ffffff",
      color: "#262626",
    };
  }

}