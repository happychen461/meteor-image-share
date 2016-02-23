Meteor.startup(function(){
  console.log(" server start up ");
  /* Define a image data */
  /*
  for(var i=1; i<=7; i++){
    if(0 == imagesDb.find({image_src:"/images/image_"+i+".JPG"}).count()){
      imagesDb.insert(
        {image_src:"/images/image_"+i+".JPG",
         image_alt:"image"+i
      });
      console.log("store "+i+" picutre")
    }
  }*/
});
