import React, { useContext, useEffect, useState } from "react";
import { ListAvocadosProvider } from "contexts/ListContext";
import { ListProducts } from "components/ListProducts";

const Home = () =>{
	return(
		<div>
			<ListAvocadosProvider>
				<ListProducts></ListProducts>
			</ListAvocadosProvider>
			
		</div>
	)
}
export default Home;
