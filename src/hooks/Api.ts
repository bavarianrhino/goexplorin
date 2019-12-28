import { UserSession } from "blockstack";
import { AppConfig } from "blockstack";
// import { appConfig } from '../utils/constants';
export const useApi = () => {
    const appConfig = new AppConfig(['store_write', 'publish_data'])
    const session = new UserSession({ appConfig });
    const user = 'Sign In'
    return {
        session,
        user
    };
};
// const user = session.loadUserData().username.split(".id")[0];