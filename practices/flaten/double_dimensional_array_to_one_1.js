'use strict';

function double_to_one(collection) {
    var i = 0;
    var j = 0;
    var arr_fin = [];
    var len = collection.length;
    for(i = 0; i < collection.length; ++i){
        if(collection[i].length == undefined){
            arr_fin.push(collection[i]);
            continue ;
        }
        else{
            for(j = 0; j < collection[i].length; ++j){
                arr_fin.push(collection[i][j]);
            }
        }
    }
    return arr_fin;
}

module.exports = double_to_one;
