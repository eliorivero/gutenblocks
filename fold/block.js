const { __ } = wp.i18n;
const {
	RichText
} = wp.editor;
const {
	Button
} = wp.components;
import uniqueId from 'lodash/uniqueId';

wp.blocks.registerBlockType( 'gutenblocks/fold', {
	title: __( 'Fold' ),
	icon: 'sort',
	category: 'layout',
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
	},
	edit: props => {
		const attributes = props.attributes;
		const onChangeTitle = value => {
			props.setAttributes( { title: value } );
		};
		const onChangeReveal = value => {
			props.setAttributes( { reveal: value } );
		};
		const addNewFold = e => {
			props.insertBlocksAfter( [ wp.blocks.createBlock( 'gutenblocks/fold' ) ] );
		};

		return (
			<div className={ props.className }>
				<RichText
					tagName="label"
					multiline={ false }
					placeholder={ __( 'Write visible text…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					/>
				{
					props.isSelected && (
						<div>
							<RichText
								tagName="div"
								multiline="p"
								className="gutenblocks-fold-reveal"
								placeholder={ __( 'And the text to reveal…' ) }
								value={ attributes.reveal }
								onChange={ onChangeReveal }
							/>
							<Button
								className="button"
								onClick={ addNewFold }
								>{ __( 'Add new' ) }</Button>
						</div>
					)
				}
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {
				title,
				reveal
			}
		} = props;
		const id = uniqueId( 'gutenblocks-fold-toggle-' );
		return (
			<div className={ className }>
				<input id={ id } type="checkbox" />
				<label htmlFor={ id }>
					{ title }
				</label>
				<div className="gutenblocks-fold-reveal">
					{ reveal }
				</div>
			</div>
		);
	}
} );
