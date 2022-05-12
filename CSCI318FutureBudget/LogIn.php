<!DOCTYPE html>
	<head>
		<meta charset="UTF-8"/>
		<title>Login</title>
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/main.css" />
	</head>
	<body>
		<header id="header">
		    <div class="inner clearfix">
		        <a href="#" class="logo pull-left" shape="rect"><img src="img/logo.png" alt=""></a>
		        <div class="panel-navbar pull-right">
		            <a href="index.html" style="border-left:none;" shape="rect">Home</a>
		            <a href="#" target="_blank" shape="rect">customer service：Group 4</a>
		        </div>
		    </div>
		</header>
		<br />
		<div class="container">
			<div class="banner-slider rel">
				<div class="inner-rel">
					<div class="form-box">
						<br />
						<h1 class="clearfix">Log in</h1>
						<br />
						<span class="span-title">Login with account</span>
						<br /><br />
						<div class="form-bd">
			                    <div class="form-group">
									<form id="login-form">
										<div class="control-col rel">
											<input type="email" class="form-control" placeholder="Please input your email address" id="email" name="email" required>
										</div>
			                    </div>
			                    <div class="form-group">
			                        <div class="control-col rel">
			                            <input type="password" class="form-control" id="password" name="password" placeholder="Please enter password" required>
			                        </div>
			                    </div>
			                    <div class="form-group">
			                        <div class="control-col">
			                            <button class="btn btn-primary btn-lg btn-login" type="submit" href="index.html" name="bnt">Login&nbsp;&nbsp;&nbsp;in</button>
									</form>
			                            <div class="rows-forget">
			                            	<span class="pull-left">Don't have an account?<a href="register.html" class="register-href" shape="rect">Sign up now</a></span>
			                            </div>
			                        </div>
			                    </div>
			            </div>
					</div>
				</div>
			</div>
		</div>
		<br />
		
		
		<script type="text/javascript" src="js/jquery.js" ></script>
		<script type="text/javascript" src="js/jquery.validate.min.js" ></script>
		<script type="text/javascript" src="js/messages_zh.js" ></script>
		<script src = "../AuthConfigLogin.js" type="module" ></script>
	</body>
</html>	