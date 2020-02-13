// TODO: Replace with React.createContext once we can assume React 16+
import createContext from "mini-create-react-context";

const createNamedContext = name => {
    console.log("createContext===>", createContext)
    const context = createContext();
    context.displayName = name;
    // console.log("=====> name", name);
    return context;
};

const context = /*#__PURE__*/ createNamedContext("Router");
export default context;
