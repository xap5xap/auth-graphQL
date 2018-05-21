import React from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends React.Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                Header
        </div>
        );
    }
}

export default graphql(query)(Header);