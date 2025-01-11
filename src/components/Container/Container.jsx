
const Container = ({children}) => {
    return (
        <div className="lg:max-w-screen-xl w-full mx-auto px-4 lg:px-6">
            {children}
        </div>
    );
};

export default Container;