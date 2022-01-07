const email = document.querySelector ("#email")
const passw = document.querySelector ("#password")

function saveData() {
    if ( !email.value || !passw.value ) return
    const user = {
        name: email.value,
        pass: Sha256.hash ( passw.value )
    }
    localStorage.setItem (
        "user",
        JSON.stringify ( user )
    )
}