/* Accounts package to define the signup fields*/
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.user.helpers({
  username:function(){
    if(Meteor.user()){
      return Meteor.user().username;
    }else{
      return "Please login first!";
    }
  }
});
