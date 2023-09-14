

export default function AddressView({street,suite,city,zipcode}){
    return(
        <>
       <div>
        {street+", "}
        {suite+", "}
        {city+", "}
        {zipcode}
       </div>
        </>
    )

}