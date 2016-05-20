// adds some extra date functionalitites to the date object
// https://coderwall.com/p/rbfl6g/how-to-get-the-correct-unix-timestamp-from-any-date-in-javascript

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }
