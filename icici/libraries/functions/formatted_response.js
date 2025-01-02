import {odPremiumDetails,tpPremiumDetails} from "../constants.js";


const formatQuoteResponse = (quoteResponse) => {
  try {
    
    const {
      riskDetails,
      totalOwnDamagePremium,
      packagePremium,
      totalLiabilityPremium,
      finalPremium,
      gstOnPremium,
      grossPremium
    } = quoteResponse;

    const odFormatted = {
      ...odPremiumDetails(),
      body: riskDetails.basicOD || 0,
      statusCode: 200,
      policyType: 0, 
      idv: quoteResponse.generalInformation.depriciatedIDV || 0,
      minIDV: 0,
      value: totalOwnDamagePremium || 0,
      maxIDV: quoteResponse.generalInformation.depriciatedIDV || 0,
      basic: riskDetails.basicOD || 0,
      discountAmount: riskDetails.voluntaryDiscount || 0,
      discountPercentage: riskDetails.voluntaryDiscount ? 5 : 0, 
      odAfterDiscount: totalOwnDamagePremium - (riskDetails.voluntaryDiscount || 0),
      ncbAmount: riskDetails.ncbPercentage || 0,
      ncbPercentage: riskDetails.ncbPercentage || 0,
      loadingPercentage: 0,
      loadingAmount: 0,
      nilDepAmount: 0,
      nilDepPercentage: 0,
      consumables: riskDetails.consumables || 0,
      engineProtect: riskDetails.engineProtect || 0,
      rti: riskDetails.returnToInvoice || 0,
      electricalAccessoriesPremium: riskDetails.electricalAccessories || 0,
      electricalAccessoriesPremiumBeforeDiscount: 0,
      electricalAccessoriesDiscountAmount: 0,
      nonElectricalAccessoriesPremium: riskDetails.nonElectricalAccessories || 0,
      nonElectricalAccessoriesPremiumBeforeDiscount: 0,
      nonElectricalAccessoriesDiscountAmount: 0,
      otherCoveragesPremium: 0,
      netPremium: totalOwnDamagePremium || 0,
      gstOnPremium: gstOnPremium || 0,
      grossPremium: grossPremium || 0
    };

    
    const tpFormatted = {
      ...tpPremiumDetails(),
      basic: riskDetails.basicTP || 0,
      tppdRestrictionAmount: 0, 
      basicPremiumAfterTppd: riskDetails.basicTP || 0,
      cpa: 0, 
      passenger: 0, 
      llpd: riskDetails.paCoverForUnNamedPassenger || 0,
      otherCoveragesPremium: 0,
      netPremium: totalLiabilityPremium || 0,
      gstOnPremium: gstOnPremium || 0,
      grossPremium: grossPremium || 0
    };

    return {
      odFormatted,
      tpFormatted,
      totalPremium: finalPremium,
      packagePremium,
      message: quoteResponse.message || 'Success'
    };
  } catch (error) {
    console.error('Error formatting quote response:', error.message);
    throw error;
  }
};

export default formatQuoteResponse;
