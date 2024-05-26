'use server'
export default async function mailchimpSubmit(email: string) {
    if (!email) {
        return { error: 'Email is required' };
    }

    const ENDPOINT = process.env.MAILCHIMP_ENDPOINT || "";
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    
    try {
        const response = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + API_KEY
            },
            body: JSON.stringify({ email })
        });
        console.log(response);

        if (!response.ok) {
            const errorDetails = await response.json();
            console.log({ error: errorDetails, status: response.status });
            return { error: errorDetails, status: response.status };
        }

        const data = await response.json();
        console.log(data);
        return { data, status: 200 };

    } catch (error) {
        console.log(error);
        console.log("Error");
        return { error: 'Internal Server Error', status: 500 };
    }
}
