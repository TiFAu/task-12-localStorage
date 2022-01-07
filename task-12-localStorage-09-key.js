localStorage.setItem ( "url", location.href )
var user = {
    name: prompt ( "Enter your name" ),
    last_visit: new Date().toLocaleString().split(", ")[0]
}
localStorage.setItem (
    "user",
    JSON.stringify ( user )
)