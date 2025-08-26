import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const LayOut = ({ children }) => {
    return (
        <>
            <Header />
            <Menu />
                {children}
            <Footer />
        </>
    );
};
export default LayOut;