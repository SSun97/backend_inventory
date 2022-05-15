import '@babel/polyfill';
import { addProduct } from './addProduct';
import { updateProduct } from './updateProduct';
import { createShipment } from './createShipment';

const addProductForm = document.querySelector('.form-addProduct');
if (addProductForm)
  addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = {};
    form.name = document.getElementById('product_name').value;
    form.quantity = document.getElementById('product_qty').value;
    form.city = document.getElementById('product_city').value;
    form.description = document.getElementById('product_des').value;
    addProduct(form);
    document.getElementById('product_name').value = '';
    document.getElementById('product_qty').value = '';
    document.getElementById('product_city').value = '';
    document.getElementById('product_des').value = '';
  });

const updateProductForm = document.querySelector('.form-updateProduct');
if (updateProductForm)
  updateProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = {};
    form.name = document.getElementById('product_name').value;
    form.quantity = document.getElementById('product_qty').value;
    form.city = document.getElementById('product_city').value;
    form.description = document.getElementById('product_des').value;
    form.id = document.getElementById('product_id_1').value;
    // form.id = document.getElementById('product_id').value;
    // console.log(`This is form ${form}`);
    updateProduct(form);
  });
const CreateShipmentForm = document.querySelector('.form-createShipment');
if (CreateShipmentForm)
CreateShipmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = {};
    form.name = document.getElementById('product_name').value;
    form.id = document.getElementById('product_id_1').value;
    form.shipQty = document.getElementById('product_shipQty').value;
    form.shipTo = document.getElementById('product_shipTo').value;
    form.shipDate = document.getElementById('product_shipDate').value;
    // form.id = document.getElementById('product_id').value;
    // console.log(`This is form ${form}`);
    createShipment(form);
  });

const deleteProductBtn = document.getElementById(`.btn-delete`);
if (deleteProductBtn)
  deleteProductBtn.addEventListener('click', (e) => {
    e.preventDefault();
  });
