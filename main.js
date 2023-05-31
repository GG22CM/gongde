const muyu = document.getElementById('muyu')
const gun = document.getElementById('gun')
// 

let reWidth 

let reHeight

let reTransform


class Result {
    arr = []
    container = container
    push() {
        const result = document.createElement('div')
        result.innerHTML = '功德+1'
        result.className = 'result'
        result.style.opacity = 1
        this.container.appendChild(result)
        this.arr.push(result)
    }
    update() {
        for (let i of this.arr) {
            i.style.top = i.offsetTop - 1 + 'px'
            i.style.opacity = i.style.opacity - 0.01
            
        }
        this.arr = this.arr.filter(item => 
            {
                if (item.style.opacity <= 0) {
                    this.container.removeChild(item)
                    return false
                }else {
                    return true
                }
            }
            ) 
        
    }
}

const res = new Result()


muyu.addEventListener('mousedown', function () {
    const audio = document.createElement('audio')
    audio.src =  './assets/muyuyin.mp3'
    audio.play()

    reWidth = muyu.style.width 
    reHeight = muyu.style.height
    reTransform = gun.style.transform
    gun.style.transform = gun.style.transform + 'rotateZ(40deg)'
    
    muyu.style.width = muyu.offsetWidth * 0.9 + 'px'
    muyu.style.height = muyu.offsetHeight * 0.9 + 'px'

    res.push()

})


muyu.addEventListener('mouseup', function () {
    gun.style.transform =  reTransform
    muyu.style.width = reWidth 
    muyu.style.height = reHeight
})

function animate() {
  
    res.update()
    requestAnimationFrame(animate)
}

animate()
