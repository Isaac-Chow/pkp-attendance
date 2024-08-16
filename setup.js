function saq(){
    localStorage.setItem("p",document.getElementById("display").value)
    localStorage.setItem("w",document.getElementById("wait").value)
    location.reload();
  }
  function qws(){
    location.reload();
  }
  function c(){
    document.getElementById("display").value = "";
  }
  function c2(){
    document.getElementById("wait").value = "";
  }