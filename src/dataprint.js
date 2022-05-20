import moment from 'moment';

export default function DataPrint({ packageChoice })
{
    if (packageChoice !== undefined)
    {
        if (packageChoice.notes === undefined || packageChoice.notes === null) packageChoice.notes = "No note has been provided."
        return (
            <li>
                <span><h1>Package {packageChoice.id}, {packageChoice.sender}</h1></span>
                <ul>
                    <li>Sender: <span className="RightSide">{packageChoice.sender}</span></li>
                    <li>Location: <span className="RightSide">{packageChoice.location_name}</span></li>
                    <li>Status: <span className="RightSide">{packageChoice.status}</span></li>
                    <li>Verification Required: <span className="RightSide">{packageChoice.verification_required.toString()}</span></li>
                    <br></br>
                    <li>User Name: <span className="RightSide">{packageChoice.user_name}</span></li>
                    <li>User Phone: <span className="RightSide">{packageChoice.user_phone}</span></li>
                    <br></br>
                    <li>Last updated: <span className="RightSide">{moment(packageChoice.last_updated).format('LLLL')}</span></li>
                    <li>ETA: <span className="RightSide">{moment(packageChoice.eta).format('LLLL')}</span></li>
                    <li className="Note"> <br></br>Notes: <br></br>{packageChoice.notes}</li>
                    <br></br>
                    -- Troubleshooting info Below -- 
                    <li className="Trouble">Parcel ID: {packageChoice.parcel_id}</li>
                    <li className="Trouble">Location ID: {packageChoice.location_id}</li>
                </ul>
            </li>)
    }
    else return (
        <div>
            <br></br>
            Awaiting Input
        </div>)
}