## Seen Movies Express App

An app that integrates with the moviedb.org api built with angular, express and node.

### Prerequisites

You will need node v4.x.x or higher to run this application.

### Installation

Clone this repository, run `npm install` from the root directory to install all of the project dependencies. 

This application calls the TMDb api so you will need an API key. You can register for one at [TMDb's site](https://www.themoviedb.org/faq/api). Once you have received the API key run the application with the API key assigned to the environment variable `MOVIE_DB_API_KEY`, for example from the root directory of the project: 

`MOVIE_DB_API_KEY={YOUR_API_KEY} npm start`. 

This will start the application. Then open up a browser and navigate to localhost (the app runs on port 300 but you can configure this in `app.js`). 

Run the tests for the application by again using the API key:

`MOVIE_DB_API_KEY={YOUR_API_KEY} npm test ./src/server/test/*.js`

### Licenses

**TMDb**

This product uses the TMDb API but is not endorsed or certified by TMDb.

**MIT License**

Copyright (c) 2016 Simon Brewster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
