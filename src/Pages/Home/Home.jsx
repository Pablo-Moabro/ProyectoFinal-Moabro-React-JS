import "./Home.css"
import banner from "../../assets/banners/BannerVicusExtremis.png"
import asusLogo from "../../assets/logo-marcas/asus-logo-computer.jpg"
import msiLogo from "../../assets/logo-marcas/msi-category.png"
import zotacLogo from "../../assets/logo-marcas/zotac-category.png"
import { Link } from "react-router-dom"



const Home = () => {
    return(
        <main className="home">
            <section className="home__banner">
                <picture className="home__banner--picture">
                    <img className="home__banner--picture--img" src={banner} alt="banner vicius extremis" />
                </picture>
            </section>
            
            <section className="category">
                <Link to="/store/category/asus">
                <picture className="category-card">
                    <img className="category-card__img" src={asusLogo} alt="asus" />
                </picture>
                </Link>
                <Link to="/store/category/msi">
                <picture className="category-card">
                    <img className="category-card__img" src={msiLogo} alt="msi" />
                </picture>
                </Link>
                <Link to="/store/category/zotac">
                <picture className="category-card">
                    <img className="category-card__img" src={zotacLogo} alt="" />
                </picture>
                </Link>
            </section>
        </main>
    );
};


export default Home;




