module.exports.function = function changeColor (color) {
  
  var options = { 
    format: 'text',
    cacheTime: 1,
    query: {
      command: "Color",
      value: color
    }
  };
  console.log("running");
  console.log(config.get('remote.url') + "command/do");
  try {
    var response = http.getUrl(config.get('remote.url') + "/command/do", options);
  }
  catch (e){
    return e;
  }
  return response;
  
}
