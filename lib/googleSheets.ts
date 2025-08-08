// lib/googleSheets.ts
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new JWT({
  email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
  key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes,
});

const sheets = google.sheets({ version: 'v4', auth });

const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
const defaultSheetName = process.env.NEXT_PUBLIC_GOOGLE_SHEET_NAME || 'tuki';

export async function appendRomanticConfig(config: any, sheetName: string = defaultSheetName) {
  try {
    const values: any[][] = [
      [
        config.title,
        JSON.stringify(config.phases),
        JSON.stringify(config.gifs),
        JSON.stringify(config.settings),
        JSON.stringify(config.customization)
      ]
    ];

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${sheetName}!A1:E1`, // Overwrites first row, columns A to E
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return response.data;
  } catch (error) {
    console.error('Error overwriting romantic config:', error);
    throw new Error('Failed to overwrite romantic config in Google Sheet');
  }
}

export async function readRomanticConfigs(sheetName: string = defaultSheetName) {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${sheetName}!A1:Z1000`,
    });

    const rows = res.data.values;
    if (!rows || rows.length < 1) return [];

    return rows.map((row) => {
      return {
        title: row[0],
        phases: JSON.parse(row[1] || '[]'),
        gifs: JSON.parse(row[2] || '[]'),
        settings: JSON.parse(row[3] || '{}'),
        customization: JSON.parse(row[4] || '{}'),
      };
    });
  } catch (error) {
    console.error('Error reading romantic configs:', error);
    throw new Error('Failed to read romantic configs from Google Sheet');
  }
}
