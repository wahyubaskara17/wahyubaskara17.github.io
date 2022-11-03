$(document).ready(function(){
  $.ajax({
    url: "API/stats.json",
    method: "GET",
    success: function (result) {
      var infected = result.numbers.infected
      var recovered = result.numbers.recovered
      var fatal = result.numbers.fatal 
      // input to html
      $("#infected").append(infected+" Case");
      $("#recovered").append(recovered+" Case");
      $("#fatal").append(fatal+" Case");
    },
  });
})