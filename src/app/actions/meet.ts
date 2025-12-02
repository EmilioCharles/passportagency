'use server';

import { google } from 'googleapis';

export async function generateMeeting() {
    try {
        // Check if credentials exist
        if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
            console.warn('Google Credentials not found. Returning mock link for frontend testing.');
            // Return a mock link if credentials are missing, so frontend work can proceed
            return {
                success: true,
                link: 'https://meet.google.com/abc-defg-hij-mock',
                mock: true
            };
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });

        const calendar = google.calendar({ version: 'v3', auth });

        const event = {
            summary: 'Client Consultation',
            description: 'Generated via App',
            start: {
                dateTime: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
                timeZone: 'UTC',
            },
            end: {
                dateTime: new Date(Date.now() + 7200000).toISOString(), // 2 hours from now
                timeZone: 'UTC',
            },
            conferenceData: {
                createRequest: {
                    requestId: Math.random().toString(36).substring(7),
                    conferenceSolutionKey: { type: 'hangoutsMeet' },
                },
            },
        };

        const response = await calendar.events.insert({
            calendarId: 'primary',
            requestBody: event,
            conferenceDataVersion: 1,
        });

        const meetLink = response.data.conferenceData?.entryPoints?.[0]?.uri;

        if (!meetLink) {
            throw new Error('No meet link generated');
        }

        return { success: true, link: meetLink, mock: false };

    } catch (error) {
        console.error('Error creating event:', error);
        return { success: false, error: 'Failed to generate meeting link' };
    }
}
