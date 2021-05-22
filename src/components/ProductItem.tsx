import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWhishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWhishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong> {product.price}</strong>
      <button onClick={() => onAddToWhishlist(product.id)}>
        Add to whishlist
      </button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
