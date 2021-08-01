var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCatagory = document.getElementById('productCatagory');
var productDescription = document.getElementById('productDescription');
var addOrUpdateButton = document.getElementById('addOrUpdateButton');
var productContainer ;

if (JSON.parse(localStorage.getItem('products')) == null) {
    productContainer =[];
}else {
    productContainer =JSON.parse(localStorage.getItem('products'))
    displayProducts()
}

function addProduct(){
    var product = {
        name: productName.value,
        price: productPrice.value,
        catagory: productCatagory.value,
        desc: productDescription.value,
    };

    productContainer.push(product);
    localStorage.setItem('products',JSON.stringify(productContainer));
    displayProducts();
    clearForm();
    }

function clearForm(){
    productName.value= "";
    productPrice.value= "";
    productCatagory.value= "";
    productDescription.value= "";
}

//tableData

function displayProducts(){
    var box ="";
    for (var i = 0; i < productContainer.length; i++) {
        box += `
    <tr>
        <td>`+i+`</td>
        <td>`+productContainer[i].name+`</td>
        <td>`+productContainer[i].price+`</td>
        <td>`+productContainer[i].catagory+`</td>
        <td>`+productContainer[i].desc+`</td>
        <td>
            <button onclick="updateBtn(`+i+`)" class="btn btn-outline-warning">Update</button>
        </td>
        <td>
            <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>    
        `      
    }
    document.getElementById('tableData').innerHTML =box;
}

function search(itemSearch){
    var box =``;
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(itemSearch.toLowerCase())
        || productContainer[i].catagory.toLowerCase().includes(itemSearch.toLowerCase())) {
            box += `
            <tr>
                <td>`+i+`</td>
                <td>`+productContainer[i].name+`</td>
                <td>`+productContainer[i].price+`</td>
                <td>`+productContainer[i].catagory+`</td>
                <td>`+productContainer[i].desc+`</td>
                <td>
                    <button onclick="updateBtn(`+i+`)" class="btn btn-outline-warning">Update</button>
                </td>
                <td>
                    <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>    
                `      
            
        }
    }    if (box == ``) {
            box = `<h2 class=" fa-2x text-muted my-5 text-center "> Not founded <i class="far fa-times-circle  "></i>
            </h2>`;
        }
    
    document.getElementById('tableData').innerHTML =box;
}

function updateBtn(updateButton) {
    addOrUpdateButton.innerHTML =`<button onclick="updateProduct(`+updateButton+`)" 
    class=" btn  btn-outline-warning"> Update product</button>`;
  
    productName.value = productContainer[updateButton].name;
    productPrice.value = productContainer[updateButton].price;
    productCatagory.value = productContainer[updateButton].catagory;
    productDescription.value = productContainer[updateButton].desc;
  }
  
  function updateProduct(updateproduct) {
    productContainer[updateproduct].name = productName.value;
    productContainer[updateproduct].price = productPrice.value;
    productContainer[updateproduct].catagory = productCatagory.value;
    productContainer[updateproduct].desc = productDescription.value;
    localStorage.setItem('products', JSON.stringify(productContainer));

    addOrUpdateButton.innerHTML = ` <button onclick="addProduct()" class="btn btn-primary">Add Product</button>`;

    displayProducts();
    clearForm();
  
  }
  
  function deleteProduct(deleteProduct) {
    productContainer.splice(deleteProduct, 1);
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProducts();  
  }
