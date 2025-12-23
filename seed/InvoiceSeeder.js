import mongoose from "mongoose";
import { fa, faker } from "@faker-js/faker";
import User from "../app/models/User.js";
import Invoice from "../app/models/Invoice.js";

mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

function fakeInvoice(userId) {
  const total = faker.number.int({ min: 100, max: 5000 });
  const vat = Math.round(total * 0.15);

  return {
    user_id: userId,

    payable: total.toString(),
    total: total.toString(),
    vat: vat.toString(),

    cus_details: `${faker.person.fullName()}, ${faker.location.streetAddress()}, ${faker.location.city()}`,
    ship_details: `${faker.person.fullName()}, ${faker.location.streetAddress()}, ${faker.location.city()}`,

    tran_id: faker.string.alphanumeric(12).toUpperCase(),
    val_id: faker.string.alphanumeric(10).toUpperCase(),

    payment_status: faker.helpers.arrayElement([
      "pending",
      "paid",
      "failed",
    ]),

    delivery_status: faker.helpers.arrayElement([
      "processing",
      "shipped",
      "delivered",
    ]),
  };
}

async function seedInvoices() {
  const users = await User.find({}, { _id: 1 }).lean();

  let invoices = [];
  let total_invoices = 0;

  for (const user of users) {
    const invoice_count = faker.number.int({ min: 5, max: 20 });

    for (let i = 0; i < invoice_count; i++) {
      if (total_invoices >= 200) break;

      invoices.push(fakeInvoice(user._id));
      total_invoices++;
    }

    if (total_invoices >= 200) break;
  }

  await Invoice.insertMany(invoices);
  console.log(`✅ ${total_invoices} invoices created successfully`);
}

await seedInvoices();
mongoose.connection.close();