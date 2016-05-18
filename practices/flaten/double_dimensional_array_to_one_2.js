'use strict';

function double_to_one(collection)
{
    var i = 0;
    var tmp = collection.join();
    var src = tmp.split(",");
    src = src.join("");
  //在这里写入代码
    var arr_fin = [];
    for(i = 0; i < src.length; ++i)
    {
        var fir_pls = src.indexOf(src[i]);
        if(fir_pls == i)
        {
            arr_fin.push(src[i]);
        }
    }
    return arr_fin;
}
module.exports = double_to_one;
