export default defineNuxtRouteMiddleware((to) => {
  const allowed = ['/posizionamento', '/en/posizionamento']
  if (!allowed.includes(to.path)) {
    return navigateTo('/posizionamento', { redirectCode: 301 })
  }
})
