
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Product from "./components/Product";
import { supabase } from "./supabaseClient";

function Details() {
  const { state } = useLocation();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      // Ambil data produk berdasarkan id dari Supabase
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product data:", error);
      } else {
        setProductData(data);
      }
    }

    if (state) {
      // Jika ada data dalam state (dari navigasi sebelumnya), gunakan data tersebut
      setProductData(state);
    } else {
      // Jika tidak, ambil data produk berdasarkan id
      fetchProductById();
    }
  }, [id, state]);

  return (
    <div>
      {productData && (
        <Product isDetail={true} productData={productData} />
      )}
    </div>
  );
}

export default Details;
