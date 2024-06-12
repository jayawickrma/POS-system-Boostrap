/* navigation */

$('#customerPage').css('display', 'none');
$('#homePage').css('display', 'none');
$('#itemPage').css('display', 'none');
$('#orderPage').css('display', 'none');
$('#viewOrderDetailsPage').css('display', 'none');

$('#nav-home').on("click", () =>{
    $('#homePage').css('display', 'block');
    $('#customerPage').css('display', 'none');
    $('#itemPage').css('display', 'none');
    $('#orderPage').css('display', 'none');
    $('#viewOrderDetailsPage').css('display', 'none');
});
$('#nav-customer').on("click", () =>{
    $('#homePage').css('display', 'none');
    $('#customerPage').css('display', 'block');

    $('#itemPage').css('display', 'none');
    $('#orderPage').css('display', 'none');
    $('#viewOrderDetailsPage').css('display', 'none');
    console.log("AAA")
});
$('#nav-inventory').on("click", () =>{
    $('#itemPage').css('display', 'block');
    $('#customerPage').css('display', 'none');
    $('#homePage').css('display', 'none');
    $('#orderPage').css('display', 'none');
    $('#viewOrderDetailsPage').css('display', 'none');
});
$('#navbar-nav>a').eq(3).on("click", () =>{
    event.preventDefault();
    $('#orderPage').css('display', 'block');
    $('#itemPage').css('display', 'none');
    $('#customerPage').css('display', 'none');
    $('#homePage').css('display', 'none');
    $('#viewOrderDetailsPage').css('display', 'none');
});
$('#navbar-nav>a').eq(4).on("click", () =>{
    event.preventDefault();
    $('#viewOrderDetailsPage').css('display', 'block');
    $('#orderPage').css('display', 'none');
    $('#itemPage').css('display', 'none');
    $('#customerPage').css('display', 'none');
    $('#homePage').css('display', 'none');
});
