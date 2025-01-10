import { Checkout } from "~/shared/utils/polar";

const checkout = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  successUrl: "http://localhost:3000/success",
  server: "sandbox", // Use sandbox if you're testing Polar - omit the parameter or pass 'production' otherwise
});

export default defineEventHandler(checkout);
