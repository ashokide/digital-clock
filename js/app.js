const time = document.querySelector('.time')
setInterval(()=>{
    const date = new Date()
    const period = date.getHours()>12 ?"PM":"AM"
    const hour = date.getHours()>12 ? date.getHours()-12 : date.getHours()
    const hours = hour<10 ? "0"+hour : hour
    const minutes = date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds()
    time.innerText = `${hours}:${minutes}:${seconds} ${period}`
},500);