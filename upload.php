    <?php
        header('Access-Control-Allow-Origin: *');

        $dir = __DIR__.'/uploads/'.$_FILES['file']['name'];

        if (move_uploaded_file($_FILES['file']['tmp_name'], $dir)){
            http_response_code(200);
        } else http_response_code(403);
    ?>