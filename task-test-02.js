localStorage.clear()
localStorage.setItem (
    "user",
    JSON.stringify({
        name: prompt ("Enter your name"),
        visit: new Date(),
        localPage: location.href
    })
)
Storage.prototype.expandUser = function(){
    let user = JSON.parse(
        this ["user"]
    )
    for (var item in user)
        localStorage.setItem (item, user[item])
    localStorage.removeItem("user")
    }
localStorage.expandUser()