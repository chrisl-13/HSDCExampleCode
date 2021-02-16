import React from 'react';
import $ from 'jquery';

class Test extends React.Component {
  componentDidMount() {
    // let req = new XMLHttpRequest();

    // req.onreadystatechange = function () {
    //   if (this.readyState == 4 && this.status == 200) {
    //     //The responseText property
    //     //returns a text string           
    //     console.log(req.responseText)
    //     //Do some stuff
    //   }
    // };

    // req.open("GET", "http://dataserver/users", true);
    // req.send();
    $.ajax({
      url: 'http://dataserver/data.json'
    }).done(function (data) {
      // ...do some stuff whith data
    }).fail(function () {
      // Handle error
    });
  }
}

export default Test;

