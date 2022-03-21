import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function BtnDetProduct(props) {
  return (
    <Link href={`/dashboard/product/${props.id}`}>
      <i className="fa-solid fa-eye"></i>
    </Link>
  );
}

export default BtnDetProduct;
