import React, { useEffect, useRef } from 'react';
import MainLayout from '../MainLayout';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

function Chat(props) {
  const { post, data, setData, reset } = useForm({ message: '' });
  const { messages, user_id } = props;
  const bodyMessage = useRef();

  function sendMessage() {
    post('/chat', {
      onSuccess: reset(),
      headers: {
        'X-Socket-ID': window.Echo.socketId(),
      },
    });
  }

  useEffect(() => {
    window.Echo.private(`message.${user_id}`).listen('CreateMessage', (e) => {
      messages.push(e.message);
      Inertia.reload();
    });
    bodyMessage.current.scrollTo(0, bodyMessage.current.scrollHeight);
  }, [messages]);

  return (
    <MainLayout>
      <div className="position-fixed w-100 start-0 d-flex justify-content-center top-0">
        <div
          className="d-flex align-items-center gap-2 w-100 px-2 py-1 bg-orange"
          style={{ maxWidth: 414 }}
        >
          <img
            src="/images/avatar.png"
            alt="avatar"
            width={40}
            height={40}
            className="image-fit rounded-circle"
          />
          <span className="text-light">Admin</span>
        </div>
      </div>
      <div
        ref={bodyMessage}
        className="bg-light"
        style={{
          height: '100vh',
          overflowY: 'scroll',
        }}
      >
        <div className="py-4 w-100"></div>
        {messages.length > 0 ? (
          messages.map((message, index) => {
            if (message.from_id === 1) {
              return (
                <div className="w-100 py-1 px-2 d-flex" key={index}>
                  <div
                    className="p-2 bg-secondary text-white rounded"
                    style={{
                      maxWidth: 150,
                    }}
                  >
                    {message.message}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="w-100 py-1 px-2 d-flex justify-content-end"
                  key={index}
                >
                  <div
                    className="p-2 bg-primary text-light rounded"
                    style={{ maxWidth: 150 }}
                  >
                    {message.message}
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '80vh' }}
          >
            <i
              className="fa-solid fa-message text-muted"
              style={{ fontSize: '8rem' }}
            ></i>
          </div>
        )}
        <div className="py-5 w-100 bg-light"></div>
      </div>
      <div
        className="position-fixed w-100 py-2 start-0 d-flex justify-content-center"
        style={{ bottom: 50 }}
      >
        <div
          className="d-flex gap-2 justify-content-between w-100 px-2"
          style={{ maxWidth: 414 }}
        >
          <input
            type="text"
            placeholder="mulai mengetik"
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
            className="form-control form-control-sm border-orange rounded-pill px-3"
          />
          <div
            onClick={sendMessage}
            className="pointer bg-orange rounded-circle d-flex justify-content-center align-items-center p-0"
            style={{ width: 32, height: 30 }}
          >
            <i
              className="fa-solid fa-paper-plane text-light"
              style={{ fontSize: '0.8rem' }}
            ></i>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Chat;
