import { initApp } from './app'
import './style.css'
import { v4 } from 'uuid'

initApp()

async function saveObjectsToDB(objects: any) {
  let booksKeys = []
  for (let objectName in objects) {
    const generatedID = v4()
    booksKeys.push(generatedID)
    craft.storageApi.put(generatedID, JSON.stringify(objects[objectName]))
  }
  craft.storageApi.put('booksKeys', JSON.stringify(booksKeys))
}

export async function fileProcessor(event: any) {
  let file = event.target.result
  file = `==========\r\n` + file

  let highlights = file.split('==========')
  let bookStore: any = {}

  for (let highlight of highlights) {
    const hightlightParts = splitHighlights(highlight)
    let bookTitle: string = ""
    let bookAuthor: string = ""
    let highlightDate: string = ""
    let bookHighlight: string = ""

    hightlightParts.forEach((line: any, index: number) => {

      if (line == '')
        return
      // AUTHOR AND BOOK TITLE LINE
      if (line.includes('(') && line.includes('\r') && index == 1) {
        const split = line.split('(')
        bookTitle = split[0].trim()
        bookAuthor = split[1].slice(0, -2)
        if (bookAuthor.match("[0-9]+")) {
          bookAuthor = split[2].slice(0, -2)
        }

      }
      // META DATA LINE - PAGE, LOCATION, DATE ADDED
      if (line.includes('- Your Highlight')) {
        const split: string[] = line.split('|')
        const dateNonformated: Date = new Date(split[split.length - 1].slice(10))
        highlightDate = formatDateToSave(dateNonformated)
      }
      if (index == 4) {
        bookHighlight = line.trim()
      }
    })

    if (bookTitle === "")
      continue

    if (bookStore[bookTitle] === undefined) {
      bookStore[bookTitle] = {
        bookTitle: bookTitle,
        bookAuthor: bookAuthor,
        highlights: [{
          highlightDate: highlightDate,
          bookHighlight: bookHighlight
        }]
      }
    } else {
      bookStore[bookTitle].highlights.push({
        highlightDate: highlightDate,
        bookHighlight: bookHighlight
      })
    }
  }
  saveObjectsToDB(bookStore)
  return bookStore
}

// file processor functions 
function splitHighlights(highlight: string) {
  return highlight.split('\n').filter((part: string) => part !== '')
}

function formatDateToSave(date: Date) {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}
