<!doctype html>
<html class="no-js" ng-app="abcnjapp">
	<head>
		<meta charset="utf-8">

		<meta http-equiv="X-UA-Compatible" content="IE=11; IE=10; IE=9; IE=8; IE=7; IE=EDGE">
		<meta name="description" content="ABC NJ">
		<meta name="viewport" content="width=device-width,initial-scale=1">

		<title>ABC NJ</title>
		<link href="assets/css/bootstrap-theme.min.css" rel="stylesheet" />
		<!-- <link href="assets/css/bootstrap-theme.min.css.map" rel="stylesheet" /> -->
		<link href="assets/css/bootstrap.min.css" rel="stylesheet" />
		<!-- <link href="assets/css/bootstrap.min.css.map" rel="stylesheet" />-->
	</head>

	<body>
		<div id="topDiv">
			<header id="header" role="banner"></header>

			<div class="loading-spinner"></div>
			<div class="container">
				<main class="main" role="main">
					<div ng-view onload="onViewLoad()"></div>
				</main>
			</div>
		</div>
		<script src="assets/js/vendor/jquery.min.js"></script>
		<!-- <script src="assets/js/vendor/script.min.js"></script> -->
		<script src="assets/js/vendor/angular.min.js"></script>
		<script src="assets/js/vendor/bootstrap.min.js"></script>
		<script src="assets/js/vendor/angular-route.min.js"></script>
		<script src="assets/js/app.js"></script>
		<script src="assets/js/public/controllers/homeController.js"></script>
		<script src="assets/js/public/services/HomeService.js"></script>
	</body>

</html>