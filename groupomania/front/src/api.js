export const signup = () => {
  return fetch (
    'http://localhost:4000/api/auth/signup', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: document.querySelector('input[name="username"]').value,
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="password"]').value,
      passwordConfirmation: document.querySelector('input[name="passwordConfirmation"]').value
    })
  })
}

export const login = () => {
  return fetch (
    'http://localhost:4000/api/auth/login', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="password"]').value
    })
  }
  )
}

export const getAll = () => {
  const token = localStorage.getItem('token')
  return fetch (
    'http://localhost:4000/api/post/', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    }
  )
}

export const create = () => {
  const token = localStorage.getItem('token')
  return fetch (
    'http://localhost:4000/api/post/', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      text: document.querySelector('textarea[name="text"]').value,
      image: document.querySelector('input[name="image"]').files[0].name,
    })
    }
  )
}