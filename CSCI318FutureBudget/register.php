<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Register</title>
		<link rel="icon" href="img/logo.ico" type="image/x-icon">
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/main.css" />
		<script type="text/javascript" src="js/jquery.js" ></script>
		<script type="text/javascript" src="js/jquery.validate.min.js" ></script>
		<script type="text/javascript" src="js/messages_zh.js" ></script>

	</head>
	
	<body>
		<header id="header">
		    <div class="inner clearfix">
		        <a href="#" class="logo pull-left" shape="rect"><img src="img/logo.png" alt=""></a>
		        <div class="panel-navbar pull-right">
		            <a href="index.html" style="border-left:none;"shape="rect">Home</a>
		            <a href="#" target="_blank" shape="rect">customer service：Group 4</a>
		        </div>
		    </div>
		</header>
		<br />
		<div class="container-register">
			<div class="form-box2">
				<br />
				<h1>Register</h1>
				<br />
					<div class="form-group clearfix">
						<form id="signup-form">
	                        <label class="col-xs-3 control-label" for="email">Email</label>
	                        <div class="col-xs-9 control-col">
	                            <input type="email" class="form-control" placeholder="Please input your email address" id="email" name="email" required>
	                        </div>
	                </div>
	                <div class="form-group clearfix">
	                        <label class="col-xs-3 control-label" for="password">Password</label>
	                        <div class="col-xs-9 control-col">
	                            <input type="password" class="form-control" placeholder="Enter your Passoword" id="password" name="password" maxlength="18">
	                        <div class="slogon" style="margin-top:5px;">6-16 letters, numbers or symbols, case sensitive</div>
	                        </div>
	                </div>
                    <div class="form-group">
                        <div class="control-col col-xs-12">
                            <button class="btn btn-primary btn-lg btn-register" type="submit" name="bnt" id="get-form">Register</button>
                        </div>
					</form>
                        <div class="control-col col-xs-12">
                            <a class="btn btn-default btn-lg btn-register" href="Login.php">Already have an account, log in now</a>
                        </div>
                    </div>
			</div>
		</div>
		<br />

		<script type="text/javascript" src="js/jquery.js" ></script>
		<script type="text/javascript" src="js/jquery.validate.min.js" ></script>
		<script src = "../AuthConfig.js" type="module" ></script>
		
	</body>
</html>