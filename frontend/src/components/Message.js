import React from "react"
import { Alert } from "react-bootstrap"

const Message = ({ className, children }) => {
return <div className={className}>{children}</div>
}

Message.defaultProps = {
    variant: "info"
}
 
export default Message
