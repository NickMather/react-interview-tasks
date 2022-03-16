This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Tasks

All components should be contained within the `src/components` folder. Redux has already been added to the project for the purpose of any Redux related tasks, anything that is not explicitly requested is up to the developer to interpret and find solutions for.

## Task 1

1. Create two components and display them in `index.js`. Both components will require a text `input` that has a button that is disabled until the user enters more than three characters. One component should use local state, the other component should use Redux state (you wouldn't necessarily do this in a real world app, however this is just for the purpose of the task).
2. Clicking the button when in it's non-disabled state should create a new entry in `localStorage` called `input_has_value` with a value of whatever is in the input when the button is clicked. Deleting all characters from either input should delete the `localStorage` item.

## Task 2

<strong>API documentation</strong>: `https://www.petfinder.com/developers/v2/docs/` <br/>
<strong>Animals endpoint</strong>: `https://api.petfinder.com/v2/animals`

1. If you're not experienced with Next.js, go straight to point 2. Request a new `ACCESS_TOKEN` from the Pet Finder API and store it in a cookie. This cookie shouldn't be accessible via the client. Use an `asyncThunk` (already created) to make the request through to the Next.js API endpoints. The real endpoint URL should not be exposed to the client.
2. Request a new `ACCESS_TOKEN` from the Pet Finder API and store it in a cookie for future requests.
3. Create a new component and make a request to the `animals` endpoint to pull in 24 random dogs and cats and display them in a 6x4 grid with the name of the animal overlaid on top of the image/background. Ensure it's legible.
4. Create a new component that resides inside the component you made above that has a filter. This filter should have 3 options; All, cats and dogs. Selecting All should show all animals (cats or dogs) and selecting dogs or cats should show only cats or dogs. All should be the default selection.