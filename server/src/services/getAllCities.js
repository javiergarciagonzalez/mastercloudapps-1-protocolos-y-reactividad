import fetch from 'node-fetch';

export default async function (req, res) {
    const result = await fetch('http://localhost:8080/api/topographicdetails/');
    const data = await result.json();
    res.json(data);
}
