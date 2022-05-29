import { UI_COMPONENTS } from "./view.js";

let a
let b
let action
let operator

UI_COMPONENTS.FIELD.textContent = '0'

resetValue()

function resetValue() {
  a = null
  b = null
  action = null
  operator = null
}

UI_COMPONENTS.CLEAR.addEventListener('click', () => {
  UI_COMPONENTS.FIELD.textContent = '0'

  resetValue()
})

UI_COMPONENTS.DELETE.addEventListener('click', () => {
  UI_COMPONENTS.FIELD.textContent = UI_COMPONENTS.FIELD.textContent.slice(0, -1)

  if (UI_COMPONENTS.FIELD.textContent.length === 0) {
    UI_COMPONENTS.FIELD.textContent = 0

    resetValue()
  }
})

UI_COMPONENTS.NUMBERS.forEach(elem => {
  elem.addEventListener('click', () => {
    if (UI_COMPONENTS.FIELD.textContent === '0' || action) {
      UI_COMPONENTS.FIELD.textContent = elem.textContent
      action = undefined
    } else {
      UI_COMPONENTS.FIELD.textContent += elem.textContent
    }

    if (operator) {
      b = UI_COMPONENTS.FIELD.textContent
    } else {
      a = UI_COMPONENTS.FIELD.textContent
    }
  })
})

UI_COMPONENTS.ACTIONS.forEach(elem => {
  elem.addEventListener('click', () => {
    action = elem.id
    operator = elem.id
  })
})

UI_COMPONENTS.EQUAL.addEventListener('click', () => {
  UI_COMPONENTS.FIELD.textContent = getResult(parseInt(a), parseInt(b), operator)
  a = getResult(parseInt(a), parseInt(b), operator)
})

function getResult(a, b, operation) {
  switch (operation) {
    case 'sum':
      return +a + +b
    case 'sub':
      return a - b
    case 'multi':
      return a * b
    case 'div':
      return a / b
  }
}