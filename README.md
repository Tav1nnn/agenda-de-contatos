# API Documentation
## Authentication
## POST /api/v1/login
Authenticate a user and return a token.

`Request:`
```jsx
{
    "email": "teste@teste.com",
    "password": "password"
}
```

`Response:`
```jsx
{
    "token": "your-authentication-token"
}
```

## POST /api/v1/register
Register a new user.

`Request:`
```jsx
{
    "email": "teste@teste.com",
    "password": "password"
}
```

`Response:`
```jsx
{
    "id": 1,
    "email": "teste@teste.com"
}
```
## Contacts
## GET /api/v1/contatos
Retrieve all contacts for the authenticated user.

`Request Headers:`
`Authorization: Bearer your-authentication-token`

`Response:`

```jsx
[
    {
        "id": 1,
        "name": "John Doo",
        "phone": "(99)9999-9999",
        "email": "teste@gmail.com"
    }
]
```

## POST /api/v1/contato
Add a new contact for the authenticated user.

`Request Headers:`
`Authorization: Bearer your-authentication-token`

`Request:`
```jsx
{
    "name": "John Doo",
    "phone": "(99)9999-9999",
    "email": "teste@gmail.com"
}
```
`Response:`

```jsx
{
    "id": 1,
    "name": "John Doo",
    "phone": "(99)9999-9999",
    "email": "teste@gmail.com"
 }
```

## PUT /api/v1/contato/:id
Update an existing contact for the authenticated user.

`Request Headers:`
`Authorization: Bearer your-authentication-token`

`Request:`
```jsx
{
    "name": "John Doo Update",
    "phone": "(99)9999-9999",
    "email": "teste@gmail.com"
}
```
`Response:`

```jsx
{
    "id": 1,
    "name": "John Doo Update",
    "phone": "(99)9999-9999",
    "email": "teste@gmail.com"
 }
```
## DELETE /api/v1/contato/:id
Delete an existing contact for the authenticated user.

`Request Headers:`
`Authorization: Bearer your-authentication-token`

`Response:` `Ok`
