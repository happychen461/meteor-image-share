
/* Donnot put Var before imagesDb, otherwise it becomes local var */
imagesDb = new Mongo.Collection("images");

imagesDb.allow({
  /* only allow the user to insert a image, userId is the user id, the doc
  is the image oject that need to be submitted to db */
  insert:function(userId,doc){
    if(Meteor.user()){// the user is login
      if(doc.author == userId){//the correct person
        return true;
      }
    }
    return false;
  },
  remove:function(userId,doc){
    if(Meteor.user()){// the user is login
      if(doc.author == userId){//the correct person
        return true;
      }
    }
    return false;
  },
  update:function(){
    return true;
  }
});

/* This simple schema is for supporting autoform. The only thing need
need to do is create this simple schema and attach it with the collection(db).
If we dont want to have all the fields in the form, we can create a partial
schema and attach to a filed of collection. */
imagesSchema = new SimpleSchema({
      image_src: {
        type: String,
        label: "image source"
      },
      image_alt: {
        type: String,
        label: "image description"
      },
      rating: {
        type: Number,
        label:"rating",
        optional: true,
        autoform: {
          type: "hidden"
        }
      },
      createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
          return new Date();
        },
        autoform: {
          type: "hidden"
        }
      },
      author:{
        type:String,
        label:"Author",
        autoValue: function(){
          if(Meteor.user())
          {
            console.log(Meteor.user()._id);
            return Meteor.user()._id;
          }
        },
        autoform:{
          type:"hidden"
        }
      },
});

imagesDb.attachSchema(imagesSchema);
