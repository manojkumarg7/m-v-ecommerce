import { Container, Row } from "react-bootstrap";
import { ProductsD } from "../../data/base";
import { useEffect, useState } from "react";
import Cards from "./Cards";

interface items {
  id: number;
  name: string;
  price: number;
  title: string;
  category: {
    name: string;
    image: string;
  };
}

const ProductCard: React.FC = () => {
  const [dataHolder, setdataHolder] = useState<items[]>([]);

  useEffect(() => {
    const ProductsDataHolder = async () => {
      try {
        const DataShow = await ProductsD();
        setdataHolder(DataShow);
        console.log("------startwend---------");

        console.log(DataShow);
        console.log("--------end-------");
      } catch (error) {
        return error;
      }
    };
    ProductsDataHolder();
  }, []);
  console.log(dataHolder, "dataHolderdataHolder");

  return (
    <section>
      <Container>
        <Row>
          {dataHolder &&
            dataHolder.map((itmes, i: number) => (
              <Cards
                key={i}
                id={itmes.id}
                productImg={itmes.category.image}
                name={itmes.category.name}
                price={itmes.price}
                title={itmes.title}
              />
            ))}
        </Row>
      </Container>
    </section>
  );
};
export default ProductCard;
