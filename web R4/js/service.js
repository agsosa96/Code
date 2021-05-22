fetch("https://rickandmortyapi.com/api/episode")
  .then((response) => response.json())

  .then((json) => {
   let resp = json;
    console.log(resp);
    for (var i = 0; i < resp.results.length; i++) {
      var tr =
        `<tr>
              <td>` + resp.results[i].id +
        `</td>
              <td>` + resp.results[i].name +
        `</td>
              <td>` + resp.results[i].air_date +
        `</td>
              <td>` + resp.results[i].episode +
        `</td>
                <td>` + resp.results[i].url +
        `</td>
                <td>` + resp.results[i].created +
        `</td>
            </tr>`;
      $("#table-body").append(tr);
    }
  });
  
$("#table-body").html("");