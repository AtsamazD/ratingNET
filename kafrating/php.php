<?php

$handle = @fopen("kaflist" . $_REQUEST['year'] . ".txt", "r");

if ($handle) {
    
while (($buffer = fgets($handle, 4096)) !== false) {

        echo "<li>" . $buffer . "</li>";
   
 }
 
   if (!feof($handle)) {
      
  echo "Error: unexpected fgets() fail\n";
    
}
    
fclose($handle);
}
?>