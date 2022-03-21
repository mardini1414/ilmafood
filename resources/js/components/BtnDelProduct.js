import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Toast as MyToast } from 'bootstrap';

function BtnDelProduct(props) {
  const { delete: destroy } = useForm({
    image: props.image,
  });

  function submit() {
    destroy(`/dashboard/product/${props.id}`, {
      onSuccess: () => {
        showToast();
      },
    });
  }

  function showToast() {
    const myToastEl = document.getElementById('my-toast');
    new MyToast(myToastEl).show();
  }

  return (
    <div onClick={submit}>
      <i className="fa-solid fa-trash-can text-danger pointer"></i>
    </div>
  );
}

export default BtnDelProduct;
