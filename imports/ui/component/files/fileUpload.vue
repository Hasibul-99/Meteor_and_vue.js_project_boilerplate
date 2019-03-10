<template>
     <div class="m-t-sm">
      <div class="row">
        <div class="col-md-12">
          <!-- <strong>{this.props.fileName}</strong> -->
          <div class="m-b-sm">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <button onClick="renameFile" class="btn btn-outline btn-primary btn-sm">
            Rename
          </button>
        </div>

        <div class="col-md-3">
          <a href="" class="btn btn-outline btn-primary btn-sm"
             target="_blank">View</a>
        </div>

        <div class="col-md-2">
          <button onClick="removeFile" class="btn btn-outline btn-danger btn-sm">
            Delete
          </button>
        </div>

        <div class="col-md-4">
          <!-- Size: {this.props.fileSize} -->
        </div>
      </div>
    </div>
</template>

<script>
import AppMenu from '/imports/ui/component/appMenu.vue';
export default {
  components: {
   "app-menu": AppMenu
  },
   methods: {
        removeFile: function(){

            let conf = confirm('Are you sure you want to delete the file?') || false;
                if (conf == true) {
                    Meteor.call('RemoveFile', this.props.fileId, function (err, res) {
                        if (err)
                        console.log(err);
                    })
            }
        },
        renameFile: function() {

        }
    },
}
</script>
