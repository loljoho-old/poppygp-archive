<?php

/**
 * Start Date/Time Creation
 */
$date       = "2015-04-27";
$time       = "13:39:26";
$datestart  = date_create($date . 'T' . $time, timezone_open('America/New_York'));
$datetrack  = date_create($date . 'T' . $time, timezone_open('America/New_York'));
$datecheck  = date_create($date . 'T' . $time, timezone_open('America/New_York'));
$datenow    = date_create('now', timezone_open('America/New_York'));
//echo date_format($datenow, DATE_ISO8601) . '<br/><br/>';

/**
 * Common substrings to remove from strings.
 */ 
$removal = array(
    /*
        Weird Stuff
    */
    'adatbazis com', 'SuperS',

    /*
        General Stuff
    */
    'Formula1', 'Formula 1', 'F1',

    /*
        Video Codecs
     */
    'x264', 'h264', 'x265', 'h265', 'DivX', 'XviD', 
    'MPEG-4', 'MPEG-2', 'MPEG 4', 'MPEG 2',

    /*
        Video Quality
    */
    '1080i', '720p', 

    /*
        File Extensions
     */
    'mpeg4', 'mpeg2', 'mpeg', 'mp4', 'mp2', 'mpg', 'mkv', 
    'avi', 'vob', 'flv',
       
    /*
        Source
     */
    'VHSRip', 'VHS-Rip', 'VHS',
    'DVDRip', 'DVD-Rip', 'DVD',
    'WebRip', 'Web-Rip', 'Web',
    'HDTV', 'PDTV', '1080p', '720p', '1080i',
    'Rip', 'Live', 
        
    /*
        Broadcasters
     */
    'FujiTV', 'Fuji TV', 'Fuji',
    'BBC Sport', 'BBC', 'ITV Sport', 'ITV',
    'ESPNClassic', 'ESPN', 'Classic', 'Eurosport',
    'SkySportsF1HD', 'SkySportsF1', 'SkySportsHD', 
    'SkySports', 'Sky', 'Sports', 'SportHD', 'SporHD',
    'Canal+', 'Canal', 'ORM', 'CH9',
    'TSN', 'NBCSport', 'NBC', 'Setanta', 'RTL',
    'FOM', 'FOF', 'FIA', 
        
    /*
        Encoders
     */
    'DaRmEtH', 'opiates', 'Veetle', 'Nub', 
    'Master', 'Chief', 'joho', 'LEGENDS THE BEST', 'snk-1', 'snk',
    'i5vv', 'AFG', 'LOL', 'lightspeed',

    /*
         Miscellaneous
    */
    'Full', 'Session', 'English', '(', ')', 'German',
    'Hghlights', 'Highlights', 'Part', 'cd',
    'Round', 'Rnd'

);
