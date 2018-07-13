const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { Button } = wp.components;
const { Component } = wp.element;

class FoldEdit extends Component {

	constructor() {
		super( ...arguments );
		this.props.setAttributes( { id: `gutenblocks-${ this.props.id }` } );
    }
    
    onChangeTitle ( title ) {
        this.props.setAttributes( { title } );
    }
    onChangeReveal ( reveal ) {
        this.props.setAttributes( { reveal } );
    }
    addNewFold ( e ) {
        this.props.insertBlocksAfter( [ wp.blocks.createBlock( 'gutenblocks/fold' ) ] );
    }

	render() {
		const { attributes, className, isSelected } = this.props;
		return (
			<div className={ className }>
				<RichText
					tagName="label"
					multiline={ false }
					placeholder={ __( 'Write visible text…' ) }
					value={ attributes.title }
					onChange={ this.onChangeTitle }
					/>
				{
					isSelected && (
						<div>
							<RichText
								tagName="div"
								multiline="p"
								className="gutenblocks-fold-reveal"
								placeholder={ __( 'And the text to reveal…' ) }
								value={ attributes.reveal }
								onChange={ this.onChangeReveal }
							/>
							<Button
								className="button"
								onClick={ this.addNewFold }
								>{ __( 'Agregar nuevo' ) }</Button>
						</div>
					)
				}
			</div>
		);
	}
}

export default FoldEdit;
