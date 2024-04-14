window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("button").style.display = "block";
    }
    else {
        document.getElementById("button").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleNav() {
    document.getElementById("mySidebar").style.width = 
    document.getElementById("mySidebar").style.width === "250px" ? "0" : "250px";
    
}
function backNav() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    }
  }

  