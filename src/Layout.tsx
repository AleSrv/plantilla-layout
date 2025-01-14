import { ReactNode } from "react";

interface LayoutProps {
    header: ReactNode;
    aside: ReactNode;
    main: ReactNode;
    footer: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ header, aside, main, footer }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 text-white p-4">{header}</header>

            <div className="flex flex-1">
                <aside className="hidden md:block bg-gray-200 w-64 p-4">{aside}</aside>

                <main className="flex-1 p-4">{main}</main>
            </div>

            <footer className="bg-gray-800 text-white p-4 text-center">
                {footer}
            </footer>
        </div>
    );
};

export default Layout;
