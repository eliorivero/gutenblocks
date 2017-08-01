<?php

/**
 * Plugin Name: GutenBlocks
 * Plugin URI: https://github.com/eliorivero/gutenblocks
 * Description: Adds building blocks to Gutenberg editor.
 * Version: 0.0.7
 * Author: Elio Rivero
 * Author URI: https://elio.blog
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Domain Path: /languages
 * Text Domain: gutenblocks
 *
 * @package gutenblocks
 */

defined( 'ABSPATH' ) || exit;

define( 'GUTENBLOCKS_VERSION', '0.0.7' );
define( '__GUTENBLOCKS__', __FILE__ );

add_action( 'plugins_loaded', 'gutenblocks_localization' );

/**
 * Initialize localization routines
 *
 * @since 0.0.7
 * @access public
 */
function gutenblocks_localization() {
	load_plugin_textdomain( 'gutenblocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

include 'fold/index.php';
