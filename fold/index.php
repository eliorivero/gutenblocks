<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenblocks_editor_assets_fold' );
add_action( 'enqueue_block_assets', 'gutenblocks_frontend_assets_fold' );

function gutenblocks_editor_assets_fold() {
	$block = 'fold';

	wp_enqueue_style(
		"gutenblocks-$block-editor",
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_enqueue_script(
		"gutenblocks-$block",
		plugins_url( "/build/$block.build.js", __GUTENBLOCKS__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( plugin_dir_path( __GUTENBLOCKS__ ) . "/build/$block.build.js" )
	);
}

function gutenblocks_frontend_assets_fold() {
	if ( ! is_admin() ) {
		wp_enqueue_style(
			'gutenblocks-fold',
			plugins_url( 'style.css', __FILE__ ),
			array( 'wp-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
		);
	}
}
