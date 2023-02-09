# Template for React News App

This project is a template for React News App, This project has several tests to be passed. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

# About the Test

## Routing

This project has 3 pages as following :\
"/" for the home page\
"/news" to show all the news\
"/news/:id" to show news details\

## Home Page ("/")

Description : The home page is the home page of the projects, you can add your website name, cool images, etc in this page (optional).

### In order to pass the test, the home page should meet these requirements below :

1. It should renders a "find news" text (Tips : wrap this text inside Link component)
2. When the "find news" text is clicked it should navigate to "/news"

## News Page ("/news")

Description : The News Page is the page to show all news data from [https://api.spaceflightnewsapi.net/v3/articles/](https://api.spaceflightnewsapi.net/v3/articles/). Before the api loads the news page should have a "Loading..." text.
After all the news is rendered, when user clicks the news, it should navigate to "/news/:id". Id should matches the news id from the API.

### In order to pass the test, the home page should meet these requirements below :

1. A h1 tag containing "News" text on top of the page.
2. Shows "Loading..." text before the API responds with the news data.
3. Render all news data (10 news data in total) inside Link component and wrap them inside li tag. For test purpose please add data-testid = id to the Link component like the example below :

```
<li>
    <Link to={data.id} data-testid={data.id}>
        <h3>{data.title}</h3>
    </Link>
</li>
```

You can then render anything inside the Link component such as news title.\
4. When the Link is clicked it should navigate to "/news/:id" with :id matching as the data id from the API.

## News Details Page ("/news/:id")

Description : this page should show the news with the matching news id with :id in more details. This page should get the data from the API [https://api.spaceflightnewsapi.net/v3/articles/${id}](https://api.spaceflightnewsapi.net/v3/articles/18120)

### In order to pass the test, the home page should meet these requirements below :

1. Shows "Loading..." text before the API responds with the news data.
2. Renders news id and news title from the API. When calling the api the id should match with the :id params. For example "/news/18120" should fetch the data from [https://api.spaceflightnewsapi.net/v3/articles/18120](https://api.spaceflightnewsapi.net/v3/articles/18120). For more details this example might help you :

```
//The title and the id must be rendered to pass the test
<div>
    <h2>{news.title}</h2>
    <h3>{news.id}</h3>
</div>
```

3. Shows "Cannot found data" text when there's no data responded by the API. for example "/news/12345" should render "Cannot found data" text on the screen. In order to pass the test, please DON'T use nested ternary operator.
