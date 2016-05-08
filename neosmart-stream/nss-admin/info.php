<?php
	if(empty($delay)) $delay=5000;
?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<title>Processing data ...</title>
	<link href='../nss-includes/reset.css' type='text/css' rel='stylesheet' />
	<link href='style.css' type='text/css' rel='stylesheet' />
</head>
<body>
	<div class="info icon-loading">Processing data ... (Reload in <?php echo $delay; ?> ms)</div>
	<script type="text/javascript">
		setTimeout(function(){window.location.reload()},<?php echo $delay; ?>);
	</script>
</body>
</html>