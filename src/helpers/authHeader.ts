export default function authHeader() {
  const href = window.location.href as string

  const subdomain = /:\/\/([^\/]+)/.exec(href)[1].split('.')[0]

  const token = localStorage.getItem('token')
  if (token) {
    return { Authorization: 'Bearer ' + token, tenant: subdomain }
  } else {
    return {
      tenant: subdomain,
      Authorization: '',
    }
  }
}
