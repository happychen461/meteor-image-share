

/* for infinite image loading, init value is 8 */
Session.set("imgLimit",8);

Template.images.helpers(
  /* Define var imgs used in views */
  {
    imgs:function(){
        var filter_user_id = Session.get("currUser");
        if(filter_user_id){
          return imagesDb.find({author:filter_user_id},
            {sort:{createdAt:-1,rating:-1},limit:Session.get("imgLimit")});
        }else{
          return imagesDb.find({},{sort:{createdAt:-1,rating:-1},
            limit:Session.get("imgLimit")});
        }
    },

    /* functionality of remove the filter */
    img_is_filered: function(){
      if(Session.get("currUser")){
        return true;
      }else{
        return false;
      }

    }
  }
);

Template.images.events({
  "click .js-rm-filter":function(event){
    Session.set("currUser",undefined);
  },
});

/*-----------------------------------------------------------------------------
                Infinit Scroll
-----------------------------------------------------------------------------*/
lastScroll = 0;
$(window).scroll(function(event){
  var currScroll = $(window).scrollTop();
  /* check if the scrollbar is moving up or down by
    comparing the current position and last position*/
  if(currScroll > lastScroll)
  {
    /* window.scrollTop: the vertical position of the scrollbar
       window.height: the browser's height
       document.height: the page's height
       normally window.scrollTop + window.height() == document.height()*/
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100){
      console.log("reach buttom");
      /* every time increase the limit 4 */
      Session.set("imgLimit", Session.get("imgLimit")+4);
    }
  }
  /* remember the last scroll position*/
  lastScroll = currScroll;
});
