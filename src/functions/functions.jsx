import Product from "../components/Product";

export const productGenerator = (prodArray) => {
    return prodArray.map((item, index) => (
        <Product
        key={index}
        name={item.name}
        image={item.image}
        isInStock={item.isInStock}
        price={item.price}
        flavorProfile={item.flavorProfile}
        ingredients={item.ingredients}
        veganFriendly={item.veganFriendly}
        />
    ))
}