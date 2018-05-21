import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    componentWillUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            //redirect to dashboard
            hashHistory.push('/dashboard');
        }
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        })
            .catch(err => {
                const errors = err.graphQLErrors.map(error => error.message);
                this.setState({ errors });
            });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors}></AuthForm>
            </div>
        );
    }
}

export default graphql(query)(
    graphql(mutation)(LoginForm)
);