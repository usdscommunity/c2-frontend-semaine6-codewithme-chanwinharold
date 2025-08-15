import "../styles/Sidebar.css"
import Step from "./Step.jsx";

function Sidebar() {
    const Steps = [
        {
            number: 1,
            title: "your info"
        },
        {
            number: 2,
            title: "select plan"
        },
        {
            number: 3,
            title: "add-ons"
        },
        {
            number: 4,
            title: "summary"
        },
    ]

    return (
        <div className="flex flex-col w-xs gap-4 rounded-md p-8 bg-[url(/src/assets/images/bg-sidebar-desktop.svg)] bg-cover bg-center bg-no-repeat">
            {
                Steps.map( ({number, title}) => (
                    <Step key={number} number={number} title={title} />
                ))
            }
        </div>
    )
}

export default Sidebar
