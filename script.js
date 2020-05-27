$(document).ready(function() {
	$('.header_burger').click(function() {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})

var checkbox = document.getElementById("chbx");

    function checkbox_changed() {
        if (checkbox.checked == true) {
          var root = document.documentElement;

    document.body.style.backgroundColor = "#0C0C0C";
    document.body.style.color = "white";
    document.getElementById('cite_id').style.color = "white";
    document.getElementById('cite_id').style.backgroundColor = "#0C0C0C";
   
        } 
        else {
            
            var root = document.documentElement;
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

        }
    }