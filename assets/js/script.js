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

});
$('#nav-inventory').on("click", () =>{
    $('#itemPage').css('display', 'block');
    $('#customerPage').css('display', 'none');
    $('#homePage').css('display', 'none');
    $('#orderPage').css('display', 'none');
    $('#viewOrderDetailsPage').css('display', 'none');
});
$('#nav-order').on("click", () =>{

    $('#orderPage').css('display', 'block');
    $('#itemPage').css('display', 'none');
    $('#customerPage').css('display', 'none');
    $('#homePage').css('display', 'none');
    $('#viewOrderDetailsPage').css('display', 'none');
});
$('#nav-orderDetail').on("click", () =>{

    $('#viewOrderDetailsPage').css('display', 'block');
    $('#orderPage').css('display', 'none');
    $('#itemPage').css('display', 'none');
    $('#customerPage').css('display', 'none');
    $('#homePage').css('display', 'none');
});
