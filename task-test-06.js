Storage.prototype.remove = function(item){
    window.dispatchEvent(new Element('storage'))
    localStorage.removeItem(item)
}

Storage.prototype.set = function(item, val){
    window.dispatchEvent(new Element('storage'))
    localStorage.setItem(item, val)
}

Storage.prototype.clearAll = function(){
    window.dispatchEvent(new Element('storage'))
    localStorage.clear()
}

window.addEventListener('storage',
    function(event){
        console.warn('localStorage has been changed')
    }
)