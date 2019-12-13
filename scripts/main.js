// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

function parseQueryString () {
    var parsedParameters = {},
      uriParameters = location.search.substr(1).split('&');
  
    for (var i = 0; i < uriParameters.length; i++) {
      var parameter = uriParameters[i].split('=');
      parsedParameters[parameter[0]] = decodeURIComponent(parameter[1]);
    }
  
    return parsedParameters;
  }
