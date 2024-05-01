$('#customer-section').css({display:'block'});
$('#item-section').css({display: 'none'});
$('#order-section').css({display:'none'});

/* customer click */
$('#nav-customer').on('click', ()=>{
   $('#customer-section').css({display:'block'});
   $('#item-section').css({display:'none'});
   $('#order-section').css({display:'none'});
});

/* item click */
$('#nav-item').on('click', ()=>{
   $('#item-section').css({display:'block'});
   $('#customer-section').css({display:'none'});
   $('#order-section').css({display:'none'});
});

/* order click */
$('#nav-order').on('click', ()=>{
   $('#order-section').css({display:'block'});
   $('#customer-section').css({display:'none'});
   $('#item-section').css({display:'none'});
});