export default function ({ $axios, redirect }) {
  $axios.onResponse(res => {
    return
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      return redirect('/not-found')
    }

    if (code === 401) {
      redirect('/login')
    }
  })
}