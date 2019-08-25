# Brief Introduction
*This is the first of four applications. There are relations and differences among these four applications. Programming lanauage: JavaScript. Runtime: Node.JS. Text Editor: Visual Studio Code*

## Feature
This is the note-taking application. Just as every note-taking applet, our APP is able to implement the basic functions of file system: read only, list view, addition, and deletion. This program also applies the most fundamental features of Node JS: node module systems. Core module, third-party module and self-build module support the application together. When running this app in the Node.JS environmet, you'll find some interesting changes on the terminal/command prompt interface, such as colorful system prompts, command input guide book. Beyond that, some syntax of ES2015 version was adopted for the source code's editing.     

## Modules
1. Core Module
  - `fs` module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.  
2. Third Party Module
  - `validator`: validates and sanitizes strings you input
  - `yargs`: helps building interactive command line tools, neat and concise
  - `chalk`: changes terminal string color
3. Local Module
  - ./notes.js: exports different methods for note-taking commands
## Usage
1. Downloading Node.JS [(12.6.0 or later version)](https://nodejs.org/en/download/current/)
2. Locating at 'notes.js' and 'app.js' path in terminal or command prompt window (depending on your operating system) and inputing the commands as below for third party modules' installation
  - ``$ npm install validator@10.8.0``
  - ``$ npm install yargs@12.0.2``
  - ``$ npm install chalk@2.4.1``
3. Different commands for file operation when the application is running:
  - Guides: ``$ node app.js --help``
  - Addition: ``$ node app.js add --title="title_name" --body="body_content"``
  - Deletion: ``$ node app.js remove --title="title_name"``
  - List view: ``$ node app.js list``
  - Read only: ``$ node app.js read --title="title_name"``
4. Dollar sign($) means pathname.
## Reference
Node.Js Doc:(https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system), NPM.com:(https://www.npmjs.com/)
