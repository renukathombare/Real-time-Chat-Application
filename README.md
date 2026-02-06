# Real-time-Chat-Application

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : RENUKA ANGAD THOMBRE

*INTERN ID* : CTIS3029

*DOMAIN* : FRONT END DEVELOPMENT

*DURATION* : 4 WEEKS

*MENTOR* : NEELA SANTOSH

##In this task, I developed a real-time chat application using WebSocket technology and basic front-end web technologies. The main objective of this task was to understand how real-time communication works between clients and a server and how messages can be exchanged instantly without reloading the webpage. This project helped me gain practical experience in client-server communication and real-time web application development.

To begin with, I created a simple and clean project structure by separating the backend and frontend parts. The backend was developed using Node.js and the WebSocket protocol. I used the ws library to create a WebSocket server that listens for incoming client connections on a specific port. This server is responsible for managing all client connections and handling real-time message transfer between users.

One of the important features I implemented in this project is message history. On the server side, I maintained an array to store all the chat messages. Whenever a new user connects to the chat application, the server sends the previously stored messages to that user. This ensures that users joining the chat later can still see earlier conversations instead of starting with an empty chat screen. This feature improves the usability and completeness of the chat application.

For the frontend, I used HTML, CSS, and JavaScript to build a responsive and user-friendly chat interface. The HTML file defines the structure of the chat application, including the chat display area, message input field, and send button. The CSS file is used to style the interface and make it responsive so that it works well on both desktop and mobile devices. The chat messages are displayed in a scrollable chat box, making it easy to read previous messages.

The JavaScript file handles the WebSocket connection from the client side. When the web page loads, a WebSocket connection is established between the client and the server. When a user types a message and clicks the send button, the message is sent to the WebSocket server. The server then broadcasts this message to all connected clients in real time. As a result, messages appear instantly on all active chat screens without any page refresh.

I also tested the application by opening the chat interface in multiple browser tabs. This helped me verify that real-time communication was working correctly and that messages were being delivered instantly to all connected users. The chat interface updates dynamically as soon as a new message is received, which demonstrates the effectiveness of WebSocket-based communication.

During the development process, I learned how WebSockets differ from traditional HTTP requests and why they are suitable for real-time applications such as chat systems. I also gained hands-on experience with Node.js, handling server-side logic, and connecting it with frontend components. Additionally, I learned how to debug common issues such as server connection errors and file path problems.

Overall, this task helped me understand the complete flow of a real-time web application, from backend server setup to frontend user interaction. The real-time chat application successfully meets the task requirements by providing instant messaging, message history, and a responsive interface. This project enhanced my practical knowledge of web development and real-time communication technologies and is a valuable learning experience during my internship.##

