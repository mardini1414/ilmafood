import React from 'react';
import DashboardLayout from './DashboardLayout';
import { Link, useForm, Head } from '@inertiajs/inertia-react';

function AdminChat(props) {
  const { users, messages, id } = props;
  const { post, data, setData, reset } = useForm({ message: '' });

  function sendMessage() {
    post(`/dashboard/chat/${id}`, {
      onSuccess: reset(),
      preserveScroll: true,
    });
  }

  return (
    <DashboardLayout>
      <div className="row">
        <div
          className="col-md-4 px-0"
          style={{ overflowY: 'scroll', height: '92vh' }}
        >
          {users.map((user, index) => {
            return (
              <Link
                href={`/dashboard/chat/${user.id}`}
                className="text-decoration-none"
                key={index}
              >
                <div className="p-2 bg-white rounded border-bottom">
                  <img
                    src={`/storage/${user.avatar}`}
                    alt={user}
                    width={40}
                    height={40}
                    className="image-fit rounded-circle"
                  />
                  <span className="text-dark ms-2">{user.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="col-md-8">
          {messages &&
            messages.map((message, index) => {
              if (message.from_id !== 1) {
                return (
                  <div className="w-100 py-1 px-2 d-flex" key={index}>
                    <div
                      className="p-2 bg-secondary rounded"
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
        </div>
      </div>
      <div
        className="col-md-6 py-2 position-fixed d-flex gap-2"
        style={{ bottom: '2rem', right: '2rem' }}
      >
        <input
          type="text"
          placeholder="mulai mengetik"
          value={data.message}
          onChange={(e) => setData('message', e.target.value)}
          className="form-control form-control-sm"
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
