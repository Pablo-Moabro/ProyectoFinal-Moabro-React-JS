import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import '././BaseLayOut.css'

const BaseLayOut = ( {children} ) => {

    return(
        <div className="page-container">
        <Header />
        
        <main className="content">
        {children}
        </main>

        
        <Footer />
        </div>
    );
};

export default BaseLayOut