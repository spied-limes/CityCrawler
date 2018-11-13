# What we need for the MVP

## Database

| Model    | Field                                                                |
| -------- | -------------------------------------------------------------------- |
| Places   | Name, Street, City, State, Zip, Coords, Description (via wiki API?)  |
| User     | FName, LName, Over18?, Email, Name, Street, City, State, Zip, Coords |
| Activity | Name, UserCheckIn (primary), Description                             |


## API Routes

### `GET`

- `/places`
- `/users`

### `POST`

- `/user/homebase`
- `places/checkin`

### Other

- Google Maps API / Mapbox GL

## React

| Component         | What does it do                                      |
| ----------------- | ---------------------------------------------------- |
| `<SignupPage />`  | simple signup form                                   |
| `<LandingPage />` | redirect when signed in                              |
| `<Maps />`        | brings up directions on page, (no redir if possible) |


## Redux

### Store

- Get users
- post activity

- On `<LandingPage />`
