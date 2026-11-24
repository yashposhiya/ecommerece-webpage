export default function Dashboard() {
    
    const ProductCard = (props) => {
        return (
            <div className="product-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                <h3>{props.name}</h3>
                <p>inr {props.price}</p>
                <button>Add to Cart</button>
            </div>
        );
    }

    return (
    <div>
        <header>
            <h2>My E-commerce Store</h2>
        </header>
        <nav>
            <a href="#">Home</a> |
            <a href="#">Category</a> |
            <a href="#">Contact Us</a> |
        </nav>

        <h2>Products</h2>
        <div className="product-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', padding: '10px' }}>
            <ProductCard name="Product 1" price="100" />
            <ProductCard name="Product 2" price="200" />
            <ProductCard name="Product 3" price="300" />
            <ProductCard name="Product 4" price="400" />
            <ProductCard name="Product 5" price="500" />
            <ProductCard name="Product 6" price="600" />
        </div>
        <footer>
            <p>&copy; 2024 My E-commerce Store</p>
        </footer>
    </div>
  );
}
