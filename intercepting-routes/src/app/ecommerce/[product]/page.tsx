import { products } from "@/app/db/data";

const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;

  const findProduct = products.find((p) => p.id === +product);


  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">{findProduct?.name}</h1>

      <img
       className="w-[40rem]"
       src={findProduct?.image}
       alt={findProduct?.name}
      />

<p className="text-2xl mt-[1rem]">Price: {findProduct?.price}</p>
    </div>
  );
};

export default Product;