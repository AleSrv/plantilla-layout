//src\components\HeaderComponents.tsx

const HeaderComponents: React.FC = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mi Aplicación</h1>
            <button className="md:hidden bg-blue-500 text-white px-4 py-2 rounded">
                Menú
            </button>
        </div>
    );
};

export default HeaderComponents;
