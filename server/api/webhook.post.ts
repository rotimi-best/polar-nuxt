import { Webhooks } from "~/shared/utils/polar";
import { setter } from "~/shared/utils/stores/kv";

const webhook = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,
  onPayload: async (payload) => {
    // Handle the payload
    // No need to return an acknowledge response
    const subscriptionId = payload.data.id;
    const isSubscriptionActive = payload.data.status === "active";
    const customerId = payload.data.customerId;

    console.log({
      type: payload.type,
      isSubscriptionActive,
      subscriptionId,
      customerId,
    });

    if (payload.type === "subscription.created" && isSubscriptionActive) {
      console.log("setting customerId", customerId);
      setter(customerId, payload.data);
    }
  },
});

export default defineEventHandler(webhook);
