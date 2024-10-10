const observerblur = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showblur');
        }
    })
})


const hiddenElementsblur = document.querySelectorAll('.hiddenblur')
hiddenElementsblur.forEach((el)=> observerblur.observe(el))

const observerslideleft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showslideleft');
        }
    })
})


const hiddenElementsslideleft = document.querySelectorAll('.hiddenslideleft')
hiddenElementsslideleft.forEach((el)=> observerslideleft.observe(el))

const observerslideright = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showslideright');
        }
    })
})


const hiddenElementsslideright = document.querySelectorAll('.hiddenslideright')
hiddenElementsslideright.forEach((el)=> observerslideright.observe(el))

    