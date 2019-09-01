import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Aux';

export default (WrappedComponent, axios) => {
	class hocComponent extends Component {
		state = {
			error: null
		};
		componentDidMount() {
			axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			axios.interceptors.response.use(
				res => res,
				error => {
					this.setState({ error: error });
					return;
				}
			);
		}
		errorConfirmedHandler = () => {
			this.setState({ error: null });
		};
		render() {
			return (
				<Aux>
					<Modal
						show={this.state.error}
						close={
							this.state.error ? this.errorConfirmedHandler : null
						}
					>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	}

	return hocComponent;
};
