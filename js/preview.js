(function($) {

    $(function() {

        $('input[name="file-test"]').on('change', function() {
            
            var files = this.files;
            if (files.length <= 0) return;
            previewFile(files[0]);

        });

    });

    function previewFile (file) {

        var fileReader = new FileReader();
        fileReader.onload = function (e) {

            var elementToAppend;

            if (isImageMimeType(file.type)) {
                elementToAppend = document.createElement('img');
                elementToAppend.src = e.target.result;
            } else {
                elementToAppend = document.createElement('embed');
                elementToAppend.type = file.type;
                elementToAppend.width = "100%";
                elementToAppend.height = "100%";
                elementToAppend.src = e.target.result;
            }

            $('.preview').html(elementToAppend);

        };
        fileReader.readAsDataURL(file);

    }

    function isImageMimeType (type) {
        var r = /^image\/(jpeg|gif|png)$/;
        return r.test(type);
    }

})(jQuery)