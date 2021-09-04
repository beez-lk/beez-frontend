export const calculateItemPrice = (item) => {
  var discountedPrice;
  var hasDifferent = item.discount !== 0;

  switch (item.discount_type) {
    case "PERCENTAGE":
      discountedPrice = (item.unit_price * (100 - item.discount)) / 100;
      break;
    case "AMOUNT":
      discountedPrice = item.unit_price - item.discount;
      break;
    default:
      discountedPrice = item.unit_price;
      hasDifferent = false;
      break;
  }
  return {
    has_different: hasDifferent,
    item_price: Number(item.unit_price.toFixed(2)),
    discounted_price: Number(discountedPrice.toFixed(2)),
  };
};
