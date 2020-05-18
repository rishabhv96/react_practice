import React from 'react';
import setNewMessage from '../../redux/one-action/one.actions';
import { connect } from 'react-redux';


const OnePage = (props) => {
    return(
        <div>
            <input placeholder='Enter your message here' onChange={(event) => {props.setNewMessage(event.target.value==='Krati is a'? "Krati is a potato":event.target.value)}}/>


            <h1>{props.newMessage}</h1>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    console.log("I WAS CALLED")
    return{
        setNewMessage: message => dispatch(setNewMessage(message))
    }
}

const mapStateToProps = (state) => {
    return {
        newMessage: state.one.message
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OnePage);