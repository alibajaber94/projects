<?php
/**
 * Created by PhpStorm.
 * User: yousef
 * Date: 2/10/2017
 * Time: 11:01 PM
 */
$data = file_get_contents('db.json');

$json = json_decode($data);
$search_key=$_GET['index'];
foreach($json->quran as $item)
{
    if($item->index == $search_key)
    {
        print_r($item);
    }
}