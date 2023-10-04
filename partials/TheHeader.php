<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <?php
    
    if (isset($title)) {
        echo "<title>$title</title>";
    } else {
        echo "<title>SATUK</title>";
    }
    ?>
    <link rel="stylesheet" href="../public/styles/output.css">
    <link rel="stylesheet" href="../public/styles/main.css">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
</head>