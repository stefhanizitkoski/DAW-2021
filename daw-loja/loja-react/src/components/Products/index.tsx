import { Product } from '../../@types'
import './style.css';

type ProductsProps = {
    items: Array<Product>
}
// mesma coisa que o Brands
export function Products(props: ProductsProps){
    return(

        <div className="products">
            {props.items.map(Products => {
                return(
        <div className="card">
            <img src= {"assets/images/{product1.photo"}/>
            <div className="card-body">
                <h5>Conjunto de casaco e calça preto</h5>
                <div className="details">
                    <div className="star-rating">
                        <i className="bi bi-star-fill"></i> 
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                        <h3> {Products.price}  </h3>
                        <p>Em até 10 x R$ {Products.price} </p>
                    </div>
                </div>
            </div>
        </div>
        )}
        )}
    </div>
    )
}