// Type for the user profile response
interface UserProfileResponse {
  status: "success";
  user: {
    email: string;
    name: string;
    stack: string;
  };
  timestamp: string;
  fact: string;
}
import express from "express";
import type { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/me", async (req: Request, res: Response<UserProfileResponse>) => {
  try {
    // Fetch random cat fact
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, // timeout after 5s
    });

    const fact: string = response.data?.fact || "Cats are mysterious creatures.";

    const data: UserProfileResponse = {
      status: "success",
      user: {
        email: process.env.EMAIL || "",
        name: process.env.NAME || "",
        stack: process.env.STACK || "",
      },
      timestamp: new Date().toISOString(),
      fact,
    };

    res.status(200).json(data);
  } catch (error: any) {
    console.error("Error fetching cat fact:", error.message);

    const fallback: UserProfileResponse = {
      status: "success",
      user: {
        email: process.env.EMAIL || "",
        name: process.env.NAME || "",
        stack: process.env.STACK || "",
      },
      timestamp: new Date().toISOString(),
      fact: "Unable to fetch a cat fact right now, please try again later.",
    };

    res.status(200).json(fallback);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
