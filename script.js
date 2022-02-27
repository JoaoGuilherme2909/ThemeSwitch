const img = document.querySelector('img')
const btn = document.querySelector('button')
const body = document.querySelector('body')

let value = 0

btn.onclick = () => {
    if(value == 0){
        img.src = 'assets/moon.svg'
        body.classList.add('dark')
        body.classList.remove('light')
        value = 1
    }else{
        img.src = 'assets/sun.svg'
        body.classList.remove('dark')
        body.classList.add('light')
        value = 0
    }
}
