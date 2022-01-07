var user = {
    name: "Иван",
    lastVisit: "27.02.2018",
    lastPage: "/home/page_07"
}
localStorage.setItem (
    "user",
    JSON.stringify ( user )
)