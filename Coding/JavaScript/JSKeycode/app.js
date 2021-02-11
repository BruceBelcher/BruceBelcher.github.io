
document.addEventListener("keydown", () => {
    let key = event.keyCode
    document.getElementById("key").innerHTML = event.key
    document.getElementById("code").innerHTML = event.code
    document.getElementById("which").innerHTML = event.which

    console.log(event.key)
    console.log(event.code)
    console.log(event.which)
})