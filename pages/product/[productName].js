import React, { useState, useEffect } from "react";
import { request } from "graphql-request";
import Link from 'next/link';
import { useRouter } from 'next/router'

const ProductDetail =  () => {
    const router = useRouter();
    const productName = router.query.productName;
    return (
       <>
         <h1> hi all { productName } here..</h1>
       </>
    )
}
export default ProductDetail;
