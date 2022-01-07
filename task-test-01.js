localStorage.clear()
localStorage.setItem ("url",location.href)
var user = {
    name: prompt ("Enter your name"),
    last_visit: new Date()
}
localStorage.setItem(
    "user",
    JSON.stringify (user)
)
Storage.prototype.getItems = function(){
    localStorage.removeItem ("user")
    var props = []
    for ( var x in this){
        props.push (x)
    }
    return props
}
var storageContent = localStorage.getItem("url")