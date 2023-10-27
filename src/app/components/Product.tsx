import { ProductType } from '@/@types/ProductType';
import Image from 'next/image';
import ProductImage from './ProductImagem';

type ProductProps = {
  product: ProductType;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300">
      {/* <ProductImage product={product} key={product.id} fill /> */}
      <div className="flex justify-between font-bold my-3">
        <p className="w-40 truncate">{product.title}</p>
        <p className="text-md text-teal-300">{product.price}</p>
      </div>
      <button className="rounded-md bg-teal-600 text-white p-3.5 py-2.5 text-sm text-center">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};
