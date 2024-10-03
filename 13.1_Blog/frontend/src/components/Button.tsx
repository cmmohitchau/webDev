export default function Button({label, onClick} : {label : string , onClick : React.MouseEventHandler<HTMLButtonElement> }) {
    return <button onClick={onClick} type="button" className=" w-full text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-4">{label}</button>
}