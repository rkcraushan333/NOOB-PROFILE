import React, { useState, useEffect } from 'react'

export default function Profile(props) {
    const [detail, setDetail] = useState({});
    const { uname } = props;
    const api = `https://codeforces.com/api/user.info?handles=${uname}`;
    const fetchData = async () => {
        try {
            const response = await fetch(api);
            if (!response.ok) {
                throw Error('Nework error');
            }
            const data = await response.json();
            setDetail(data.result[0]);
            // console.log(data);
        }
        catch (error) {
            console.log("error fetching data", error);
        }
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <img src={detail.avatar}></img>
            <p>UserName = {detail.handle} <br />
                Name = {detail.firstName} {detail.lastName} <br />
                Rating = {detail.rating} Max({detail.maxRating})
            </p>
        </div >
    )
}
