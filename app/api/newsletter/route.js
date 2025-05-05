export async function POST(request) {
    try {
        const {
            email,
            name
        } = await request.json();

        if (!email) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Email is required'
                }), {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        // MailerLite API documentation: https://developers.mailerlite.com/docs/
        const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
        const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID || ''; // Your newsletter group ID

        if (!MAILERLITE_API_KEY) {
            console.error('MailerLite API key is not set');
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Newsletter service configuration error'
                }), {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        // MailerLite API endpoint to add a subscriber
        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`
            },
            body: JSON.stringify({
                email: email,
                fields: {
                    name: name || ''
                },
                groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : [],
                status: 'active'
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('MailerLite API error:', data);
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Error subscribing to newsletter',
                    error: data.message || 'Unknown error'
                }), {
                    status: response.status,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Successfully subscribed to newsletter'
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Error processing your request'
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}