
import axios from "axios";



export const registerCandidate = async () => {

  try {

    const response = await axios.post("http://20.244.56.144/evaluation-service/register", {

      email: "your_email@example.com",

      name: "Your Name",

      mobileNo: "9999999999",

      githubUsername: "yourGithub",

      rollNo: "yourRollNo",

      accessCode: "xgAsNC", // From your test dashboard

    });



    console.log("✅ Registered:", response.data);

    return response.data;

  } catch (error: any) {

    console.error("❌ Registration failed:", error.response?.data || error.message);

  }

};
export{};