<?php include(__DIR__.'/processing/variables.php'); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <!-- <link rel="stylesheet" href="http://www.jacquesagbenu.com/css/My_site_contact.css"> -->
        <link rel="stylesheet" href="/css/My_site_contact.css">
        <title>Contact Me</title>
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
                                <a class="nav-item nav-link content" href="<?php echo $projects; ?>">
                                Projects</a>
                                <a class="nav-item nav-link active content" href="<?php echo $contact; ?>" >
                                Contact me</a>
                            </div><!-- navbar-nav -->
                        </div><!-- collapse -->
                    </div><!-- container -->
                </nav><!-- nav -->
            </div><!-- row -->
        </div><!-- container-fluid -->

        <div class="container ">
            <div class="row h-100">
                <div class="col-sm-12 my-auto">
                    <h1 class="text-center">Hi there, send me a hello!!!</h1>
                    <h3 class="text-center">678-343-1252</h3>
                        <a href="https://github.com/Jagbenu1" style="text-align: center; display: block; margin: 0 auto;" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/jacques-agbenu" style="text-align: center; display: block; margin: 0 auto;" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>


        <form class="contact-form" action="/processing/contact.php" method="post" id="myform">
              <div class="container d-sm-block">
                  <div class="row">
                      <div class="col-sm-12 my-auto">
                    <div class="form-group box" style="text-align: center;">
                      <input class="form-control" type="text" name="name" placeholder="Full name"/><br />
                        <?php if(isset($_GET["mailsend"])){
                              if($_GET["mailsend"]=="no_name"){
                                echo "<p>May I know your name?</p>";
                            }
                        }
                        ?>
                      <input class="form-control" type="email" name="mail" placeholder="Your e-mail"/><br />
                        <?php if(isset($_GET["mailsend"])){
                              if($_GET["mailsend"]=="email_invalid"){
                                echo "<p>That isn't a valid email.</p>";
                            }
                        }
                        ?>
                      <input class="form-control" type="text" name="subject" placeholder="Subject"/><br />
                        <?php if(isset($_GET["mailsend"])){
                              if($_GET["mailsend"]=="subject_empty"){
                                echo "<p>What is the subject of your email?</p>";
                            }
                        }
                        ?>
                      <textarea name="message" placeholder="Message" class="form-control"></textarea><br />
                        <?php if(isset($_GET["mailsend"])){
                              if($_GET["mailsend"]=="message_short"){
                                echo "<p>That message is a bit too short.</p>";
                            }
                        }
                        ?>
                      <button class="btn btn-primary" type="submit" name="submit">SEND Mail</button>
                        <?php if(isset($_GET["mailsend"])){
                              if($_GET["mailsend"]=="not_finished"){
                                echo "<p>Please finish the form.</p>";
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
          </div>
        </form>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.js" integrity="sha256-xLhce0FUawd11QSwrvXSwST0oHhOolNoH9cUXAcsIAg=" crossorigin="anonymous"></script>
            <script src="/js/contact.js" type="text/javascript"></script>
    </body>
</html>
