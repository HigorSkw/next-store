import { ProductType } from '@/@types/ProductType';
import { database } from '@/lib/database';

export default async function Home() {
  const products: ProductType[] = database;

  return (
    // Segunda opção seria o className - "container"

    <div className="max-w-7xl mx-auto px-8 pt-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
}
