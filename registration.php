<?php

session_start();

$con = mysqli_connect('localhost' , 'root' , '1234');

mysqli_select_db($con,'userregistration');
$name  = $_POST['user'];
$pass = $_POST['password'];
$numb  = $_POST['number'];
$email  = $_POST['mail'];

$s = " select * from usertable where name = '$name'" ;
$result = mysqli_query($con , $s);

$num = mysqli_num_rows($result);

if($num == 1){
    echo" You Already have an account Try Login!!!";
} else{
    $reg= " insert into usertable(name , password , mail , number) values ( '$name' , '$pass' , '$email' , '$numb' ) ";
    mysqli_query($con , $reg); 
    echo" Ragistration Successfull";
    header('location:login.html');
}

?>