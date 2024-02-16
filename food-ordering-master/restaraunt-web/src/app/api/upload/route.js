import uniqid from "uniqid";
import axios from "axios";

export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    const file = data.get("file");
    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    };
    const buffer = Buffer.concat(chunks);
    const gitdata = {
      message: "file uploaded",
      content: buffer.toString('base64')
    };
    const ext = file.name.split(".").slice(-1)[0];
    const newFileName = uniqid() + "." + ext;
    try {
      const config = {
        method: "put",
        url: `https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/contents/${newFileName}`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          'Accept': 'application/vnd.github.v3+json'
        },
        
        data: gitdata,
      };
  
      const response = await axios(config);
      if (response.status === 201) {
        const link = `https://raw.githubusercontent.com/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/main/${newFileName}`;
        return Response.json(link);
      }
    } catch (error) {
      console.error(error);
      return Response.json(false);
    }
  }
  return Response.json(true);
}