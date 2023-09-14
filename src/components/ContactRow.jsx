

export default function ContactRow({name,email,phone,selectedContact}){
    return(
        <>
        
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <button>More Details</button>
        
        </>
    )
}