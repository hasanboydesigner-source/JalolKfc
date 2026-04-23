import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      qty: Number,
      image: String
    }
  ],
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  tableNumber: { type: String, default: null },
  source: { type: String, enum: ['POS', 'Customer'], default: 'POS' },
  orderType: { type: String, enum: ['Zalda', 'Olib ketish', 'Yetkazib'], default: 'Zalda' },
  paymentMethod: { type: String, enum: ['Naqd', 'Karta', 'QR'], default: 'Naqd' },
  status: { type: String, enum: ['Pending', 'Preparing', 'Ready', 'Completed', 'Cancelled'], default: 'Pending' }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
