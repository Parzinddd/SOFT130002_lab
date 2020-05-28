<?php
$year=date("L");
if($year==1){
    $remaining = 366 - date("z");
}
else {
    $remaining = 365 - date("z");
}
echo "There are ". $remaining . " days left in the year";
?>