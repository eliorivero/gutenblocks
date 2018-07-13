<?php
defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenblocks_editor_assets_fold' );
add_action( 'enqueue_block_assets', 'gutenblocks_frontend_assets_fold' );

function gutenblocks_editor_assets_fold() {
	wp_enqueue_style(
		"gutenblocks-fold-editor",
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);

	wp_enqueue_script(
		"gutenblocks-fold",
		plugins_url( "/build/fold.build.js", __GUTENBLOCKS__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' )
	);
}

function gutenblocks_frontend_assets_fold() {
	if ( ! is_admin() ) {
		wp_enqueue_style(
			'gutenblocks-fold',
			plugins_url( 'style.css', __FILE__ ),
			array( 'wp-blocks' )
		);
	}
}
