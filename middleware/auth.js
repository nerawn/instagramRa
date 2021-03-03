export default async function ({ $axios, store, redirect, route }) {
  if (route.path == '/login')
    return
  if (!isEmptyObject(store.state.user))
    return
  console.log('AUTHJS FETCHED')
  await $axios.$get('/')
    .then(user => store.commit('login', user))
    .catch(err => redirect('/login?path=' + route.path))
}

function isEmptyObject(obj) {
  if (obj == null || obj == undefined || obj == false || typeof obj !== 'object') return false
  const length = Object.keys(obj).length
  if (length > 0) return false
  return true
}