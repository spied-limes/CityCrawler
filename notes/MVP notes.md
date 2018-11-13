# What we need for the MVP

## Database

| Model    | Field                                                                |
| -------- | -------------------------------------------------------------------- |
| Places   | Name, Street, City, State, Zip, Coords, Description (via wiki API?)  |
| User     | FName, LName, isAdult?, Email, Name, Street, City, State, Zip, Coords |
| Activity | Name, UserCheckIn (primary), Description                             |


## API Routes

### `GET`

- `/places`
- `/users`

### `POST`

- `/users/homebase`
- `places/checkin`

### Other

- Google Maps API / Mapbox GL

## React

| For MVP | Component         | What does it do                                      |
| ------- | ----------------- | ---------------------------------------------------- |
| NO      | `<SignupPage />`  | simple signup form                                   |
| YES     | `<LandingPage />` | redirect when signed in                              |
| YES     | `<Maps />`        | brings up directions on page, (no redir if possible) |


## Redux

### Store

- Get users
- post activity

- On `<LandingPage />`
