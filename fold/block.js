const { __ } = wp.i18n;
const {
	registerBlockType,
	Editable,
	query: {
		children
	}
} = wp.blocks;
const {
	Button
} = wp.components;
import uniqueId from 'lodash/uniqueId';

registerBlockType( 'gutenblocks/fold', {
	title: __( 'Fold' ),
	icon: 'sort',
	category: 'layout',
	attributes: {
		title: children( 'label' ),
		reveal: children( 'div.gutenblocks-fold-reveal' ),
	},
	edit: props => {
		const focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		const attributes = props.attributes;
		const onChangeTitle = value => {
			props.setAttributes( { title: value } );
		};
		const onFocusTitle = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
		};
		const onChangeReveal = value => {
			props.setAttributes( { reveal: value } );
		};
		const onFocusReveal = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'reveal' } ) );
		};
		const addNewFold = e => {
			props.insertBlocksAfter( [ wp.blocks.createBlock( 'gutenblocks/fold' ) ] );
		};

		return (
			<div className={ props.className }>
				<Editable
					tagName="label"
					multiline={ false }
					placeholder={ __( 'Write visible text…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					focus={ focusedEditable === 'title' }
					onFocus={ onFocusTitle }
					/>
				{
					props.focus && (
						<div>
							<Editable
								tagName="div"
								multiline="p"
								className="gutenblocks-fold-reveal"
								placeholder={ __( 'And the text to reveal…' ) }
								value={ attributes.reveal }
								onChange={ onChangeReveal }
								focus={ focusedEditable === 'reveal' }
								onFocus={ onFocusReveal }
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
