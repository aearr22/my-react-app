import React from 'react';
import Message from './components/Message';

const App: React.FC = () => {
  const messageText = "Привет, это сообщение из пропсов!";

  return (
    <div>
      <Message text={messageText} />
    </div>
  );
};

export default App;
