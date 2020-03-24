import React, {Component} from "react";
import {graphql} from 'react-apollo';
import currentQueryUser from '../queries/CurrentUser';
import {hashHistory} from 'react-router';

export default (WrappedComponent) => {
    class RequireAuth extends Component{
        componentWillUpdate(nextProps){
            console.log(!nextProps.data.loading, !nextProps.data.user);
            if(!nextProps.data.loading && !nextProps.data.user){
                hashHistory.push("/login")
            }
        }


        render(){
            return <WrappedComponent {...this.props}/>
        }

    }
    return graphql(currentQueryUser)(RequireAuth)
}

