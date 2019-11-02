<?php include(__DIR__.'/processing/variables.php'); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <!-- <link rel="stylesheet" href="http://jacquesagbenu.com/css/My_site_home.css"> -->
        <link rel="stylesheet" href="/css/My_site_projects.css">
    </head>
    <body>

    <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top col-12">
                    <div class="d-flex container-fluid">
                    <div class="name-bar">
                        <a href="<?php echo $index; ?>" id="tag"> Jacques Agbenu </a>
                    </div>
                        <button class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#myTogglerNav"
                            aria-controls="myTogglerNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                        </button>
                            
                        <div class="collapse navbar-collapse" id="myTogglerNav">
                            <div class="navbar-nav ml-auto">
                                <a class="nav-item nav-link content" href="<?php echo $index; ?>" >
                                Home</a>
                                <a class="nav-item nav-link content" href="<?php echo $about; ?>">
                                About</a>
                                <a class="nav-item nav-link active content" href="<?php echo $projects; ?>">
                                Projects</a>
                                <a class="nav-item nav-link content" href="<?php echo $contact; ?>" >
                                Contact me</a>
                            </div><!-- navbar-nav -->
                        </div><!-- collapse -->
                    </div><!-- container -->
                </nav><!-- nav -->
            </div><!-- row -->
        </div><!-- container-fluid -->


    



        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    </body>
</html>