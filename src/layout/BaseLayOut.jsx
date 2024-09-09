import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const BaseLayOut = ( {children} ) => {

    return(
        <>
        <Header />
        
        {children}
        
        <Footer />
        </>
    );
};

export default BaseLayOut