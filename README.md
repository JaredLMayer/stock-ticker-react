## Running the application

This project depends on API keys to hit Alpaca API. Please refer to the provided keys, or if you do not have keys, you must obtain them from the owner.

Create a file in the project root, `.env`. Include API keys there.

Run `npm install`;

Run `npm run dev`;

## About

My process in building this application began with `create-react-app`. I felt it was the most straight forward and quickest way to get going. Although not ideal, I fetch all the data in the `TickerList` component and pass that through the children with state and props.
I am using the `dotenv` module in order to successfully conceal api keys that should not be public.
In order to mitigate CORS issues when running this application locally, I have added a `proxy:` key to the `package.json`. Ideally, I would create a custom backend calling relative routes, which would alleviate that work-around.


## Comment from PR

Hey ClearStreet,

The instructions on how to run the application are included in the README. Please let me know if you have any issues running! I am sending the api keys via encrypted file and email to Carmen for the .env file. I actually really enjoyed working on this project!
Outstanding Items:

- Search Bar functionality (I know this isn't in the actual requirements, but I saw it in the mockup and I'd love to incorporate that functionality)
- Needed to find true endpoint for "market time": I honestly found the Alpaca docs extremely confusing. I couldn't figure out which endpoint was correct for GET'ing all the stocks in 1 call, and I didn’t want to spend too much time on that piece. Therefore, I have an inefficient way of doing it by calling the API for each ticker symbol, nor did I have time to properly create a custom backend :/.
- Summary and Stats for details page: unsure if there was an endpoint for that. Figured it wouldn’t be much to create a blank text area.
- TESTING: couldn’t really spend time at the end on testing given my work and interview schedule at the moment. Sorry about that but generally, I would incorporate tests using Nock API to test the api calls are coming back as expected. I would also incorporate front end testing with screenshot comparisons of the components to make sure those look as expected.
- Refactoring: I could refactor a TON on this. I would move the API calls to a backend, I would split up the components more than I did. Also there is definitely some redundant CSS. On that note, I would’ve incorporated Sass. Absolutely love Sass and feel that regular CSS gets messy and bloated quickly.
Thank you guys so much for the consideration either way and hope you enjoy looking it over!
