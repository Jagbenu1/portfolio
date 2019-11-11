<?php include(__DIR__.'/processing/variables.php'); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <!-- <link rel="stylesheet" href="http://jacquesagbenu.com/css/My_site_home.css"> -->
        <link rel="stylesheet" href="/css/My_site_projects.css">
    </head>
    <body>

    <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-dark bg-dark navbar-expand-lg  col-12">
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

        <h1>Projects</h1>
        <div class="container">
            <div class="row justify-content-center">  
                <div class="col-sm-3">
                    <div class="card">
                        <img class="card-img-top" src="/images/shopping-list.png" alt="Shopping_list">
                        <div class="card-body">
                            <p class="card-text">Shopping-list</p>
                                    <a href="./projects/shopping_list/shopping_list.html" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Online"
                                            animation="true"><i class="fas fa-external-link-alt"></i>
                                    </a> 
            
                                    <a href="https://github.com/Jagbenu1/Shopping-List" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Source"
                                            animation="true"><i class="fab fa-github"></i>
                                            
                                    </a> 
                        </div><!-- card-body -->  
                    </div><!-- card -->
                </div> 

                <div class="col-sm-3">    
                    <div class="card">
                        <img class="card-img-top" src="/images/pig-game.png" alt="Pig_Game">
                        <div class="card-body">
                            <p class="card-text">Pig-Game</p>
                                    <a href="/projects/pig-game/index.html" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Online"
                                            animation="true"><i class="fas fa-external-link-alt"></i>
                                    </a> 
                                    
                                    <a href="https://github.com/Jagbenu1/Pig-Game" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Source"
                                            animation="true"><i class="fab fa-github"></i>
                                    </a> 
                        </div><!-- card-body -->
                    </div><!-- card -->
                </div>

                <div class="col-sm-3">
                    <div class="card">
                        <img class="card-img-top" src="/images/budgety.png" alt="Budgety">
                        <div class="card-body">
                            <p class="card-text">Budgety</p>
                                    <a href="./projects/budgety/index.html" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Online"
                                            animation="true"><i class="fas fa-external-link-alt"></i>
                                    </a> 
                                
                                    <a href="https://github.com/Jagbenu1/Budgety" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Source"
                                            animation="true"><i class="fab fa-github"></i>
                                    </a> 
                        </div><!-- card-body -->
                    </div><!-- card -->
                </div> 

                <div class="col-sm-3">    
                    <div class="card">
                        <img class="card-img-top" src="/images/forkify.png" alt="Forkify">
                        <div class="card-body">
                            <p class="card-text">Forkify</p>
                                    <a href="https://adoring-ardinghelli-6603f4.netlify.com/" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Online"
                                            animation="true"><i class="fas fa-external-link-alt"></i>
                                    </a> 
                                
                                    <a href="https://github.com/Jagbenu1/forkify" target="_blank" class="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="left" title="View Source"
                                            animation="true"><i class="fab fa-github"></i>
                                    </a>    
                        </div><!-- card-body -->
                    </div><!-- card -->                       
                </div>  
            </div>
        </div>

        <script src="https://kit.fontawesome.com/41d00c9ca2.js" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
</html>