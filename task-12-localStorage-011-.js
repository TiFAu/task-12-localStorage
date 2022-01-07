/*Мы можем добавить новые методы объекту localStorage, используя свойство
 prototype конструктора Storage*/
Storage.prototype.getItemList = function () {
    for ( var x in this ) {
        console.log ( x, ": ", this [ x ] )
    }
}
/*Как видите, мы можем расширять функциональность объекта localStorage*/