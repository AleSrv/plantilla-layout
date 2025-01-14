//src\components\SidebarComponents.tsx

const SidebarComponents: React.FC = () => {
    return (
        <nav>
            <ul className="space-y-2">
                <li>
                    <a href="#home" className="text-blue-600 hover:underline">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-blue-600 hover:underline">
                        Acerca de
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-blue-600 hover:underline">
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SidebarComponents;
