import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';
const {connectDb}  = require("@/helper/db");
import Application from '@/models/Application';
import TwoPersonApplication from '@/models/Twopersonapplication';
import User from '@/models/User';

const handler = async (req, res) => {
  try {
    await connectDb();

    if (req.method === 'GET') {
      // Get token from cookies
      const cookies = parseCookies({ req });
      const token = cookies.token;

      if (!token) {
        return res.status(401).json({ success: false, message: 'Not authenticated' });
      }

      // Decode token to get user information
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userEmail = decoded.id;

      // Fetch the user from the database using the email
      const user = await User.findOne({ _id: userEmail });

      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      // Fetch the profile for the user
      const profile = await Application.find({ userId: user._id });
      const twopersonApplication = await TwoPersonApplication.find({ userId: user._id });
      
      
      
      // // Process each application
      // profile.forEach(app => {
      //   // Log the full application object to inspect its structure
      //   const rawApp = app.toObject();
      //   console.log("Family ID:", rawApp.familyid);
      // });


      // // Process applications
      // const groupedApplications = {};
      // const singleApplications = [];

      // profile.forEach(app => {
      //   const rawApp = app.toObject();


      //   if (rawApp.familyid) {
      //     if (!groupedApplications[rawApp.familyid]) {
      //       groupedApplications[rawApp.familyid] = [];
      //     }
      //     groupedApplications[rawApp.familyid].push(rawApp);
      //   } else {
      //     singleApplications.push(rawApp);
      //   }
      // });

      // // Combine applications with the same familyid
      // const combinedApplications = Object.keys(groupedApplications).map(familyid => ({
      //   familyId: familyid,
      //   applications: groupedApplications[familyid], // Use lowercase 'familyid' to match
      // }));

      // // Combine single applications and grouped applications
      // const finalApplications = [...combinedApplications, ...singleApplications];


      // console.log(finalApplications);

            


      if (!profile || profile.length === 0) {
        return res.status(404).json({ success: false, message: 'Application not found' });
      }

      // Send the profile data
      // console.log(profile);
      // res.status(200).json(profile);
      res.status(200).json({
        profile: profile,
        twoPersonApplication: twopersonApplication
      });

    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

export default handler;
