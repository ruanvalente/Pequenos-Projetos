'use strict'

const $controls = document.querySelector('.controls')
const $cssText = document.querySelector('.css')
const $button = document.querySelector('.btn')
const stylesObject = {
  element: $button,
  texto(value) {
    this.element.innerText = value
  },
  color(value) {
    this.element.style.color = value
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },
  height(value) {
    this.element.style.height = value + 'px'
  },
  width(value) {
    this.element.style.width = value + 'px'
  },
  border(value) {
    this.element.style.border = value
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px'
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem'
  }
}

function handleChange(e) {
  const name = e.target.name
  const value = e.target.value
  stylesObject[name](value)
  saveValues(name, value)
  showCSS()
}

function saveValues(name, value) {
  localStorage[name] = value
}

function setData() {
  const properties = Object.keys(localStorage)
  properties.forEach(property => {
    stylesObject[property](localStorage[property])
    $controls.elements[property].value = localStorage[property]
  })
  showCSS()
}

setData()

function showCSS() {
  $cssText.innerHTML =
    '<span>' + $button.style.cssText.split('; ').join(';</span><span>')
}

$controls.addEventListener('change', handleChange, false)
