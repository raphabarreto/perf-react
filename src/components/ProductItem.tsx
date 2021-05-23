import { memo, useState } from 'react';
import { AddProductToWishlistProps } from './AddProductToWishlist';
import dynamic from 'next/dynamic';
import lodash from 'lodash';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import('./AddProductToWishlist').then(
      (mod) => mod.AddProductToWishlist
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWhishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWhishlist }: ProductItemProps) {
  const [isAddingToWhishlist, setIsAddingToWhishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong> {product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWhishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWhishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWhishlist(product.id)}
          onRequestClose={() => setIsAddingToWhishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);
