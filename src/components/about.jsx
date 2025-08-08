// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const About = () => {
//     const { id } = useParams()
//     const { product, setproduct } = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchproduct = async () => {
//             try {
//                 const res = await axios.get(`https://dummyjson.com/products/${id}`);


//             } catch (err) {
//                 console.error("failed to feftch product", err);
//             }
//         };
//         fetchproduct();
//     }, [id]);

//     if (!product) return <p>loading product...</p>

//     return (
//         <div className="conatiner5">
//             <h2 className="abput-container">{product.title}</h2>
//             <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="about-img"/>

//             <div className="details">
//                 <p><strong>price:</strong>${product.price}</p>
//                 <p><strong>rating:</strong>${product.rating}</p>
//                 <p><strong>description:</strong>${product.description}</p>
//                 <p><strong>brand:</strong>${product.brand}</p>
//                 <p><strong>category:</strong>${product.category}</p>





//             </div>



//         </div>
//     )




// }
// export default About

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const About = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>rating:</strong>${product.rating}</p>
            <p><strong>description:</strong>${product.description}</p>
            <p><strong>brand:</strong>${product.brand}</p>
            <p><strong>category:</strong>${product.category}</p>

        </div>
    );
};

export default About;
