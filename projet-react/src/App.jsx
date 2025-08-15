import './styles/App.css'

import Sidebar from "./components/Sidebar.jsx";
import Form from "./components/Form.jsx";

function App() {

    return (
        <main className="bg-white max-w-3xl min-w-xl min-h-96 rounded-md flex gap-8 p-4">
            <Sidebar />
            <Form />
        </main>
    )
}

export default App
