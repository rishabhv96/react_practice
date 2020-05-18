const setNewMessage = (newMessage) => {
    return {
        type:"NEW_MESSAGE",
        payload:newMessage
    }
}

export default setNewMessage;