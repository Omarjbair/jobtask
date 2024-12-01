"use client";

import { useState, useEffect } from 'react';

const WebSocketPage = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket('wss://echo.websocket.org');
        setSocket(ws);
        ws.onmessage = (event: MessageEvent) => {
            console.log('Received from WebSocket:', event.data);
            setMessage(event.data); 
        };

        ws.onerror = (error: Event) => {
            console.error('WebSocket Error:', error.type);
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (socket && inputMessage) {
            socket.send(inputMessage);
        }
    };

  return (
        <div>
            <h1>WebSocket</h1>
            <h2>send message</h2>
            <div>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                <h3>Response from Server:</h3>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default WebSocketPage;
