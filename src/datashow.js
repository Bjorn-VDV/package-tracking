import React from "react";

export default function Datashow({ data, togglePackage })
{
    if (data.length !== 0)
    {
        let handleChange = (change) =>
        {
            togglePackage(change.target.value);
        }

        return (
            <select name="name" onChange={handleChange}>
                {data.map(name =>
                    <option key={name.parcel_id} value={name.parcel_id}>Package {name.id}, {name.sender}</option>
                )};
            </select>
        )
    }
    else return "Loading..."
}