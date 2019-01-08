import React from 'react';

import Product from './../models/Product';

class Products extends React.Component {
  state = {
    products: [
      new Product(1, 'Leaf Rake', 'Leaf rake with 48-inch wooden handle.', 19.95, 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'),
      new Product(2, 'Garden Cart', '15 gallon capacity rolling garden cart', 32.99, 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'),
      new Product(3, 'Hammer', 'Curved claw steel hammer', 8.99, 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'),
      new Product(4, 'Saw', '15-inch steel blade hand saw', 11.55, 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'),
      new Product(5, 'Video Game Controller', 'Standard two-button video game controller', 35.95, 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png')
    ],
    filteredProducts: [
      new Product(1, 'Leaf Rake', 'Leaf rake with 48-inch wooden handle.', 19.95, 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'),
      new Product(2, 'Garden Cart', '15 gallon capacity rolling garden cart', 32.99, 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'),
      new Product(3, 'Hammer', 'Curved claw steel hammer', 8.99, 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'),
      new Product(4, 'Saw', '15-inch steel blade hand saw', 11.55, 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'),
      new Product(5, 'Video Game Controller', 'Standard two-button video game controller', 35.95, 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png')
    ],
    showImages: false,
    newProduct: new Product(0, '', '', 0, ''),
    searchText: '',
    sortOrder: 'ASC'
  };

  toggleImages = () => {
    this.setState({
      showImages: !this.state.showImages
    });
  }

  handleInput = (e) => {
    let { name, value } = e.target;
    let { newProduct } = this.state;
    newProduct[name] = value;
    this.setState({
      newProduct
    });
  }

  addProduct = () => {
    let { products } = this.state;
    products.push(this.state.newProduct);
    this.setState({
      products, 
      newProduct: new Product(0, '', '', 0, '')
    });
  }

  handleSearch = (event) => {
    let { value } = event.target;
    let { products } = this.state;

    this.setState({
      filteredProducts: products.filter(product => product.productName.indexOf(value) > -1),
      searchText: value
    });
  };

  sortProducts = () => {
    let { filteredProducts, sortOrder } = this.state;

    filteredProducts.sort((a, b) => {
      return a.productName > b.productName ? (sortOrder === 'ASC' ? 1 : - 1) : (sortOrder === 'ASC' ? -1 : 1);
      // return a.productName > b.productName ? 1 : -1
    });

    this.setState({
      filteredProducts: filteredProducts,
      sortOrder: sortOrder === 'ASC' ? 'DESC' : 'ASC'
    });
  };

  render() {
    let { productName, description, price } = this.state.newProduct;
    return (
      <div>
        <h2>Products Component</h2>

        <div className="panel panel-info">
          <div className="panel-heading">
            Add Product
          </div>
          <div className="panel-body">
            <form>
              Name: <input type="text" name="productName" required onChange={this.handleInput} value={productName}/>
              Description: <input type="text" name="description" onChange={this.handleInput} value={description} />
              Price: <input type="text" name="price" onChange={this.handleInput} value={price} />
            </form>
            <button className="btn btn-sm btn-success" onClick={this.addProduct}> Add </button>
          </div>
        </div>

        Search: <input type="text" onKeyUp={this.handleSearch} /> Found: {this.state.filteredProducts.length}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <button className="btn btn-sm btn-primary" onClick={this.toggleImages}>
                  { this.state.showImages ? 'Hide' : 'Show' }
                </button>
              </th>
              <th><span onClick={this.sortProducts}>Product Name</span></th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.filteredProducts.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>
                    {
                      this.state.showImages ? <img src={product.imageUrl} alt={product.productName} width="30" height="30" /> : null
                    }
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div>
          {
            this.state.filteredProducts.length === 0 ? 'No products found': ''
          }
        </div>
      </div>
    );
  }
}

export default Products;