import React, { useMemo } from 'react'
const SocketContext = React.createContext(null)
import { io } from 'socket.io-client'

export const SocketProvider = (props) => {
    const socket = useMemo(() => {
        io({
            host: 'localhost',
            port: 8001
        }, [])
    })
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    return React.useContext(SocketContext)
}