import axios from 'axios';
import {  NextResponse } from 'next/server';

export async function POST() {
    const reqOptions = {
        url: `http://192.168.1.12/printing/api/get_tasks.php`,
        method: "GET"
    };

    const response = await axios.request(reqOptions);

    return NextResponse.json(
        { data: response.data },
        { status: 200 } // Set the status here correctly
    );
}
