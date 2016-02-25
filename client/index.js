if (Meteor.isClient) {
  var stripeKey = 'pk_test_piC2edrOoqf3aMu9nsEteq4h';

  Meteor.startup(function () {
    smoothScroll.init();
  });

  Template.privacyButton.events({
    'click': function(e) {
      e.preventDefault();
      Modal.show('privacyModal');
    }
  });

  Template.stripe.events({
    'click .buy': function (event, template) {
      amount = template.data.price;
      name = template.data.name;
      description = template.data.desc;

      var handler = StripeCheckout.open({
        key: stripeKey,
        amount: amount,
        name: name,
        description: description,
        panelLabel: 'Sign Up for ',
        token: function(res) {
        }
      });
      e.preventDefault();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
