const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;

  const products = [
    {
      id: 1,
      name: "Macbook Pro",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Football",
      price: "$200",
      image:
        "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Sofa",
      price: "$500",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const findProduct = products.find((f) => f.id === +product);
  //   console.log("--------- findProduct", findProduct);

  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">{findProduct?.name}</h1>

      <img
        src={findProduct?.image}
        alt={findProduct?.name}
        className="w-[40rem]"
      />

      <p className="text-2xl mt-[1rem]">Price: ${findProduct?.price}</p>
    </div>
  );
};

export default Product;