interface Headerprops {
    label  :string
}

export default function Header({label} : Headerprops ) {

    return(
        <>
        <div className="font-bold text-2xl text-center">
            {label}
        </div>

        </>
    )
}