<?php 
	// Include neosmart STREAM
	include "../../../setup.php";
?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<title>Preview</title>
	<?php 		
		// CSS
		$nss->includeFile('reset.css');			
		$nss->streamCSS('base');
	?>
</head>
<body>
	<div class="nss-preview">
		<?php
			// Show stream
			$nss->show();
		?>
	</div>
	<?php
		//JS
		$nss->includeFile('jquery.js');
		$nss->includeFile('jquery-migrate-dev.js');
		$nss->includeFile('jquery-masonry.js');
		$nss->streamJS();
	?>
</body>
</html>