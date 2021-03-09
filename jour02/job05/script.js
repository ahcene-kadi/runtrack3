const [green,red,blue] = [60, 160, 260]
const footer = document.getElementsByTagName('footer')[0]

document.addEventListener('scroll',() => {
    let y = window.scrollY /900
    const [g,r,b] = [green/y, red/y, blue/y].map(Math.round)
    footer.style.backgroundColor = `rgb(${g},${r},${b})`;
})