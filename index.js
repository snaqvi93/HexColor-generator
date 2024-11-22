function* colorGenerator(){
    let color = '#'
    for(let i= 0 ; i <6; i++){
        const randomIndex = Math.floor(Math.random() * 16)
        color += '0123456789ABCDEF'[randomIndex]
    }
    yield color
}

document.getElementById('nextColorButton').addEventListener('click', () => {

        const hexGenerator = colorGenerator()
        const result = hexGenerator.next()
        const color = result.value
        
        document.getElementById('colorText').textContent = color
        document.getElementById('colorDisplay').style.backgroundColor = color
})
