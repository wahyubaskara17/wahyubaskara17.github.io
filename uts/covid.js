var worldData = "";
var countryData = "";
worldInit();
worldCountries();
// countryInit();
function worldInit() {
  var url = "https://disease.sh/v3/covid-19/all";
  $.get(url, function (worldData) {
    // percentageOfWorldDeath =
    //   (worldData.Global.TotalConfirmed / worldData.Global.TotalDeaths) * 100;
    worldData = `
            <td>${worldData.cases}</td>
            <td>${worldData.recovered}</td>
            <td>${worldData.deaths}</td>

    `;
    $("#worldData").html(worldData);
  });
}

function worldCountries() {
  var url = "https://disease.sh/v3/covid-19/countries";
  $.get(url, function (selectedCountry) {
    for (
      var noOfCountries = 0;
      noOfCountries <= selectedCountry.length - 1;
      noOfCountries++
    ) {
      $("#coba").append(
        "<option value = " +
          selectedCountry[noOfCountries].country +
          ">" +
          selectedCountry[noOfCountries].country +
          "</option>"
      );
    }
  });
}

  $.ajax({
    type: "GET",
    url: "https://disease.sh/v3/covid-19/countries",
    success: function (result) {
      for (var list = 0; list <= result.length; list++) {
        $("#coba").change(function () {
          var selected = $("#coba").find("option:selected").text();
          // alert("this is "+selected)
          if (selected == result[list]) {
            alert("sukses")
          }
          alert("your county has been selcted is - "+ selected)
        });
      }
    },
  });

// getData();
// var api = "https://disease.sh/v3/covid-19/countries";
// function getData() {
//   $.ajax({
//     type: "GET",
//     url: "https://disease.sh/v3/covid-19/countries",
//     success: function (data) {
//       for (var i = 0; i <= data.length; i++) {
//         var kota = data[i].country;
//         var infoNegara = data[i].countryInfo;
//         var idNegara = infoNegara._id;
//         var flag = infoNegara.flag;
//         var kotav2 = "hai " + kota + "aku";
//         var death = data[i].deaths;
//         console.log(flag);
//         var dataCovid = '<span class="text-danger"> data meninggal'+death+'</span>';
//         $("#listGroup").append(
//           '<li class="list-group-item"><div class="d-flex"> <img src="' +
//             flag +
//             '" alt="">' +
//             "<p>" +
//             kota +
//             "</p></div>" +
//             dataCovid +
//             "</li>"
//         );
//       }
//     },
//   });
// }
