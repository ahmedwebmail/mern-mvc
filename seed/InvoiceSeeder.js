import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "../app/models/User.js";
import Invoice from "../app/models/Invoice.js";

mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const paymentStatuses = ["Paid", "Unpaid", "Pending"];
const deliveryStatuses = ["Pending", "Processing", "Delivered"];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateInvoice = (userId) => {
  const total = randomNumber(1000, 10000);
  const vat = Math.floor(total * 0.15);

  return {
    user_id: userId,
    payable: total.toString(),
    cus_details: "John Doe, London, UK",
    ship_details: "Same as billing address",
    tran_id: `TXN-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    val_id: `VAL-${Math.floor(Math.random() * 1000000)}`,
    payment_status: randomItem(paymentStatuses),
    delivery_status: randomItem(deliveryStatuses),
    total: total.toString(),
    vat: vat.toString(),
  };
};

const seedInvoices = async () => {
  try {
    console.log("Invoice seeding started...");

    // Optional: clear existing invoices
    await Invoice.deleteMany();

    const users = await User.find();

    let invoices = [];

    users.forEach((user) => {
      const invoiceCount = randomNumber(3, 6);

      for (let i = 0; i < invoiceCount; i++) {
        invoices.push(generateInvoice(user._id));
      }
    });

    await Invoice.insertMany(invoices);

    console.log(`Seeded ${invoices.length} invoices successfully`);
    process.exit();
  } catch (error) {
    console.error("Invoice seeding failed:", error.toString());
    process.exit(1);
  }
};

seedInvoices();