"use strict";

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    var unread = 0;
    // title is like (2) Circuit where 2 is the number of unread messages, if any
    // if there is no unread message, title is only 'Circuit'
    // we need to extract the title value and do some regex stuff
    // regex is '\((\d+)\) Circuit'
    const titleValue = document.querySelector('title').text;
    const regEx = new RegExp("\((\d+)\) Circuit"); 

    match = regEx.exec(titleValue);
    if (regEx.test(titleValue)) {
      unread = 
    }
    Ferdi.setBadge(parseInt(unread, 10));
  };



  const loopFunc = () => {
    getMessages();
  };

  Ferdi.loop(loopFunc);

};