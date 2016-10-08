;(function (global, factory)
{
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.moment = factory();
}(this, function ()
{
    'use strict';

    function fastRank (weights, datas)
    {
        for(var i = 0, l = weights.length, total = 0, factor = 0, data; i<l; i++)
        {
            data = datas[i];
            factor += weights[i]*data;
            total += data;
        }
        return {
            total: total
        ,   mark: total > 0 ? factor/total:0
        };
    }
    
    fastRank.mark = function mark (weights, datas)
    {
        for(var i = 0, l = weights.length, total = 0, factor = 0, data; i<l; i++)
        {
            data = datas[i];
            factor += weights[i]*data;
            total += data;
        }
        return total > 0 ? factor/total:0;
    };
    
    fastRank.total = function total (datas)
    {
        for(var i = 0, l = datas.length, total = 0; i<l; i++)
        {
            total += datas[i];
        }
        return total;
    };
    
    return fastRank;
}));