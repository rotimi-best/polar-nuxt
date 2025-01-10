import { CustomerPortal } from "~/shared/utils/polar";

const portal = CustomerPortal({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  getCustomerId: async (event) => {
    const url = new URL(getRequestURL(event));
    const customerId = url.searchParams.get("customerId") || "";

    console.log("customerId", customerId);

    return customerId;
  },
  server: "sandbox", // Use sandbox if you're testing Polar - omit the parameter or pass 'production' otherwise
});

export default defineEventHandler(portal);
