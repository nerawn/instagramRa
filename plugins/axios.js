export default function ({ $axios, redirect, route, store }) {
  $axios.onRequest(config => {
    config.headers.common['selfSession'] = store.state.selfSession;
    config.headers.common['session'] = store.state.session;
  });

  $axios.onResponse(res => {
    console.log(res)
    const session = res.headers.session
    if(session)
      store.commit('setSession', session)
  });

  $axios.onError(error => {
    if (error.response.data.error == true) {

      if (route.path !== '/login') {

        if (error.response.data.name == 'IgLoginRequiredError')
          return redirect('/login?path=' + route.path)


        if (error.response.data.message == 'Unauthorized')
          return redirect('/login?path=' + route.path)
      }

      if (error.response.data.text == 'Please wait a few minutes before you try again')
        return alert('Lütfen biraz bekleyip daha sonra tekrar deneyiniz.')
    }
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   return redirect('/not-found')
    // }

    // if (code === 401) {
    //   redirect('/login')
    // }
  })
}