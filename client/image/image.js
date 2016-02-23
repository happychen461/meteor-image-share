Template.image.helpers({

  /* here the helper is used to get the author of the image. Please notice
  the way to pass in the parameters in html */
  getAuthor:function(userId){
    var user = Meteor.users.findOne({_id:userId});
    //console.log(user);
    if(user){
      return(user.username)
    }else{
      return "anounmos"
    }
  }
});

Template.image.events({
  /* listener for remove the photo */
  "click .js-del-btn":function(){

    /* Looks like when you use the {{#each}}, it will assign this to the
     object of the item. here is the currect image */
    var image_id = this._id;
    //console.log(this);
    $("#"+image_id).hide('slow',function(){
      imagesDb.remove({_id:image_id});
    });
  },// js-del-btn

  /* listener for rating */
  "click .js-star-rate":function(event){
    var rating = $(event.currentTarget).data('userrating');
    //console.log(this);

    /* here this points the current template, the rating. but the rating
      does not have _id info, so in html, we use id to pass the _id and use
      it in the events */
    imagesDb.update({_id:this.id},
                  {
                    $set:{rating:rating}
                  });
  },

  "click .js-filter-img-by-user": function(event){
    Session.set("currUser",this.author);
    console.log(Session.get("currUser"));
  }
});
