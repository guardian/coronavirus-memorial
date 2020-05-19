// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

var showButtons = document.getElementsByClassName('gv-main-column--expand-button')

//toggle the opacity of the svg maps depending on state of county button
showButtons.forEach((i) => {
    i.addEventListener('click', (o) => {
        var target = o.currentTarget
        var identifier = target.getAttribute('data-key')
        console.log(identifier)
        var currentBio = document.getElementById(identifier)
        currentBio.classList.toggle('is-selected')
    })
})
