$(function() {
    
    // Smooth scrolling after link click
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    
})

// function that toggles the hamburger menu to open and close
function toggleClass() {
    let menu = document.querySelector(".mainMenu");
    menu.classList.toggle('toggleCls');
}
