const selectors = {
    username : 'body > app-root > app-nysalogin > section > div > div > div > form > div:nth-child(1) > input',
    password : '#passType',
    captcha_image :'body > app-root > app-nysalogin > section > div > div > div > form > div.captcha-container > div > div:nth-child(1) > canvas',
    captcha : '#captcha-input',
    login : 'body > app-root > app-nysalogin > section > div > div > div > form > div:nth-child(7) > button',     
    motor : "#nysaMotor",
    dealnotfound : "body > div > div > div.swal2-actions > button.swal2-confirm.swal2-styled",
    side_button : 'body > app-root > app-quote > app-header > div.nysa_sidepanel_open.ng-star-inserted > button.nysa_openbtn',
    
    vehicle_type : "#\\32 WRoll",
    
    new_button : "label[for= 'new']",
    rto_inputselector : '#rtodetail[type="text"]',
    model_inputselector : '#manufacturer[type="text"]',


    
    rtodropdown : "mat-mdc-autocomplete-panel",
    manufacturer_model : '#manufacture  r',
    dropdown_options : "#mat-autocomplete-6",
    individual : '#quotesection > div.col-sm-5.col-md-4.form-group > ul > li:nth-child(1) > table > tr > td > label',
    corporate : '#quotesection > div.col-sm-5.col-md-4.form-group > ul > li:nth-child(2) > table > tr > td > label',
    partnership : "#quotesection > div.col-sm-5.col-md-4.form-group > ul > li:nth-child(3) > table > tbody > tr > td > label",
    tenure : "#quotesection > div:nth-child(6) > ul > li:nth-child(1) > table > tr:nth-child(1) > td > label",
    cpa : "#quotesection > div:nth-child(5) > select",
    registration_date: "#poldate",
    policy_start_date : "#regdate",
    year_selector : "#mat-datepicker-311 > mat-calendar-header > div > div > button.mat-calendar-period-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base",
    back_month : "#mat-datepicker-311 > mat-calendar-header > div > div > button.mat-calendar-previous-button.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base",
    after_month : "#mat-datepicker-311 > mat-calendar-header > div > div > button.mat-calendar-next-button.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base",
    customer_state : "#quotesection > div:nth-child(9) > select",
    
    manufacture_year : "#quotesection > div:nth-child(10) > select",
    
    get_quote : "#get_quote",
    additionals_covers : "#cdk-accordion-child-13 > div > div > div:nth-child(5) > div > div > div > div:nth-child(2) > span > a",
    nd : "#ZeroDepPlanName",
    pa_cover : "#alreadyholdsPAcoverof15L",
    recalculate_premium: "#submit_quote",
    submit_quote : "#submit_quote",
    
    

    engineno_input : 'input[placeholder="Engine Number"]',
    chassisno_input : "#carreg",

    vehicle_colour_input : "#vehicleColor",
    do_it_later : "#collapseThree > div > div > div > div > div.col-lg-8.ng-tns-c1672568071-196 > div:nth-child(1) > ul > li:nth-child(2) > table > tbody > tr > td > label",
    insurer_name_input : "#nameCstm",
    address_input :"#address1",
    mobile_number_input : "#mobile",
    email_input : "#email",
    pincode_input :"#pincode",
    customer_state_input : "#state",
    create_proposal : "#buypol",



};


export default selectors;