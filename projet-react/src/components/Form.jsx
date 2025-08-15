import {useState} from "react";

function Form() {
    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")

    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPhoneValid, setIsPhoneValid] = useState(true)

    const regex = new RegExp("^[\\w-\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    const regexPhone = new RegExp("^[0-9]{9}$")

    const handleNameChange = (e) => {
        setNameValue(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)

        if (regex.test(emailValue)) {
            return setIsEmailValid(true)
        } return setIsEmailValid(false)
    }
    const handlePhoneChange = (e) => {
        setPhoneValue(e.target.value)

        if (regexPhone.test(phoneValue)) {
            return setIsPhoneValid(true)
        } return setIsPhoneValid(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (regex.test(emailValue)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }

        if (nameValue.length === 0) {
            setIsNameValid(false)
        } else {
            setIsNameValid(true)
        }

        if (regexPhone.test(phoneValue)) {
            setIsPhoneValid(true)
        } else {
            setIsPhoneValid(false)
        }
    }

    return (
        <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-primary-blue-950">Personal info</h1>
                <p className="text-neutral-grey-500">Please provide your name, email address, and phone number.</p>
            </div>

            <form onSubmit={handleSubmit} className="h-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input value={nameValue} onChange={handleNameChange} className="h-10 px-4 outline-none border-1 border-neutral-grey-500 rounded-sm" id="name" type="text" placeholder="e.g. Stephen King" />
                    <span className="text-primary-red-500 text-sm">{ !isNameValid ? "This field cannot be empty" : "" }</span>
                </div>
                <div className=" flex flex-col gap-2">
                    <label htmlFor="email">Email Address</label>
                    <input value={emailValue} onChange={handleEmailChange} className="h-10 px-4 outline-none border-1 border-neutral-grey-500 rounded-sm" id="email" type="email" placeholder="e.g. stephenking@lorem.com" />
                    <span className="text-primary-red-500 text-sm">{ !isEmailValid && "Please enter a valid email address" }</span>
                </div>
                <div className=" flex flex-col gap-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input value={phoneValue} onChange={handlePhoneChange} className="h-10 px-4 outline-none border-1 border-neutral-grey-500 rounded-sm" id="phone" type="tel" placeholder="e.g. +1 234 567 890" />
                    <span className="text-primary-red-500 text-sm">{ !isPhoneValid && "Please enter a valid phone number" }</span>
                </div>

                <button className="w-fit hover:cursor-pointer transition-all hover:bg-primary-purple-600 px-8 py-2 bg-primary-blue-950 self-end  rounded-md text-white" type="submit">Next Step</button>
            </form>
        </div>
    );
}

export default Form;