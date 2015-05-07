// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }
    // myUtils.myMap
    myUtils.myMap = function myMap(arr, cb){
        var len = arr.length;
        var arr1 = [];
        for(var i=0; i<len; i++){
            arr1 = cb(arr[i], i, arr);
        } return arr1;
    }

    // myUtils.myReduce
    myUtils.myReduce = function myReduce(arr, cb, pv){
        var len = arr.length;
        var pv = pv || 0;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        } return pv;
    }

    // myUtils.buildElement

    myUtils.buildElement = function buildElement(tag, string){
        return "<"+tag+">"+string+"</"+tag+">";
    }
    
    // myUtils.toDollarAmount;
    myUtils.toDollarAmount = function toDollarAmount(num){
        var cents = num % 100;

    }

    // myUtils.toCurrencyString;
    
}.call(this))
