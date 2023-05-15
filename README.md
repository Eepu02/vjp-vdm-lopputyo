# Devaus

## Github

Jos aloitat uuden asian työstämisen, valitse Github desktopista `main`-haara ja paina `Fetch origin` sekä tarvittaessa `Pull origin`. Tällöin muiden tekemät mahdolliset muutokset ladataan sulle. Tee uusi haara `Branch --> New branch` ja paina `Publish branch`.

Kun saat asian valmiiksi, lisää yhteenveto ja paina vasemmalta `Commit` ja tämän jälkeen `Push origin`. Paina `Create pull request` jonka jälkeen siirryt Githubin verkkosivuille. Jos konflikteja ei ole ja kaikki näyttää vihreää, voi haaran yhdistää päähaaraan. Tarvittaessa tässä vaiheessa voi myös pyytää toista tsekkaa muutokset, kuten on tapana isoissa projekteissa.

## Koodaus

Aluksi avaa VS Coden terminaali Terminal --> New terminal ja suorita `npm run install` asentaakseksi ja päivittääksesi kirjastot. Tämä on hyvä tehdä päivän alussa tai aina jos joku lisää projektiin uuden kirjaston. Ei muuta kun koodaamaan!

## Muutosten näkeminen

Käynnistä etupään devauspalvelin komennolla `npm run start`. Muutokset näkyvät tällöin livenä. Jos selain ei aukea automaattisesti, etusivulle pääsee osoitteesta [http://localhost:3000](http://localhost:3000).

# Käynnistys ja deployaus

## Lyhyesti

Suorita seuraavat komennot projektin juuressa:

1. `npm install`
2. `npm run build`
3. `npm run server`

Projekti on nyt saavutettavissa osoitteessa [https://localhost:9000/](https://localhost:9000/).

### Chatin tekoälyvastausten saaminen

Jos haluat, että chat vastaa tekoälyn avulla, tarvitset OPEN AI:n API-avaimen. Sitä ei voida turvallisuussyistä säilöä projektin yhteydessä. Palvelin kuitenkin vastaa ilman API avainta, joten voit testata chat-ominaisuutta ilman avainta. Tekoälyn vastauksia voi testata tuotantoversiossa [Renderissä](https://tunteetovatkaikille.onrender.com). Jos sinulla on avain, tee seuraavasti:

1. Kopioi `.env.template` tiedosto ja nimeä se `.env`-päätteiseksi.
2. Lisää OPEN AI:n API-avain.
3. Aseta `NODE_ENV` arvoksi `production`
4. Tallenna ja käynnistä palvelin uudelleen.

## Pitkästi

Suorita `npm run build`, jolloin projektin `src`-kansio pakataan ja optimoidaan selaimella avattavaan muotoon. Sivustoa voi tarkastella avaamalla `index.html` `build`-kansiosta. `build`-kansion sisällön voi viedä staattisen sisällön hostauspalveluun. Huomioi, että jotkin sivuston ominaisuudet eivät toimi staattisella sivustolla (chatin vastaukset).

Vaihtoehtoisesti projektin voi ajaa Nodella komennolla `node server/server.js` tai suoraan `npm run server`. Sivusto on tällöin saatavilla osoitteessa [https://localhost:9000/](https://localhost:9000/). Jälkimmäinen käynnistää palvelimen Nodemonin kanssa, jolloin muutokset koodiin tulevat voimaan automaattisesti. Ennen palvelimen ajoa tulee ajaa `npm run build`. `server`-kansiossa on ExpressJS:n päälle rakennettu yksinkertainen palvelin ja API-reitti, joka kykenee tarjoamaan staattisen sisällön `build`-kansiosta.

# TailwindCSS

Projektissa käytetään [TailwindCSS](https://tailwindcss.com/):ää.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
