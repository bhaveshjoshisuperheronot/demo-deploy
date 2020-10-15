const initState = {
    companyName: '',
    doingBusinessAs: '',
    companyType: '',
    primaryBusiness: '',
    companyWebsite: '',
    linkedInProfile: '',
    title: '',
    secondaryEmail: '',
    officeNumber: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    taxType: '',
    taxId: '',
    accountNumber: '',
    bankName: '',
    branchAddress: '',
    accountType: '',
    accountHolderName: '',
    routingNumber: '',
    paypalId: '',
    swiftCode: '',
    callGetApi: false
}
const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PROFILE_DETAILS':
        return {
            ...state,
            companyName: action.companyName,
            doingBusinessAs: action.doingBusinessAs, 
            companyType: action.companyType, 
            primaryBusiness: action.primaryBusiness, 
            companyWebsite: action.companyWebsite,   
            linkedInProfile: action.linkedInProfile, 
            title: action.title, 
            secondaryEmail: action.secondaryEmail,   
            officeNumber: action.officeNumber,   
            address: action.address, 
            city: action.city,   
            state: action.state, 
            postalCode: action.postalCode,   
            country: action.country  
        };
        case 'GET_BANK_DETAILS':
        return{
            ...state,
            taxType: action.taxType,
            taxId: action.taxId,
            accountNumber: action.accountNumber,
            bankName: action.bankName,
            branchAddress: action.branchAddress,
            accountType: action.accountType,
            accountHolderName: action.accountHolderName,
            routingNumber: action.routingNumber,
            paypalId: action.paypalId,
            swiftCode:action.swiftCode,
            callGetApi: true
        }
        case 'CLEAR_DASHBOARD':
        return{
            companyName: '',
            doingBusinessAs: '',
            companyType: '',
            primaryBusiness: '',
            companyWebsite: '',
            linkedInProfile: '',
            title: '',
            secondaryEmail: '',
            officeNumber: '',
            address: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
            taxType: '',
            taxId: '',
            accountNumber: '',
            bankName: '',
            branchAddress: '',
            accountType: '',
            accountHolderName: '',
            routingNumber: '',
            paypalId: '',
            swiftCode: '',
            callGetApi: false
        }
        default: 
            return state;
    }
}

export default dashboardReducer;