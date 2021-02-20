export const state = () => ({
  user: {},
  white: "#ffffff",
  helpers: {
    isEmptyObject(obj) {
      for (const key in obj) return false
      return true
    }
  },
  colorMode: {
    background: "white",
    color: "#262626",
  }
});

export const getters = {
  getProfilePhoto: (state) => {
    return state.helpers.isEmptyObject(state.user) ? 'https://www.rolibo.com/assets/rolibo/upload/images/o/404-not-found-135.png' : state.user.info.profile_pic_url
  },

  getSelf: (state) => {
    if (state.helpers.isEmptyObject(state.user))
      return {}
    return {
      bio: state.user.info.biography,
      followers: state.user.info.follower_count,
      following: state.user.info.following_count,
      verified: state.user.info.is_verified,
      medias: state.user.info.media_count,
      username: state.user.info.username,
      fullName: state.user.info.full_name,
      profilePhoto: state.user.info.profile_pic_url
    }
  }
};

export const mutations = {
  login(state, user) {
    state.user = user
  },

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