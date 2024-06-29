
export default function FullDate({ dateString }) {
    const date = new Date(dateString)
    const monthNames = ["January", "February", "March", "April", 
        "May", "June", "July", "August", 
        "September", "October", "November", "December"
    ]
    const formatted_date = new Intl.DateTimeFormat('en-GB', {dateStyle: 'full'}).format(date)
    return <p>{formatted_date}</p>;
}