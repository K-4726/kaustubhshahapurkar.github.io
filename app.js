

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function ajaxpost () {
    // (A) GET FORM DATA
    var data = new FormData(document.getElementById("form"));
   
    // (B) AJAX REQUEST
    // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
    fetch("index.html", { method:"POST", body:data })
    .then(res => res.text())
   
    // (B2) SHOW MESSAGE ON SERVER RESPONSE
    .then(response => {
      console.log(response);
      alert("SUCCESSFUL!")
    })
   
    // (B3) OPTIONAL - HANDLE FETCH ERROR
    .catch(err => console.error(err));
   
    // (C) PREVENT FORM SUBMIT
    return false;
  }

