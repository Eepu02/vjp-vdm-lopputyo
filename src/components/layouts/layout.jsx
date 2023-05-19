import React from "react";
import Header from "../header";
import Footer from "../footer";

/* 
This layout is used to wrap all pages to provide them
with common components, such as a header and a footer.
The page content is inside the main tags as that is
the content that will differ from page to page.
*/
const Layout = ({ children, className }) => {
    return (
        <>
            <Header />
            <main className={className}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
