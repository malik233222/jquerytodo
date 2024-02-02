$(document).ready(function () {
  let arr = [];

  $("button").on("click", function () {
  let toDo = $(".myInp").val();
    arr.push(toDo);
    salam(arr);
    $.post(
      "https://js-login-4df8b-default-rtdb.firebaseio.com/todos.json",
      JSON.stringify(toDo),
      function (data, status) {
        if (status === "success") {
          alert("data gonderildi");
        } else {
          console.log(err);
        }
      }
    );
  });

  addEventListener("DOMContentLoaded", getFunk());

  function getFunk() {
    $.get(
      "https://js-login-4df8b-default-rtdb.firebaseio.com/todos.json",
      function (data, status) {
        if (status === "success") {
          for (let key in data) {
            arr.push(data[key]);
          }
          salam(arr);
        } else {
          console.log(err);
        }
      }
    );
  }

  function salam(arr) {
    let data = "";
    arr.forEach((item) => {
      data += `<li>${item}</li>`;
    });

    $(".myUl").html(data);
  }
});
