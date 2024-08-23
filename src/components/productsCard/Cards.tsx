import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { SingleProduct } from "../../data/base";
// import { useEffect, useState } from "react";

interface product {
  id: number;
  name: string;
  title: string;
  price: number;
  productImg: string;
}
const Cards: React.FC<product> = ({ id, title, name, price, productImg }) => {
  return (
    <>
      <Col md={3}>
        <Link to={`/singleProduct/${id}`}>
          <Card key={id} className="my-4">
            <Card.Img variant="top" src={productImg} />
            <Card.Body>
              <h6 className="fs20">{name}</h6>
              <div> {title}</div>
              <Card.Text className="fs16">price : rs : {price}/-</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};
export default Cards;
