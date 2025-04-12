export default async (req, res) => {
  if (req.method === 'POST') {
    console.log('收到数据：', req.body);
    return res.status(200).json({ success: true });
  }
  return res.status(405).end();
};
