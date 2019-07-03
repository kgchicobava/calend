import React, { Component, Fragment } from "react";

const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show
		? "modal display-block"
		: "modal display-none";

	return (
		<div className={showHideClassName} onClick={handleClose}>
			<section
				className="modal-main"
				onClick={event => event.stopPropagation()}>
                {children}
                <textarea />
				<button onClick={handleClose}>close</button>
			</section>
		</div>
	);
};

class Day extends Component {
	state = { show: false };

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({
			show: false
		});
	};
	render() {
		if (this.props.blank) {
			return <div />;
		} else {
			return (
				<Fragment>
					<div onClick={this.showModal}>{this.props.info}</div>
					<Modal
						show={this.state.show}
						handleClose={this.hideModal}
						children="something"
					/>
				</Fragment>
			);
		}
	}
}

export default Day;
