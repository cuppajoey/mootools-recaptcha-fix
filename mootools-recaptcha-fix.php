<?php
/**
 * Mootools Recaptcha Error Workaround
 *
 * There is a javascript conflict caused by mootools.js (loaded by gantry)
 * which prevents recaptcha.js (loaded by Gravityforms) from loading properly.
 * This plugin loads a patch js file with a temporary workaround until Gantry
 * releases a fixed version
 *
 * Learn more about issue here:
 * @see              https://github.com/google/recaptcha/issues/374#issuecomment-626999594
 *
 * Plugin Name:       Mootools Recaptcha Error Workaround
 * Description:       Loads patch js file to fix mootools recaptcha conflict.
 * Version:           1.0.0
 * Author:            Joseph Schultz
 * Author URI:        http://cuppajoey.com
 */

  // If this file is called directly, abort.
  if ( ! defined( 'WPINC' ) ) {
    die;
  }

  function cj_load_patch_file() {
    wp_register_script( 'cjmtr-patch', plugin_dir_url( __FILE__ ) . 'js/cjmtr-patch.js', array('jquery'), '1.0', true );

    wp_enqueue_script( 'cjmtr-patch' );
  }
  add_action( 'wp_enqueue_scripts', 'cj_load_patch_file' );

?>
