import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import TwoPersonApplication from "@/models/Twopersonapplication";
import Application from "@/models/Application";
import jwt from "jsonwebtoken";
import { parseCookies } from "nookies";
import { connectDb } from "@/helper/db";
import User from "@/models/User"; // Ensure you have the User model
import { v4 as uuidv4 } from "uuid";
import { put } from "@vercel/blob";
import { useRouter } from "next/router";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  await connectDb();
  // const router = useRouter();

  if (req.method === "POST") {
    const cookies = parseCookies({ req });
    const token = cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userEmail = decoded.id; // Assuming your token payload has the user email

    // Fetch the user from the database using the email
    const user = await User.findOne({ _id: userEmail });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const form = new IncomingForm();

    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing the form:", err);
        return res
          .status(500)
          .json({ success: false, error: "Error parsing the form" });
      }

      const first_person_vorname = Array.isArray(fields.first_person_vorname) ? fields.first_person_vorname[0] : fields.first_person_vorname;
      const second_person_vorname = Array.isArray(fields.second_person_vorname) ? fields.second_person_vorname[0] : fields.second_person_vorname;

      const first_person_nachname = Array.isArray(fields.first_person_nachname) ? fields.first_person_nachname[0] : fields.first_person_nachname;
      const second_person_nachname = Array.isArray(fields.second_person_nachname) ? fields.second_person_nachname[0] : fields.second_person_nachname;

      const first_person_strabe = Array.isArray(fields.first_person_strabe) ? fields.first_person_strabe[0] : fields.first_person_strabe;
      const second_person_strabe = Array.isArray(fields.second_person_strabe) ? fields.second_person_strabe[0] : fields.second_person_strabe;

      const first_person_hausnummer = Array.isArray(fields.first_person_hausnummer) ? fields.first_person_hausnummer[0] : fields.first_person_hausnummer;
      const second_person_hausnummer = Array.isArray(fields.second_person_hausnummer) ? fields.second_person_hausnummer[0] : fields.second_person_hausnummer;

      const first_person_PLZ = Array.isArray(fields.first_person_PLZ) ? fields.first_person_PLZ[0] : fields.first_person_PLZ;
      const second_person_PLZ = Array.isArray(fields.second_person_PLZ) ? fields.second_person_PLZ[0] : fields.second_person_PLZ;

      const first_person_Ort = Array.isArray(fields.first_person_Ort) ? fields.first_person_Ort[0] : fields.first_person_Ort;
      const second_person_Ort = Array.isArray(fields.second_person_Ort) ? fields.second_person_Ort[0] : fields.second_person_Ort;

      const first_person_email = Array.isArray(fields.first_person_email) ? fields.first_person_email[0] : fields.first_person_email;
      const second_person_email = Array.isArray(fields.second_person_email) ? fields.second_person_email[0] : fields.second_person_email;

      const first_person_tel = Array.isArray(fields.first_person_tel) ? fields.first_person_tel[0] : fields.first_person_tel;
      const second_person_tel = Array.isArray(fields.second_person_tel) ? fields.second_person_tel[0] : fields.second_person_tel;

      const first_person_geburtsdatum = Array.isArray(fields.first_person_geburtsdatum) ? fields.first_person_geburtsdatum[0]
        : fields.first_person_geburtsdatum;
      const second_person_geburtsdatum = Array.isArray(fields.second_person_geburtsdatum) ? fields.second_person_geburtsdatum[0]
        : fields.second_person_geburtsdatum;

      const first_person_ausgeübterBeruf = Array.isArray(fields.first_person_ausgeübterBeruf)
        ? fields.first_person_ausgeübterBeruf[0]
        : fields.first_person_ausgeübterBeruf;
      const second_person_ausgeübterBeruf = Array.isArray(fields.second_person_ausgeübterBeruf)
        ? fields.second_person_ausgeübterBeruf[0]
        : fields.second_person_ausgeübterBeruf;

      const first_person_arbeitgeber = Array.isArray(fields.first_person_arbeitgeber)
        ? fields.first_person_arbeitgeber[0]
        : fields.first_person_arbeitgeber;
      const second_person_arbeitgeber = Array.isArray(fields.second_person_arbeitgeber)
        ? fields.second_person_arbeitgeber[0]
        : fields.second_person_arbeitgeber;

      const first_person_income = Array.isArray(fields.first_person_income)
        ? fields.first_person_income[0]
        : fields.first_person_income;
      const second_person_income = Array.isArray(fields.second_person_income)
        ? fields.second_person_income[0]
        : fields.second_person_income;

      const first_person_textarea1 = Array.isArray(fields.first_person_textarea1)
        ? fields.first_person_textarea1[0]
        : fields.first_person_textarea1;
      const second_person_textarea1 = Array.isArray(fields.second_person_textarea1)
        ? fields.second_person_textarea1[0]
        : fields.second_person_textarea1;


      const first_person_textarea2 = Array.isArray(fields.first_person_textarea2)
        ? fields.first_person_textarea2[0]
        : fields.first_person_textarea2;
        const second_person_textarea2 = Array.isArray(fields.second_person_textarea2)
        ? fields.second_person_textarea2[0]
        : fields.second_person_textarea2;

      const first_person_textarea3 = Array.isArray(fields.first_person_textarea3)
        ? fields.first_person_textarea3[0]
        : fields.first_person_textarea3;
      const second_person_textarea3 = Array.isArray(fields.second_person_textarea3)
        ? fields.second_person_textarea3[0]
        : fields.second_person_textarea3;

      const first_person_textarea4 = Array.isArray(fields.first_person_textarea4)
        ? fields.first_person_textarea4[0]
        : fields.first_person_textarea4;
      const second_person_textarea4 = Array.isArray(fields.second_person_textarea4)
        ? fields.second_person_textarea4[0]
        : fields.second_person_textarea4;

      const first_person_textarea5 = Array.isArray(fields.first_person_textarea5)
        ? fields.first_person_textarea5[0]
        : fields.first_person_textarea5;
      const second_person_textarea5 = Array.isArray(fields.second_person_textarea5)
        ? fields.second_person_textarea5[0]
        : fields.second_person_textarea5;

    //   const second_person_textarea5 = Array.isArray(fields.second_person_textarea5)
    //     ? fields.second_person_textarea5[0]
    //     : fields.second_person_textarea5;

      const first_person_noofpeople = Array.isArray(fields.first_person_noofpeople)
        ? fields.first_person_noofpeople[0]
        : fields.first_person_noofpeople;
      const second_person_noofpeople = Array.isArray(fields.second_person_noofpeople)
        ? fields.second_person_noofpeople[0]
        : fields.second_person_noofpeople;

      const first_person_status = Array.isArray(fields.first_person_status)
        ? fields.first_person_status[0]
        : fields.first_person_status;
      const second_person_status = Array.isArray(fields.second_person_status)
        ? fields.second_person_status[0]
        : fields.second_person_status;


      const first_person_currentactivity = Array.isArray(fields.first_person_currentactivity)
        ? fields.first_person_currentactivity[0]
        : fields.first_person_currentactivity;
      const second_person_currentactivity = Array.isArray(fields.second_person_currentactivity)
        ? fields.second_person_currentactivity[0]
        : fields.second_person_currentactivity;


      const first_person_currentemployer = Array.isArray(fields.first_person_currentemployer)
        ? fields.first_person_currentemployer[0]
        : fields.first_person_currentemployer;
      const second_person_currentemployer = Array.isArray(fields.second_person_currentemployer)
        ? fields.second_person_currentemployer[0]
        : fields.second_person_currentemployer;

      const first_person_incomee = Array.isArray(fields.first_person_incomee)
        ? fields.first_person_incomee[0]
        : fields.first_person_incomee;
      const second_person_incomee = Array.isArray(fields.second_person_incomee)
        ? fields.second_person_incomee[0]
        : fields.second_person_incomee;

      const first_person_fläche = Array.isArray(fields.first_person_fläche)
        ? fields.first_person_fläche[0]
        : fields.first_person_fläche;
      const second_person_fläche = Array.isArray(fields.second_person_fläche)
        ? fields.second_person_fläche[0]
        : fields.second_person_fläche;

      const first_person_anzahlderzimmer = Array.isArray(fields.first_person_anzahlderzimmer)
        ? fields.first_person_anzahlderzimmer[0]
        : fields.first_person_anzahlderzimmer;

      const second_person_anzahlderzimmer = Array.isArray(fields.second_person_anzahlderzimmer)
        ? fields.second_person_anzahlderzimmer[0]
        : fields.second_person_anzahlderzimmer;
      //////////first photo

      const first_person_photo = files.first_person_photo;
      let first_person_fullfilename = null;

      if (first_person_photo) {
        // If photo is an array, get the first item
        const first_person_photoFile = Array.isArray(first_person_photo) ? first_person_photo[0] : first_person_photo;

        if (!first_person_photoFile || !first_person_photoFile.filepath || !first_person_photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", first_person_photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(first_person_photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${first_person_photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilename = blob.url;
      }


      const second_person_photo = files.second_person_photo;
      let second_person_fullfilename = null;

      if (second_person_photo) {
        // If photo is an array, get the first item
        const second_person_photoFile = Array.isArray(second_person_photo) ? second_person_photo[0] : second_person_photo;

        if (!second_person_photoFile || !second_person_photoFile.filepath || !second_person_photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", second_person_photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(second_person_photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${second_person_photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilename = blob.url;
      }

      //////////salarystatementlast photo

      const first_person_salarystatementlast = files.first_person_salarystatementlast;
      let first_person_fullfilenamesalarystatementlast = null;

      if (first_person_salarystatementlast) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_salarystatementlast)
          ? first_person_salarystatementlast[0]
          : first_person_salarystatementlast;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenamesalarystatementlast = blob.url;
      }


      const second_person_salarystatementlast = files.second_person_salarystatementlast;
      let second_person_fullfilenamesalarystatementlast = null;

      if (second_person_salarystatementlast) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_salarystatementlast)
          ? second_person_salarystatementlast[0]
          : second_person_salarystatementlast;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenamesalarystatementlast = blob.url;
      }
      //////////salarystatementbefore photo

      const first_person_salarystatementbefore = files.first_person_salarystatementbefore;
      let first_person_fullfilenamesalarystatementbefore = null;

      if (first_person_salarystatementbefore) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_salarystatementbefore)
          ? first_person_salarystatementbefore[0]
          : first_person_salarystatementbefore;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenamesalarystatementbefore = blob.url;
      }



      const second_person_salarystatementbefore = files.second_person_salarystatementbefore;
      let second_person_fullfilenamesalarystatementbefore = null;

      if (second_person_salarystatementbefore) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_salarystatementbefore)
          ? second_person_salarystatementbefore[0]
          : second_person_salarystatementbefore;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenamesalarystatementbefore = blob.url;
      }
      //////////salarystatementago photo

      const first_person_salarystatementago = files.first_person_salarystatementago;
      let first_person_fullfilenamesalarystatementago = null;

      if (first_person_salarystatementago) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_salarystatementago)
          ? first_person_salarystatementago[0]
          : first_person_salarystatementago;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenamesalarystatementago = blob.url;
      }

      const second_person_salarystatementago = files.second_person_salarystatementago;
      let second_person_fullfilenamesalarystatementago = null;

      if (second_person_salarystatementago) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_salarystatementago)
          ? second_person_salarystatementago[0]
          : second_person_salarystatementago;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenamesalarystatementago = blob.url;
      }
      //////////residencepermit photo

      const first_person_residencepermit = files.first_person_residencepermit;
      let first_person_fullfilenameresidencepermit = null;

      if (first_person_residencepermit) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_residencepermit)
          ? first_person_residencepermit[0]
          : first_person_residencepermits;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenameresidencepermit = blob.url;
      }

      const second_person_residencepermit = files.second_person_residencepermit;
      let second_person_fullfilenameresidencepermit = null;

      if (second_person_residencepermit) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_residencepermit)
          ? second_person_residencepermit[0]
          : second_person_residencepermits;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenameresidencepermit = blob.url;
      }
      //////////identificationdocument photo

      const first_person_identificationdocument = files.first_person_identificationdocument;
      let first_person_fullfilenameidentificationdocument = null;

      if (first_person_residencepermit) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_identificationdocument)
          ? first_person_identificationdocument[0]
          : first_person_identificationdocument;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenameidentificationdocument = blob.url;
      }

      const second_person_identificationdocument = files.second_person_identificationdocument;
      let second_person_fullfilenameidentificationdocument = null;

      if (second_person_residencepermit) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_identificationdocument)
          ? second_person_identificationdocument[0]
          : second_person_identificationdocument;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenameidentificationdocument = blob.url;
      }
      //////////shortvideo photo

      const first_person_shortvideo = files.first_person_shortvideo;
      let first_person_fullfilenameshortvideo = null;

      if (first_person_residencepermit) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_shortvideo)
          ? first_person_shortvideo[0]
          : first_person_shortvideo;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenameshortvideo = blob.url;
      }

      const second_person_shortvideo = files.second_person_shortvideo;
      let second_person_fullfilenameshortvideo = null;

      if (second_person_residencepermit) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_shortvideo)
          ? second_person_shortvideo[0]
          : second_person_shortvideo;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenameshortvideo = blob.url;
      }
      //////////currentSchufareport photo

      const first_person_currentSchufareport = files.first_person_currentSchufareport;
      let first_person_fullfilenamecurrentSchufareport = null;

      if (first_person_currentSchufareport) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_currentSchufareport)
          ? first_person_currentSchufareport[0]
          : first_person_currentSchufareport;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenamecurrentSchufareport = blob.url;
      }

      const second_person_currentSchufareport = files.second_person_currentSchufareport;
      let second_person_fullfilenamecurrentSchufareport = null;

      if (second_person_currentSchufareport) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_currentSchufareport)
          ? second_person_currentSchufareport[0]
          : second_person_currentSchufareport;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenamecurrentSchufareport = blob.url;
      }
      //////////currentSchufareport photo

      const first_person_rentalschoolfree = files.first_person_rentalschoolfree;
      let first_person_fullfilenamerentalschoolfree = null;

      if (first_person_rentalschoolfree) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_rentalschoolfree)
          ? first_person_rentalschoolfree[0]
          : first_person_rentalschoolfree;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenamerentalschoolfree = blob.url;
      }

      const second_person_rentalschoolfree = files.second_person_rentalschoolfree;
      let second_person_fullfilenamerentalschoolfree = null;

      if (second_person_rentalschoolfree) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_rentalschoolfree)
          ? second_person_rentalschoolfree[0]
          : second_person_rentalschoolfree;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenamerentalschoolfree = blob.url;
      }

      //////////signatureData photo

      const first_person_signatureData = files.first_person_signatureData;
      let first_person_fullfilenamesignatureData = null;

      if (first_person_signatureData) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(first_person_signatureData)
          ? first_person_signatureData[0]
          : first_person_signatureData;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        first_person_fullfilenamesignatureData = blob.url;
      }

      const second_person_signatureData = files.second_person_signatureData;
      let second_person_fullfilenamesignatureData = null;

      if (second_person_signatureData) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(second_person_signatureData)
          ? second_person_signatureData[0]
          : second_person_signatureData;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        second_person_fullfilenamesignatureData = blob.url;
      }
      //////////applicationIMG photo

      const componentImage = files.componentImage;
      let fullfilenamecomponentImage = null;

      if (componentImage) {
        // If photo is an array, get the first item
        const photoFile = Array.isArray(componentImage)
          ? componentImage[0]
          : componentImage;

        if (!photoFile || !photoFile.filepath || !photoFile.originalFilename) {
          console.error("Filepath or originalFilename missing:", photoFile);
          return res
            .status(400)
            .json({
              success: false,
              error: "Filepath or originalFilename missing",
            });
        }

        const fileContent = fs.readFileSync(photoFile.filepath);
        const uniqueFileName = `${uuidv4()}_${photoFile.originalFilename}`;
        const blob = await put(uniqueFileName, fileContent, {
          access: "public",
        });

        fullfilenamecomponentImage = blob.url;
      }

      try {
        const newForm = new TwoPersonApplication({
          userId: user._id,

          first_person_vorname,
          second_person_vorname,

          first_person_nachname,
          second_person_nachname,
          
          first_person_strabe,
          second_person_strabe,
          
          first_person_hausnummer,
          second_person_hausnummer,

          first_person_PLZ,
          second_person_PLZ,

          first_person_Ort,
          second_person_Ort,

          first_person_email,
          second_person_email,

          first_person_tel,
          second_person_tel,

          first_person_geburtsdatum,
          second_person_geburtsdatum,

          first_person_ausgeübterBeruf,
          second_person_ausgeübterBeruf,

          first_person_arbeitgeber,
          second_person_arbeitgeber,

          first_person_income,
          second_person_income,

          first_person_textarea1,
          second_person_textarea1,

          first_person_textarea2,
          second_person_textarea2,

          first_person_textarea3,
          second_person_textarea3,

          first_person_textarea5,
          second_person_textarea5,

          first_person_textarea4,
          second_person_textarea4,

          first_person_inputfoto: first_person_fullfilename, // Save the URL of the uploaded file
          second_person_inputfoto: second_person_fullfilename, // Save the URL of the uploaded file

          first_person_noofpeople, // Save the URL of the uploaded file
          second_person_noofpeople, // Save the URL of the uploaded file

          first_person_status, // Save the URL of the uploaded file
          second_person_status, // Save the URL of the uploaded file

          first_person_currentactivity, // Save the URL of the uploaded file
          second_person_currentactivity, // Save the URL of the uploaded file

          first_person_currentemployer, // Save the URL of the uploaded file
          second_person_currentemployer, // Save the URL of the uploaded file

          first_person_incomee, // Save the URL of the uploaded file
          second_person_incomee, // Save the URL of the uploaded file

          first_person_fläche,
          second_person_fläche,

          first_person_anzahlderzimmer,
          second_person_anzahlderzimmer,

          first_person_salarystatementlast: first_person_fullfilenamesalarystatementlast,
          second_person_salarystatementlast: second_person_fullfilenamesalarystatementlast,

          first_person_salarystatementbefore: first_person_fullfilenamesalarystatementbefore,
          second_person_salarystatementbefore: second_person_fullfilenamesalarystatementbefore,

          first_person_salarystatementago: first_person_fullfilenamesalarystatementago,
          second_person_salarystatementago: second_person_fullfilenamesalarystatementago,

          first_person_residencepermit: first_person_fullfilenameresidencepermit,
          second_person_residencepermit: second_person_fullfilenameresidencepermit,

          first_person_identificationdocument: first_person_fullfilenameidentificationdocument,
          second_person_identificationdocument: second_person_fullfilenameidentificationdocument,

          first_person_shortvideo: first_person_fullfilenameshortvideo,
          second_person_shortvideo: second_person_fullfilenameshortvideo,

          first_person_currentSchufareport: first_person_fullfilenamecurrentSchufareport,
          second_person_currentSchufareport: second_person_fullfilenamecurrentSchufareport,

          first_person_rentalschoolfree: first_person_fullfilenamerentalschoolfree,
          second_person_rentalschoolfree: second_person_fullfilenamerentalschoolfree,

          first_person_signatureData: first_person_fullfilenamesignatureData,
          second_person_signatureData: second_person_fullfilenamesignatureData,

          applicationImg: fullfilenamecomponentImage,
        });
        await newForm.save();
        // salarystatementago,
        // residencepermit,
        // identificationdocument,
        // shortvideo,
        // currentSchufareport,
        // rentalschoolfree,

        return res
          .status(200)
          .json({ success: true, message: "Form submitted successfully" });
      } catch (error) {
        console.error("Error saving data:", error);
        return res
          .status(500)
          .json({ success: false, error: "Error saving data" });
      }
    });
  } else if (req.method === "GET") {
    // console.log("test");

    const ID = req.query.id;
    const cookies = parseCookies({ req });
    const token = cookies.token;
    // console.log("test");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    const id = decoded.id;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // console.log("test");

    try {
      const application = await Application.findOne({ _id: ID });
      if (!application) {
        return res
          .status(404)
          .json({ success: false, message: "Application not found" });
      }
      return res.status(200).json({ success: true, data: application });
    } catch (e) {
      return res
        .status(401)
        .json({
          success: false,
          message: "Profile image not deleted successfully",
        });
    }
    // console.log("test");
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
};

export default handler;
