export default function productList({params,}:{
    params: {productId: string};
}){
    return <h1>Products detail {params.productId}</h1>;
}