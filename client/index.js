Template.privacyButton.events({
  'click': function(e) {
    e.preventDefault();
    Modal.show('privacyModal');
  }
});

var handler = StripeCheckout.configure({
  key: 'pk_test_piC2edrOoqf3aMu9nsEteq4h',
  image: '//img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    // Use the token to create the charge with a server-side script.
    // You can access the token ID with `token.id`
  }
});

$('#customButton').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    currency: "cad",
    amount: 2000
  });
  e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
  handler.close();
});