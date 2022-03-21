import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function BtnEditProduct(props) {
  return (
    <Link href={`/dashboard/product/${props.id}/edit`}>
      <i className="fa-solid fa-gear text-success mx-3"></i>
    </Link>
  );
}

export default BtnEditProduct;
