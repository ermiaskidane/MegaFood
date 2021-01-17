import React from "react"

const Message = ({ className, children }) => {
return <div className={className}>{children}</div>
}

Message.defaultProps = {
    variant: "info"
}
 
export default Message
