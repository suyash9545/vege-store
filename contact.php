
<?php require_once("Includes/DB.php"); ?>
<?php
if(isset($_POST["submit"])){
$Name  = $_POST["name"];
$Email  = $_POST["email"];
$Age  = $_POST["age"];
$Number  = $_POST["number"];
$Message  =$_POST["message"];	
global $ConnectingDB;
$sql = "INSERT INTO store(name,email,age,number,message)";
$sql .= "VALUES(:nName,:nEmail,:nAge,:nNumber,:nMessage)";
$stmt = $ConnectingDB->prepare($sql);
$stmt->bindValue(':nName',$Name);
$stmt->bindValue(':nEmail',$Email);
$stmt->bindValue(':nAge',$Age);
$stmt->bindValue(':nNumber',$Number);
$stmt->bindValue(':nMessage',$Message);
$Execute=$stmt->execute();

if($Execute){
		echo "<h4>Your feedback is added successfully</h4>";
	}else{
		echo "something went wrong try agian";
	}
}


?>
  
<!DOCTYPE html>
<html>
<head>
	<title >vege-store</title>

	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>


	<nav class="navbar">
		<div class="name"><a href="index.html" style="color: red;
    font-family: algerian">Vege-Store</a></div>

		<ul>
		
			<li><a href="index.html">Home</a></li>
			<li><a href="#">Shop</a>

			 <ul>
				
				  <li><a href="index.html">Vegetable</a></li>
				  <li><a href="pulses.html">Pulse</a></li>
			  </ul></li>
			 
			<li><a href="about.html">About-Us </a></li>
			<li><a href="contact.php">Contact</a></li>
			<li><a href="cart.html">Cart</a></li>
		</ul>
		
	</nav>

	<div style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)) ,url(images/bg_1.jpg);width: 100%;
	height: 90vh; background-size: 100%;background-repeat: no-repeat;">


<h2 style="position: absolute; top: 50%;left: 50%;transform: translate(-50%,-50%);font-size: 7vw;background-size: 100%;text-align: center;margin: 0;padding: 0; ">Contact-Us</h2>
</div>




<form class="form" action="contact.php" method="POST" style="margin-bottom: 50px;">

<h1 style="color: black; font-size: 60px; padding-bottom: 20px;"> Contact form</h1>
<div>
	 Name <input name="name" type="text" placeholder="Name">
	</div>

	<div >
	 Email <input name="email" type="text" placeholder="Email">
		</div>
	<div >
	 Age <input name="age" type="number" placeholder="Age">
		</div>
		
	<div >
		 Number <input name="number"  type="number" placeholder="Number">
		</div>	
		<p style="color: black; font-size: 20px; padding-top: 10px;">Your Message</p>
		<div>	
		<textarea name="message" style="padding: 90px; color: black;" placeholder="Enter text here..."></textarea>
			</div>

			<input class="butt" name="submit" type="submit" > SUBMIT</input>
</form>









<footer>

	

	
	<p>Designed & Maintained By <b style=" color: #000;">ATHARVA  &nbsp; S.&nbsp; FARKADE</b></p>
</footer>


</body>
</html>