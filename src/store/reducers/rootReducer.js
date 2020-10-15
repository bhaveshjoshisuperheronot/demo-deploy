import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['email', 'id', 'mobile', 'name', 'redirect']
}

const detailsConfig = {
  key: 'userData',
  storage,
  whitelist: ['companyName','doingBusinessAs','companyType','primaryBusiness','companyWebsite','linkedInProfile','title','secondaryEmail','officeNumber','address',
    'city','state','postalCode','country','taxType','taxId','accountNumber','bankName','branchAddress','accountType','accountHolderName','routingNumber','paypalId','swiftCode','callGetApi']
}

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    userData: persistReducer(detailsConfig, dashboardReducer)
});

export default rootReducer;