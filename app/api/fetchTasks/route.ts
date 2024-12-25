import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    try {

        let headersList = {
            "Accept": "*/*"
        }

        let reqOptions = {
            url: `http://192.168.1.12/printing/api/get_tasks.php`,
            method: "GET",
            headers: headersList,
        }

        let response = await axios.request(reqOptions);

        return NextResponse.json({ data: response.data }, { status: 200 })
        // Handle success as needed
    }
    catch (error) {
        return NextResponse.json({ token: `error` }, { status: 500 })
    }
}
