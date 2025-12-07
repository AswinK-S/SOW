import React,{useState,useEffect} from 'react'
import { Search, Plus, Printer, Settings, MoreHorizontal, ArrowRight } from 'lucide-react';
import '../styles/ProductTable.css';
import { API } from '../config/api';

const ProductTable = () => {
   const [searchArticle, setSearchArticle] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchPriceList = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${API}/pricelist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Backend not available");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.warn("Backend offline → Using dummy data",err.message);

        const dummy = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          articleNo: `ART-${1000 + i}`,
          productService: `Test Product ${i + 1}`,
          inPrice: 100 + i * 5,
          price: 150 + i * 10,
          unit: "pcs",
          inStock: 50 + i * 3,
          description: `Sample description for product ${i + 1}`,
        }));

        setProducts(dummy);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceList();
  }, []);
  
  const filteredProducts = products.filter((product) =>
    product.articleNo.toLowerCase().includes(searchArticle.toLowerCase()) &&
    product.productService.toLowerCase().includes(searchProduct.toLowerCase())
  );

if (loading) {
    return <p style={{ padding: '20px' }}>Loading products...</p>;
  }
  return (
    <div className="product-table-container">
      <div className="table-toolbar">
        <div className="search-fields">
          <div className="search-field">
            <input
              type="text"
              placeholder="Search Article No."
              value={searchArticle}
              onChange={(e) => setSearchArticle(e.target.value)}
              className="search-input"
            />
            <Search className="search-icon" size={18} />
          </div>

          <div className="search-field">
            <input
              type="text"
              placeholder="Search Product"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
              className="search-input"
            />
            <Search className="search-icon" size={18} />
          </div>
        </div>

        <div className="toolbar-actions">
          <button className="action-button new-product">
            <span>New Product</span>
            <Plus size={16} className="action-icon" />
          </button>

          <button className="action-button print-list">
            <span>Print List</span>
            <Printer size={16} className="action-icon" />
          </button>

          <button className="action-button advanced-mode">
            <span>Advanced mode</span>
            <Settings size={16} className="action-icon" />
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th></th>
              <th>Article No. ↓</th>
              <th>Product/Service ↓</th>
              <th>In Price</th>
              <th>Price</th>
              <th>Unit</th>
              <th>In Stock</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="action-cell">
                  <ArrowRight size={18} className="row-action-icon" />
                </td>

                <td className="article-no">{product.articleNo}</td>
                <td className="product-service">{product.productService}</td>
                <td className="numeric-cell">{product.inPrice}</td>
                <td className="numeric-cell">{product.price}</td>
                <td>{product.unit}</td>
                <td className="numeric-cell">{product.inStock}</td>
                <td className="description">{product.description}</td>

                <td className="action-cell">
                  <button className="more-button">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductTable;
