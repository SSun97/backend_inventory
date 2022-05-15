import '@babel/polyfill';
import axios from 'axios';
import { showAlert } from './alert';

export const createShipment = async (data) => {
  try {
    const url = `/api/shipments/?name=${data.name}&shipQty=${data.shipQty}&shipTo=${data.shipTo}&shipDate=${data.shipDate}`;
    const res = await axios.post(url);
    if (res.data.status === 'success') {
      showAlert('success', `shipment for ${data.name} created successfully`);
    }
  } catch (error) {
    showAlert('error', `Something went wrong, ship quantity ${data.shipQty} may exceed than the quantity of inventory`);
  }
};