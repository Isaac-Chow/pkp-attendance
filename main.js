    document.getElementById("admin-1").style.display = "none";
      document.getElementById("admin-2").style.display = "none";
      document.getElementById("admin-3").style.display = "none";
      document.getElementById("admin-4").style.display = "none";

      var current = ""

      var people = []
      if (localStorage.getItem("p") == "" ||localStorage.getItem("p") == null){
          localStorage.setItem("p","")
        } else {
            people = localStorage.getItem("p").split(",")
        }
        document.getElementById("display").value = people;
        
        var wait = []
        if (localStorage.getItem("w") == "" ||localStorage.getItem("w") == null){
            localStorage.setItem("w","")
        } else {
            wait = localStorage.getItem("w").split(",")
        }
        document.getElementById("wait").value = wait;

        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
              if (document.getElementById("input").value=="PKP-admin"){
                document.getElementById("display").readOnly = false;
                document.getElementById("wait").readOnly = false;
                document.getElementById("admin-1").style.display = "block";
                document.getElementById("admin-2").style.display = "block";
                document.getElementById("admin-3").style.display = "block";
                document.getElementById("admin-4").style.display = "block";
                
              } else {
                if (people.includes(document.getElementById("input").value.split("-")[1])){
                  alert("Already scanned!")
                } else {
                    current = document.getElementById("input").value.split("-")[1]
                  people.push(current)
                  document.getElementById("display").value = people;
                  localStorage.setItem("p",people)
                    if(wait.includes(current)){
                        wait.splice(wait.indexOf(current),1)
                        document.getElementById("wait").value = wait;
                        localStorage.setItem("w",wait)
                    }
                }
              }
              document.getElementById("input").value = "";
            }
          });