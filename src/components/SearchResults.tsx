import { useMemo } from 'react';
import { ProductItem } from '../components/ProductItem';

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWhishlist: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWhishlist,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWhishlist={onAddToWhishlist}
          />
        );
      })}
    </div>
  );
}
