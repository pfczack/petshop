  // Função para salvar o produto no localStorage
  function saveProduct(product, productSeller) {
      let products = JSON.parse(localStorage.getItem(productSeller)) || [];
      products.push(product);
      localStorage.setItem(productSeller, JSON.stringify(products));
    }
    
    // Função para lidar com a submissão do formulário
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
    
      const productName = document.getElementById('productName').value;
      const productPrice = document.getElementById('productPrice').value;
      const productDescription = document.getElementById('productDescription').value;
      const productDate = document.getElementById('productDate').value;
      const productSeller = document.getElementById('productSeller').value;
    
      const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        date: productDate,
        seller: productSeller
      };
    
      saveProduct(product, productSeller);
      alert(`Parabéns ${productSeller} pela sua venda de R$ ${productPrice}. Continue assim e será promovido em breve!`);
    
      document.getElementById('productForm').reset();
    });