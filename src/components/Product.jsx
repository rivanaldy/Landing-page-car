import React, { useState } from "react";
import { Card, Image, Text, Stack, Heading, Divider, ButtonGroup,Button,} from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { supabase } from "../supabaseClient";

const baseUrl=`https://ednlotlckjsmnnjycsmx.supabase.co/storage/v1/object/public/car/`
function Product({ productData, isDetail }) {
  const navigate = useNavigate();
async function getImages() {
  const {data,error}= await supabase
  .storage
  .from('car')
  .list('products',{
    limit:100,
    offset:0, 
  })
  console.log(data)
}getImages()
  // console.log(productData)
  if (!productData) {
    return null;
  }

  return (
    <>
      <Card maxW="sm">
        <Image src={baseUrl+productData.image_path} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{productData.name_product}</Heading>
          <Text>{productData.description}</Text>
          <div
            style={{
              direction: "ltr",
              fontFamily: "sans-serif",
              touchAction: "none",
            }}
          >
            <Rating
              initialValue={faker.string.alphanumeric({
                length: { min: 0, max: 3 },
              })}
              onClick={function noRefCheck() {}}
              transition
              SVGstyle={{ display: "inline" }}
              size={17}
            />
          </div>
          <Text color="blue.600" fontSize="2xl">
            $ {productData.price}
          </Text>
          {isDetail && <div>{faker.commerce.productDescription()}</div>}
        </Stack>
        <Divider />
        <ButtonGroup className="flex, justify-center" spacing="3">
          <Button variant="solid" mt={"1"} size={"sm"} colorScheme="teal">
            Buy now
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => {
              if (isDetail) {
                navigate("/");
              } else {
                navigate(`detail/${productData.id}`, { state: productData });
              }
            }}
          >
            {isDetail ? "Back" : "Detail"}
          </Button>
        </ButtonGroup>
      </Card>
    </>
  );
}

export default Product;
