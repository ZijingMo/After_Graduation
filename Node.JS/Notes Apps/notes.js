// Zijing Mo
// Local Module -- notes.js

const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    

    // Non-arrow function version 
    // const duplicateNotes = notes.filter(function (note){
    //    return note.title === title 
    // }) 

    //const duplicateNotes = notes.filter((note) => note.title === title) 
    // This lane of code checks whether existing title in 'notes' array is same to new-added title. If both is the same, arrow function will return 'true' value. Then the filter() method will return the whole 'notes' array. As a result, the 'duplicateNotes' variable will be an array which contains the same elements as 'notes' array. 
    // If this two title is different, arrow function will return 'false' value. The filter() method will do nothing. As a result, the 'duplicateNotes' will be an empty array, and the length of array is zero. On the other hand, filter() method will search every element in that array. This will take a lot of time. 

    const duplicateNote = notes.find((note) => note.title === title)
    // The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise 'undefined' value is returned, not like filter() method, which only returns 'true' or 'false' value.

    if (!duplicateNote) {
    // '!SomeName_Variable' means 'SomeName_Variable === undefined'. Since this is the return value of the find() method, this means no duplicated value in the 'notes' array. 
      notes.push({
        title: title,
        body: body
      })
      saveNotes(notes)
      console.log(chalk.green.bold.inverse('New note added!'))
    } else {
      console.log(chalk.red.bold.inverse('Note title taken!'))
    }
} 

const removeNote = (title) => {
    const notes = loadNotes()

    // Method One
    // const existingNotes = notes.filter(function (note){
    //       return note.title === title
    // })
    // if (existingNotes.length === 0){
    //   console.log(chalk.red.bold.inverse('The note was not found...'))
    // } else {
    //     for(var i=notes.length-1; i >= 0; i--){
    //       if(notes[i].title === title){
    //           notes.splice(i, 1)
    //       }
    //     }//Applying traversing approach to delete title
    //   saveNotes(notes)
    //   console.log(chalk.green.bold.inverse('The note has been removed!'))
    // }
    

    // Method Two
    const notesToKeep = notes.filter((note) => note.title !== title)//This lane means that the array 'notesToKeep' only keeps the elements(existing title names in this case) which is different from input value(inputing title name in this case).
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.bold.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.bold.inverse("No note found!"))
    }    
    //console.log(title)
    //console.log("Remove the title. This note is from note.js file")
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.bold.inverse('Your notes'))
  notes.forEach((note) => {
      //console.log(note.title)
      console.log(`TITLE: ${note.title}`)
  }) // The forEach() method executes a provided function, which is the arrow function in the case, once for each array element, which is every element for arraay 'notes'.
}

const readNote = (title) => {
  const notes = loadNotes()
  
  const requestedNote = notes.find((note) => note.title === title)
  if (!requestedNote){
      console.log(chalk.inverse.red.bold('Sorry, no note found'))
  } else {
      console.log(`TITLE: ${chalk.bold.inverse.yellow(requestedNote.title)}`)
      console.log(`BODY: ${requestedNote.body}`)
  }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
          const dataBuffer = fs.readFileSync('notes.json')
          const dataJSON = dataBuffer.toString()
          return JSON.parse(dataJSON)
    } catch(e){
      return []
    }
}

module.exports = {
      addNote: addNote,
      removeNote: removeNote,
      listNotes: listNotes,
      readNote: readNote
}