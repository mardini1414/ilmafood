import React, { useEffect, useRef } from 'react';
import DashboardLayout from './DashboardLayout';
import { Inertia } from '@inertiajs/inertia';
import { Link, useForm, usePage, Head } from '@inertiajs/inertia-react';

function AdminChat(props) {
  const { users, messages, id, user_id } = props;
  const { post, data, setData, reset } = useForm({ message: '' });
  const bodyMessage = useRef();
  const { url } = usePage();

  function sendMessage() {
    post(`/dashboard/chat/${id}`, {
      onSuccess: reset(),
      preserveScroll: true,
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
    <DashboardLayout>
      <Head>
        <title>Pesan</title>
      </Head>
      <div className="row" style={{ height: '100vh', overflow: 'hidden' }}>
        <div
          className="col-md-4 px-0"
          style={{ overflowY: 'scroll', height: '100vh' }}
        >
          {users.map((user, index) => {
            return (
              <Link
                href={`/dashboard/chat/${user.id}`}
                className={`text-decoration-none d-block ${
                  url === `/dashboard/chat/${user.id}`
                    ? 'bg-success text-light'
                    : 'bg-light text-dark'
                }`}
                key={index}
              >
                <div className="p-2 border-bottom">
                  <img
                    src={
                      user.avatar !== null
                        ? `/storage/${user.avatar}`
                        : '/images/avatar.png'
                    }
                    alt={user}
                    width={40}
                    height={40}
                    className="image-fit rounded-circle"
                  />
                  <span className="ms-2">{user.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div
          ref={bodyMessage}
          className="col-md-8 scroll-slide"
          style={{ overflowY: 'scroll', height: '100vh' }}
        >
          {messages &&
            messages.map((message, index) => {
              if (message.from_id !== 1) {
                return (
                  <div className="w-100 py-1 px-2 d-flex" key={index}>
                    <div
                      className="p-2 bg-secondary text-light rounded"
                      style={{ maxWidth: 200 }}
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
                      style={{ maxWidth: 200 }}
                    >
                      {message.message}
                    </div>
                  </div>
                );
              }
            })}
          <div className="py-5"></div>
        </div>
      </div>
      <div
        className={`col-md-6 py-2 position-fixed d-flex gap-2 bottom-0 ${
          url === '/dashboard/chat' ? 'd-none' : ''
        }`}
        style={{ right: '2rem' }}
      >
        <input
          type="text"
          placeholder="mulai mengetik"
          value={data.message}
          onChange={(e) => setData('message', e.target.value)}
          className="form-control form-control-sm border border-primary"
        />
        <div
          onClick={sendMessage}
          className="pointer bg-primary rounded d-flex justify-content-center align-items-center p-0"
          style={{ width: 32, height: 30 }}
        >
          <i
            className="fa-solid fa-paper-plane text-light"
            style={{ fontSize: '0.8rem' }}
          ></i>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminChat;
