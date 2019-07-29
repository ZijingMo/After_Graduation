# Brief Introduction
*Programming language: JavaScript. Runtime: Vanilla.JS. Source Editor: Visual Studio Code.*
## Feature
This web application helps us to search GitHub members by their name. After app users input GitHub account names, this web application will give users GitHub members' profile, public repositories, public gists, followers, and follwings. On the same page, under these basic information, this app will respond a list of GitHub members' repositories and corresponding links. The users will know the amount of stars, watchers and forks for given repository as well. If users search the name is not existed in the GitHub database, system will show a red alert. 
## Functionality
*Different files play different roles in the system.*

For app.js file, 'keyup' method is applied for listening users' input. This file instantiates two objects from other files named github.js and ui.js. For github.js file, partial ES6+ features are used for coding. The `async`, `await`, and `fetch` constitute asynchronous part together. They help web app to reach out GitHub's api and get the data users require. For ui.js file, a class named UI handles inserting operations into the DOM. In the other word, this file is responsible for what and how the users see. 

For index.html file, Litera template from Bootswatch.com was applied into web page design. In case of any usage of bootstrap js, the file also contains three links from getbootstrap.com.
## Preview
- **Initial Page**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/GitHub_Finder/Preview/Preview1.png)
- **Searching Process**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/GitHub_Finder/Preview/Preview2.png)
- **Profile && Repositories**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/GitHub_Finder/Preview/Preview3_revised.png)
- **Alert page**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/GitHub_Finder/Preview/Preview4.png)
## Usage and Miscellanea
1. Loading the file path with Visual Studio Code 
2. Installing and enabling 'Live Server' extension at VS Code extension section
3. Clicking mouse right key and choosing 'Open with Live Server' option at the index.html file 
4. There is one restriction for the GitHub API usage. You only make about 60 requests per hour without an API key (GitHub's server records your requests based on your IP address). If enjoying this application, you need to [get an API key and an API secrect key from GitHub](https://github.com/settings/applications/new) for more requests.

## Reference
1. Regarding promise, async and await: [MDN_async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function),  [MDN_await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await), [Medium](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8).
2. Regarding Html and CSS design: [Bootswatch_Litera](https://bootswatch.com/litera/), [getBootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/#js)
