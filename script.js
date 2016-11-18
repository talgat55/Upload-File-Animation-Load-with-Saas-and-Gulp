    document.querySelector('input[name="file"]').addEventListener('change', function(e) {

        var file = this.files[0];
        var filename = file.name;
        var file_id = Math.random().toString().substr(2,6);
        var file_ext = file.name.split('.')[file.name.split('.').length-1];

        var fd = new FormData();
        fd.append("file", file);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'upload.php', true);

        var li = '<li class="item" id="file-'+file_id+'"> \
        <div>\
            <div class="icon">\
                <span class="file-icon">\
                    <svg width="30px" height="37px" viewBox="0 0 30 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                            <g id="Artboard-1" transform="translate(-180.000000, -149.000000)">\
                                <g id="Form" transform="translate(155.000000, 130.000000)">\
                                    <g id="item" transform="translate(0.000000, 5.000000)">\
                                        <g id="Group-3" transform="translate(25.000000, 14.000000)">\
                                            <g id="file-icon">\
                                                <path d="M30,9.624 L30,33.684 C30,35.2788571 28.6102041,36.5714286 26.8965306,36.5714286 L3.10346939,36.5714286 C1.38918367,36.5714286 0,35.2788571 0,33.684 L0,2.88742857 C0,1.29257143 1.38918367,0 3.10346939,0 L19.654898,0 L30,9.624 L30,9.624 Z" id="Shape" fill="#65C1FF"></path>\
                                                <path d="M30,9.08514286 L30,10.2828571 L21.5430612,10.2828571 C19.7920408,10.2828571 18.9844898,8.95714286 18.9844898,7.32228571 L18.9844898,0 L20.2653061,0 L30,9.08514286 L30,9.08514286 Z" id="Shape" fill="#9CD7FF"></path>\
                                            </g>\
                                        </g>\
                                    </g>\
                                </g>\
                            </g>\
                        </g>\
                    </svg>\
                        <span class="ext">\
                            .'+file_ext+'\
                        </span>\
                </span>\
            </div>\
            <div class="filename">\
                <span>\
                    '+filename+'\
                </span>\
            </div>\
            <div class="btns">\
                <ul class="progress">\
                    <li>\
                        <div>\
                            <div style="width: 0%"></div>\
                        </div>\
                        <li>\
                        <span class="cancel">\
                            <?xml version="1.0" encoding="UTF-8" standalone="no"?>\
                            <svg width="14px" height="15px" viewBox="0 0 14 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                    <g id="Artboard-1" transform="translate(-501.000000, -233.000000)" fill="#F88383">\
                                        <g id="Form" transform="translate(155.000000, 130.000000)">\
                                            <g id="item" transform="translate(0.000000, 76.000000)">\
                                                <g id="Group-4" transform="translate(346.000000, 27.000000)">\
                                                   <path d="M7,5.37867966 L2.75998264,1.13866229 C2.16478754,0.543467197 1.22182541,0.550252532 0.636038969,1.13603897 C0.0461685363,1.7259094 0.0514270344,2.67274738 0.638662295,3.25998264 L4.87867966,7.5 L0.638662295,11.7400174 C0.0434671973,12.3352125 0.0502525317,13.2781746 0.636038969,13.863961 C1.2259094,14.4538315 2.17274738,14.448573 2.75998264,13.8613377 L7,9.62132034 L11.2400174,13.8613377 C11.8352125,14.4565328 12.7781746,14.4497475 13.363961,13.863961 C13.9538315,13.2740906 13.948573,12.3272526 13.3613377,11.7400174 L9.12132034,7.5 L13.3613377,3.25998264 C13.9565328,2.66478754 13.9497475,1.72182541 13.363961,1.13603897 C12.7740906,0.546168536 11.8272526,0.551427034 11.2400174,1.13866229 L7,5.37867966 Z" id="Combined-Shape"></path>\
                                                </g>\
                                            </g>\
                                        </g>\
                                    </g>\
                                </g>\
                            </svg>\
                        </span>\
                        </li>\
                    </li>\
                </ul>\
            </div>\
        </div>\
        </li>';
        $('.form-upload-list').append(li);

        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
              var percentComplete = (e.loaded / e.total) * 100;
              $('#file-'+file_id+' ul.progress > li:first-child > div > div').css('width',percentComplete+'%');
              if (percentComplete==100) $('#file-'+file_id+' .btns').html('<span onclick="remove_file('+file_id+')" class="button remove"><svg width="16px" height="19px" viewBox="0 0 16 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard-1" transform="translate(-501.000000, -160.000000)" fill="#B2B2B2"><g id="Form" transform="translate(155.000000, 130.000000)"><g id="item" transform="translate(0.000000, 5.000000)"><path d="M361.047527,28.809388 L358.571291,28.809388 L358.571291,26.5237217 C358.571291,25.6819011 357.889432,25 357.047527,25 L350.952347,25 C350.110484,25 349.428541,25.681943 349.428541,26.5237217 L349.428541,28.80943 L346.952347,28.80943 C346.426718,28.80943 346,29.2361475 346,29.7618608 C346,30.2874903 346.426718,30.7142078 346.952347,30.7142078 L347.523806,30.7142078 L347.523806,41.7618189 C347.523806,42.6036814 348.205665,43.2855406 349.047569,43.2855406 L358.952347,43.2855406 C359.79421,43.2855406 360.476111,42.6036814 360.476111,41.7618189 L360.476111,30.7142078 L361.047569,30.7142078 C361.573157,30.7142078 362,30.2874903 362,29.7618608 C361.999958,29.2361056 361.573115,28.809388 361.047527,28.809388 L361.047527,28.809388 Z M356.666597,28.809388 L351.333235,28.809388 L351.333235,27.7429087 C351.333235,27.2782029 351.706786,26.904694 352.17145,26.904694 L355.828382,26.904694 C356.29313,26.904694 356.666555,27.2782448 356.666555,27.7429087 L356.666555,28.809388 L356.666597,28.809388 Z M351.333235,31.4760687 L351.333235,40.6188599 C351.333235,41.0378205 350.990209,41.3808046 350.571375,41.3808046 C350.15254,41.3808046 349.809514,41.0378205 349.809514,40.6188599 L349.809514,31.4760687 C349.809514,31.0572339 350.152498,30.7142078 350.571375,30.7142078 C350.990251,30.7142078 351.333235,31.0572339 351.333235,31.4760687 L351.333235,31.4760687 Z M354.761903,31.4760687 L354.761903,40.6188599 C354.761903,41.0378205 354.418877,41.3808046 353.999958,41.3808046 C353.581081,41.3808046 353.238097,41.0378205 353.238097,40.6188599 L353.238097,31.4760687 C353.238097,31.0572339 353.581123,30.7142078 353.999958,30.7142078 C354.418877,30.7142078 354.761903,31.0572339 354.761903,31.4760687 L354.761903,31.4760687 Z M358.190318,31.4760687 L358.190318,40.6188599 C358.190318,41.0378205 357.847292,41.3808046 357.4285,41.3808046 C357.009623,41.3808046 356.666555,41.0378205 356.666555,40.6188599 L356.666555,31.4760687 C356.666555,31.0572339 357.009623,30.7142078 357.4285,30.7142078 C357.847334,30.7142078 358.190318,31.0572339 358.190318,31.4760687 L358.190318,31.4760687 Z" id="Shape"></path></g></g></g></g></svg></span>');
            }
        }

        xhr.upload.onerror = function() {
            $('#file-'+file_id).addClass('error');
            $('#file-'+file_id).find('.btns').remove();
            $('#file-'+file_id).find('.file-icon').html('<svg width="30px" height="30px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard-1" transform="translate(-181.000000, -367.000000)" fill="#F78383"><g id="Form" transform="translate(155.000000, 130.000000)"><g id="item" transform="translate(0.000000, 216.000000)"><path d="M40,49 C47.7319865,49 54,42.7319865 54,35 C54,27.2680135 47.7319865,21 40,21 C32.2680135,21 26,27.2680135 26,35 C26,42.7319865 32.2680135,49 40,49 Z M38.6875,42.875 L41.3125,42.875 L41.3125,40.25 L38.6875,40.25 L38.6875,42.875 Z M38.6875,26.25 L38.6875,37.625 L41.3125,37.625 L41.3125,26.25 L38.6875,26.25 Z" id="Combined-Shape"></path></g></g></g></g></svg>');
        }

        xhr.send(fd);

    }, false);

    function remove_file(id){
        $('#file-'+id).remove();
    }