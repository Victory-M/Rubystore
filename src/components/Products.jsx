import ProductsList from "./ProductsList";

const Products = ({ data, setData }) => {
  return (
    <div>
      <div className="products-hero d-flex justify-content-center align-items-center">
        <h1 className="text-center fw-bold text-uppercase h2"> our products</h1>
      </div>

      <div className="products center">
        {data.map((product) => (
          <ProductsList
            key={product.id}
            product={product}
            data={data}
            setData={setData}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
