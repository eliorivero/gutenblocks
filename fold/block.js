const { __ } = wp.i18n;
import FoldEdit from './edit';

wp.blocks.registerBlockType( 'gutenblocks/fold', {
	title: __( 'Fold' ),
	icon: 'sort',
	category: 'layout',
	keywords: [ __( 'faq' ), __( 'question' ), __( 'quiz' ) ],
	supports: { anchor: true },
	attributes: {
		title: {
			type: 'string',
			source: 'children',
			selector: 'label',
		},
		reveal: {
			type: 'array',
			source: 'children',
			selector: 'div.gutenblocks-fold-reveal',
		},
		id: {
			type: 'string',
		},
	},
	edit: FoldEdit,
	save: ( props ) => {
		const {
			attributes: {
				title,
				reveal,
				id,
			}
		} = props;
		
		return (
			<div>
				<input id={ id } type="checkbox" />
				<label htmlFor={ id }>{ title }</label>
				<div className="gutenblocks-fold-reveal">
					{ reveal }
				</div>
			</div>
		);
	}
} );
