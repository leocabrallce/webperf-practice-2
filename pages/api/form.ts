import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.PASTEBIN_API_KEY;

// send form data to pastebin
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const formData = req.body;
    const response = await fetch('https://pastebin.com/api/api_post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `api_dev_key=${API_KEY}&api_option=paste&api_paste_code=${formData}`,
    });
    const data = await response.text();
    res.status(200).json({ data });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
