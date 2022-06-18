<?php

session_start();


$con = mysqli_connect('localhost' , 'root' , '1234');
mysqli_select_db($con,'userregistration');
$name  = $_POST['user'];
$pass = $_POST['password'];


$s = " select * from usertable where name = '$name' && password = '$pass' " ;
$result = mysqli_query($con , $s);

$num = mysqli_num_rows($result);

if($num == 1){
    $_SESSION['username'] = $name;
    echo" Login successfull ";
    
    header('location:welcome.php');
} else{
    
    echo" Incorrect passward or email !!!!";
    echo" Incorrect passward or email !!!!";
    echo" Incorrect passward or email !!!!";
    header('location:login.html');
}

 