document.getElementById("continent").addEventListener("change", function (e) {
  document.getElementById("country").innerHTML = "";
  fetch(
    "https://app.sportdataapi.com/api/v1/soccer/countries?apikey=a620e320-ebcf-11ec-b846-fb6f0060d7e9&continent=" +
      e.target.value
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      for (const key in data.data) {
        // console.log(data.data[key]);
        document.getElementById(
          "country"
        ).innerHTML += `<option value="${data.data[key].country_id}" >${data.data[key].name}</option>`;
      }
    })
    .catch((e) => console.log(e));
});

document.getElementById("min").addEventListener("blur", function () {
  document.getElementById("results").classList.add("hidden");
  document.getElementById("results").innerHTML = "";
  //   document.getElementById("continent").value);

  let country = document.getElementById("country").value;
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;

  fetch(
    `https://app.sportdataapi.com/api/v1/soccer/players?apikey=a620e320-ebcf-11ec-b846-fb6f0060d7e9&country_id=${country}&max_age=${max}&min_age=${min}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const key in data.data) {
        document.getElementById("results").innerHTML += `
     
            <div>
                <div class="resultData">
                    <label for="name">Name</label>
                    <h2>${data.data[key].firstname}</h2>
                </div>
                <div class="resultData age">
                    <label for="name">Age</label>
                    <h2>${data.data[key].age}</h2>
                </div>
                <div class="resultData">
                    <label for="name">Birthday</label>
                    <h2>${data.data[key].birthday}</h2>
                </div>
                <div class="resultData">
                    <label for="name">Height</label>
                    <h2>${data.data[key].height}</h2>
                </div>
                <div class="resultData">
                    <label for="name">Weight</label>
                    <h2>${data.data[key].weight}</h2>
                </div>
            </div>
        `;
      }
      document.getElementById("results").classList.remove("hidden");
    });
});
