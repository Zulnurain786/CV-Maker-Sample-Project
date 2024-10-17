import User from '@/models/User';
import Application from '@/models/Application'; // Corrected import
const { connectDb } = require("@/helper/db");
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';


export const config = {
    api: {
        bodyParser: false,
    },
};


const deletefile = async (id) => {
    if (id) {
        const existingImageUrl = id;
        // console.log(existingImageUrl);
        // return;
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/deleteblobobject?url=${encodeURIComponent(existingImageUrl)}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Failed to delete blob:', error);
        }
    }
}
const handler = async (req, res) => {
    // console.log("IDDDD",req);

    await connectDb();

    if (req.method === "GET") {

        const IDToDelete = req.query.id;
        // const { searchParams } = new URL(req.url);
        // const IDToDelete = searchParams.get('id');
        // console.log("IDDDD",IDToDelete);
        const cookies = parseCookies({ req });
        const token = cookies.token;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Not authenticated' });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }

        const id = decoded.id;
        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const Applicationforblob = await Application.findOne({ _id: IDToDelete });
        if (!Applicationforblob) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }
        if (Applicationforblob.inputfoto) {
                deletefile(Applicationforblob.inputfoto);
        }
        if (Applicationforblob.applicationImg) {
                deletefile(Applicationforblob.applicationImg);
        }
        if (Applicationforblob.signatureData) {
            deletefile(Applicationforblob.signatureData);
        }
        if (Applicationforblob.salarystatementlast) {
            deletefile(Applicationforblob.salarystatementlast);
        }
        if (Applicationforblob.salarystatementbefore) {
            deletefile(Applicationforblob.salarystatementbefore);
        }
        if (Applicationforblob.salarystatementago) {
            deletefile(Applicationforblob.salarystatementago);
        }
        if (Applicationforblob.residencepermit) {
            deletefile(Applicationforblob.residencepermit);
        }
        if (Applicationforblob.identificationdocument) {
            deletefile(Applicationforblob.identificationdocument);
        }
        if (Applicationforblob.shortvideo) {
            deletefile(Applicationforblob.shortvideo);
        }
        if (Applicationforblob.currentSchufareport) {
            deletefile(Applicationforblob.currentSchufareport);
        }
        if (Applicationforblob.rentalschoolfree) {
            deletefile(Applicationforblob.currentSchufareport);
        }
        

        const deletedApplication = await Application.findOneAndDelete({ _id: IDToDelete });
        if (!deletedApplication) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }

        // If application deleted successfully, return success response
        return res.status(200).json({ success: true, message: 'Application deleted successfully' });

    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
};

export default handler;
