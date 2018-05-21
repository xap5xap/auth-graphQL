import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import { graphql } from 'react-apollo';

class SignupForm extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { errors: [] };
    // }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password }
        });
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} errors={[]}></AuthForm>
            </div>
        );
    }
}

export default graphql(mutation)(SignupForm);