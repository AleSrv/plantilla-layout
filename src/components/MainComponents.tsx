//src\components\MainComponents.tsx
import { useState } from "react";

const MainComponents: React.FC = () => {
    const [count, setCount] = useState<number>(0); // Tipando el estado

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Contenido Principal</h2>
            <p>Este es el contenido principal de la aplicación.</p>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setCount(count + 1)}
            >
                Contador: {count}
            </button>
        </div>
    );
};

export default MainComponents;
