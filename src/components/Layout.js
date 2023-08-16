import HeaderElement from "./HeaderElement";
import FooterElement from "./FooterElement";


const Layout = ({ children }) => {
    return(
        <>
         <HeaderElement />
            <main>{children}</main>
           <FooterElement />
        </>
    )
}

export default Layout;