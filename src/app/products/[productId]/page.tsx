import { title } from "process";

type Props ={
  params: {
    productId: string;
  };
};
export const generateMEtaData = async ({ params } : Props) : Metadata => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`)
    }, 100)
  })
  return{
    title: `Product ${params.productId}`,
  }
}
export default function ProductDetails({ params } : Props) {
  return (
    <div>
       <h1>Details about product {params.productId}</h1>
    </div>
  )
}
