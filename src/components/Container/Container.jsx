
const Container = ({children}) => {
    return (
        <div className="lg:max-w-screen-xl w-full mx-auto px-6 lg:px-0">
            {children}
        </div>
    );
};

export default Container;