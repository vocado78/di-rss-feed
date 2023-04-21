# Di RSS feed

## Accessibility
Colours were confirmed using an online WCAG colour contrast checker.

To do: make UI keyboard accessible and confirm screen reader accessibility.

## Testing
Unfortunately I did not have time for adding unit tests. Some manual testing has been performed.

To do: write unit tests.

## Screen- and browser compatibility

The UI has not been optimized for screens smaller than tablets.

The app runs in the latest version of Chrome and Firefox, but not Safari. Edge has not been tested.

## Running the app
Please note that this app requires `node >=18.0.0` to run, as it is making use of the ´Fetch API´.

Install dependencies, if using `npm`
```
npm install
```

Start the project, if using `npm`
```
npm run start
```

The app will be running at http://localhost:3000.
