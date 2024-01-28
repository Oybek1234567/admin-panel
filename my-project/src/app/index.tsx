import AppRouters from "./AppRouters/AppRouters";
import AuthRouters from "./AuthRouters/AuthRouters";

const App = () => {
    const isLoggin = true;
    return isLoggin ? <AppRouters /> : <AuthRouters />;
};
export default App;
