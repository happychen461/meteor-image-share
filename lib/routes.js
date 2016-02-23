
/* This is the global layout contains all the tmeplates */
Router.configure({
  layoutTemplate:"ApplicationLayout"
});

/* Routes for '/'
  render the welcome template to the "main" part of global template */
Router.route('/', function(){
  this.render("welcome",{
    to:'main'
  });
});

/* Routes for '/images' */
Router.route('/images', function(){
  this.render("navbar",{
    to:'navbar'
  });
  this.render('images',{
    to:'main'
  });
});

/* Routes for '/image/id'*/
Router.route('/image/:_id', function(){
  this.render("navbar",{
    to:'navbar'
  });
  this.render('singleImage',{
    to:'main',
    /* the returned object will be passed into the 'singleImage' template */
    data: function(){
      console.log(imagesDb.findOne({_id:this.params._id}));
      return imagesDb.findOne({_id:this.params._id});
    }
  });
});
