import {PostData} from '../../services/PostData'

export const getProfileDetails = (userData) => {
    return(dispatch, getState) => {
        PostData('user/get-profile', userData).then((result) => {
            let res = result;
            if(res.status === true) {
                alert('Got Profile Data');
                dispatch({
                    type: 'GET_PROFILE_DETAILS',
                    companyName: res.data.companyName,
                    doingBusinessAs: res.data.doingBusinessAs,
                    companyType: res.data.companyType,
                    primaryBusiness: res.data.primaryBusiness,
                    companyWebsite: res.data.companyWebsite,
                    linkedInProfile: res.data.linkedInProfile,
                    title: res.data.title,
                    secondaryEmail: res.data.secondaryEmail,
                    officeNumber: res.data.officeNumber,
                    address: res.data.address,
                    city: res.data.city,
                    state: res.data.state,
                    postalCode: res.data.postalCode,
                    country: res.data.country
                });
            } else {
                alert('Error');
                console.log(res.error)
            }
        })
    }
}

export const saveProfileDetails = (userData) => {
    return(dispatch, getState) => {
        PostData('user/update-profile', userData).then((result) => {
            let res = result;
            if(res.status === true) {
                alert('Updated Profile Data');
                dispatch({
                    type: 'GET_PROFILE_DETAILS',
                    companyName: userData.companyName,
                    doingBusinessAs: userData.doingBusinessAs,
                    companyType: userData.companyType,
                    primaryBusiness: userData.primaryBusiness,
                    companyWebsite: userData.companyWebsite,
                    linkedInProfile: userData.linkedInProfile,
                    title: userData.title,
                    secondaryEmail: userData.secondaryEmail,
                    officeNumber: userData.officeNumber,
                    address: userData.address,
                    city: userData.city,
                    state: userData.state,
                    postalCode: userData.postalCode,
                    country: userData.country
                });
            } else {
                alert('Error');
                console.log(res.error)
            }
        })
    }
}

export const saveBankDetails = (userData) => {
    return(dispatch, getState) => {
        PostData('user/update-bank-details', userData).then((result) => {
            let res = result;
            if(res.status === true) {
                alert('Updated Bank Data');
                dispatch({
                    type: 'GET_BANK_DETAILS',
                    taxType: userData.taxType,
                    taxId: userData.taxId,
                    accountNumber: userData.accountNumber,
                    bankName: userData.bankName,
                    branchAddress: userData.branchAddress,
                    accountType: userData.accountType,
                    accountHolderName: userData.accountHolderName,
                    routingNumber: userData.routingNumber,
                    paypalId: userData.paypalId,
                    swiftCode: userData.swiftCode
                });
            } else {
                alert('Error');
                console.log(res.error)
            }
        })
    }
}

export const getBankDetails = (userData) => {
    return(dispatch, getState) => {
        PostData('user/get-bank-details', userData).then((result) => {
            let res = result;
            if(res.status === true) {
                alert('Got Bank Data');
                dispatch({
                    type: 'GET_BANK_DETAILS',
                    taxType: res.data.taxType,
                    taxId: res.data.taxId,
                    accountNumber: res.data.accountNumber,
                    bankName: res.data.bankName,
                    branchAddress: res.data.branchAddress,
                    accountType: res.data.accountType,
                    accountHolderName: res.data.accountHolderName,
                    routingNumber: res.data.routingNumber,
                    paypalId: res.data.paypalId,
                    swiftCode: res.data.swiftCode
                });
            } else {
                alert('Error');
                console.log(res.error)
            }
        })
    }
}