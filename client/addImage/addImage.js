/* enable debug mode for autoform */
AutoForm.debug()

/* call back hooks for autoform */
var addImageCallBack = {
  after: {
    insert: function(error, result) {
      console.log($("#addImageModal"));
      $("#addImageModal").modal('toggle');
    }
  },
}
AutoForm.addHooks('insertImageForm', addImageCallBack);
