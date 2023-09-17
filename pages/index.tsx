import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";

const Home = () =>{
	const [productList, setProductList] = useState([]);
	const [length, setLength] = useState(0);
	useEffect(()=>{
		window.fetch('/api/avo')
		.then(res=>res.json())
		.then(({data, length}) =>{
			setProductList(data);
			setLength(length)
		})
	},[]);
	console.log(productList)
	return(
		<div>
			<Navbar/>
			<h1>Platzi and Next.js</h1>
			<h4>Avocatos: {length}</h4>
			{productList.map(product=>{
				return (
				<div>
					{product.name}
				</div>)
			})}
		</div>
	)
}
export default Home;
