export const odPremiumDetails = () => ({
    body:0,
    statusCode: 0,
    policyType: 0,
    idv: 0,
    minIDV: 0,
    value: 0,
    maxIDV: 0,
    basic: 0,
    discountAmount: 0,
    discountPercentage: 0,
    odAfterDiscount: 0,
    ncbAmount: 0,
    ncbPercentage: 0,
    loadingPercentage: 0,
    loadingAmount: 0,
    nilDepAmount: 0,
    nilDepPercentage: 0,
    consumables: 0,
    engineProtect: 0,
    rti: 0,
    electricalAccessoriesPremium: 0,
    electricalAccessoriesPremiumBeforeDiscount: 0,
    electricalAccessoriesDiscountAmount: 0,
    nonElectricalAccessoriesPremium: 0,
    nonElectricalAccessoriesPremiumBeforeDiscount: 0,
    nonElectricalAccessoriesDiscountAmount: 0,
    otherCoveragesPremium: 0,
    netPremium: 0,
    gstOnPremium: 0,
    grossPremium: 0,
  });
  
  export const tpPremiumDetails = () => ({
    basic: 0,
    tppdRestrictionAmount: 0,
    basicPremiumAfterTppd: 0,
    cpa: 0,
    passenger: 0,
    llpd: 0,
    otherCoveragesPremium: 0,
    netPremium: 0,
    gstOnPremium: 0,
    grossPremium: 0,
  });
  



































 
export const premiumDetails = (type) => {
  const details = {
    od: {
      body: 0,
      statusCode: 0,
      policyType: 0,
      idv: 0,
      minIDV: 0,
      value: 0,
      maxIDV: 0,
      basic: 0,
      discountAmount: 0,
      discountPercentage: 0,
      odAfterDiscount: 0,
      ncbAmount: 0,
      ncbPercentage: 0,
      loadingPercentage: 0,
      loadingAmount: 0,
      nilDepAmount: 0,
      nilDepPercentage: 0,
      consumables: 0,
      engineProtect: 0,
      rti: 0,
      electricalAccessoriesPremium: 0,
      electricalAccessoriesPremiumBeforeDiscount: 0,
      electricalAccessoriesDiscountAmount: 0,
      nonElectricalAccessoriesPremium: 0,
      nonElectricalAccessoriesPremiumBeforeDiscount: 0,
      nonElectricalAccessoriesDiscountAmount: 0,
      otherCoveragesPremium: 0,
      netPremium: 0,
      gstOnPremium: 0,
      grossPremium: 0,
    },
    tp: {
      basic: 0,
      tppdRestrictionAmount: 0,
      basicPremiumAfterTppd: 0,
      cpa: 0,
      passenger: 0,
      llpd: 0,
      otherCoveragesPremium: 0,
      netPremium: 0,
      gstOnPremium: 0,
      grossPremium: 0,
    },
  };

  return details[type] || {};
};
