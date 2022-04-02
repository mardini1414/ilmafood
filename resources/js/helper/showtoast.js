import { Toast as MyToast } from 'bootstrap';

function showToast() {
  const myToastEl = document.getElementById('my-toast');
  new MyToast(myToastEl).show();
}

export default showToast;
