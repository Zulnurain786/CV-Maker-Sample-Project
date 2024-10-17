import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
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

       // Logging fields
        // console.log("Fields:");
        // for (const key in fields) {
        //   if (fields.hasOwnProperty(key)) {
        //     console.log(`${key}: ${Array.isArray(fields[key]) ? fields[key][0] : fields[key]}`);
        //   }
        // }

        // // Logging files
        // console.log("Files:");
        for (const key in files) {
          if (files.hasOwnProperty(key)) {
            // console.log(`${key}:`);
            // console.log(files[key]);
          }
        }

      const applicationid = Array.isArray(fields.applicationid)
        ? fields.applicationid[0]
        : fields.applicationid;

        const id = applicationid;
        const application = await Application.findOne({ _id: id });
        if (!application) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }

      const vorname = Array.isArray(fields.vorname)
        ? fields.vorname[0]
        : fields.vorname;
        if(vorname){
          application.vorname = vorname;
        }
      const nachname = Array.isArray(fields.nachname)
        ? fields.nachname[0]
        : fields.nachname;
        if(nachname){
          application.nachname = nachname;
        }
      const strabe = Array.isArray(fields.strabe)
        ? fields.strabe[0]
        : fields.strabe;
        if(strabe){
          application.strabe = strabe;               
        }
      const hausnummer = Array.isArray(fields.hausnummer)
        ? fields.hausnummer[0]
        : fields.hausnummer;
        if(hausnummer){
          application.hausnummer = hausnummer;
        }
      const PLZ = Array.isArray(fields.PLZ) ? fields.PLZ[0] : fields.PLZ;
      if(PLZ){
        application.PLZ = PLZ;
      }
      const Ort = Array.isArray(fields.Ort) ? fields.Ort[0] : fields.Ort;
      if(Ort){
        application.Ort = Ort;
      }
      const email = Array.isArray(fields.email)
        ? fields.email[0]
        : fields.email;
        if(email){
          application.email = email;
        }
      const tel = Array.isArray(fields.tel) ? fields.tel[0] : fields.tel;
      if(tel){
        application.tel = tel;
      }
      const geburtsdatum = Array.isArray(fields.geburtsdatum)
        ? fields.geburtsdatum[0]
        : fields.geburtsdatum;
        if(geburtsdatum){
          application.geburtsdatum = geburtsdatum;
        }
      const ausgeübterBeruf = Array.isArray(fields.ausgeübterBeruf)
        ? fields.ausgeübterBeruf[0]
        : fields.ausgeübterBeruf;
        if(ausgeübterBeruf){
          application.ausgeübterBeruf = ausgeübterBeruf;
        }
      const arbeitgeber = Array.isArray(fields.arbeitgeber)
        ? fields.arbeitgeber[0]
        : fields.arbeitgeber;
        if(arbeitgeber){
          application.arbeitgeber = arbeitgeber;
        }
      const income = Array.isArray(fields.income)
        ? fields.income[0]
        : fields.income;
        if(income){
          application.income = income;
        }
      const textarea1 = Array.isArray(fields.textarea1)
        ? fields.textarea1[0]
        : fields.textarea1;
        if(textarea1){
          application.textarea1 = textarea1;
        }
      const textarea2 = Array.isArray(fields.textarea2)
        ? fields.textarea2[0]
        : fields.textarea2;
        if(textarea2){
          application.textarea2 = textarea2;
        }
      const textarea3 = Array.isArray(fields.textarea3)
        ? fields.textarea3[0]
        : fields.textarea3;
        if(textarea3){
          application.textarea3 = textarea3;
        }
      const textarea4 = Array.isArray(fields.textarea4)
        ? fields.textarea4[0]
        : fields.textarea4;
        if(textarea4){
          application.textarea4 = textarea4;
        }
      const textarea5 = Array.isArray(fields.textarea5)
        ? fields.textarea5[0]
        : fields.textarea5;
        if(textarea5){
          application.textarea5 = textarea5;
        }
      const noofpeople = Array.isArray(fields.noofpeople)
        ? fields.noofpeople[0]
        : fields.noofpeople;
        if(noofpeople){
          application.noofpeople = noofpeople;
        }
      const status = Array.isArray(fields.status)
        ? fields.status[0]
        : fields.status;
        if(status){
          application.status = status;
        }
      const currentactivity = Array.isArray(fields.currentactivity)
        ? fields.currentactivity[0]
        : fields.currentactivity;
        if(currentactivity){
          application.currentactivity = currentactivity;
        }
      const currentemployer = Array.isArray(fields.currentemployer)
        ? fields.currentemployer[0]
        : fields.currentemployer;
        if(currentemployer){
          application.currentemployer = currentemployer;
        }
      const incomee = Array.isArray(fields.incomee)
        ? fields.incomee[0]
        : fields.incomee;
        if(incomee){
          application.incomee = incomee;
        }
      const fläche = Array.isArray(fields.fläche)
        ? fields.fläche[0]
        : fields.fläche;
        if(fläche){
          application.fläche = fläche;
        }
      const anzahlderzimmer = Array.isArray(fields.anzahlderzimmer)
        ? fields.anzahlderzimmer[0]
        : fields.anzahlderzimmer;
        if(anzahlderzimmer){
          application.anzahlderzimmer = anzahlderzimmer;
        }

      //////////first photo
      const photo = files.photo;
      // console.log(files.photo);
      let fullfilename = null;

      
      if (photo) {
        // console.log(photo)
        // console.log(application.inputfoto)
        if(application.inputfoto){
            deletefile(application.inputfoto);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(photo) ? photo[0] : photo;

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

        fullfilename = blob.url;
        application.inputfoto =  fullfilename;
        // console.log("fullfilename",fullfilename);
      }

      //////////salarystatementlast photo

      const salarystatementlast = files.salarystatementlast;
      let fullfilenamesalarystatementlast = null;

      if (salarystatementlast) {
        if(application.salarystatementlast){
            deletefile(application.salarystatementlast);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(salarystatementlast)
          ? salarystatementlast[0]
          : salarystatementlast;

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

        fullfilenamesalarystatementlast = blob.url;
        application.salarystatementlast =  fullfilenamesalarystatementlast;
        // console.log("fullfilenamesalarystatementlast",fullfilenamesalarystatementlast);

      }

      //////////salarystatementbefore photo

      const salarystatementbefore = files.salarystatementbefore;
      let fullfilenamesalarystatementbefore = null;

      if (salarystatementbefore) {
        if(application.salarystatementbefore){
            deletefile(application.salarystatementbefore);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(salarystatementbefore)
          ? salarystatementbefore[0]
          : salarystatementbefore;

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

        fullfilenamesalarystatementbefore = blob.url;
        application.salarystatementbefore =  fullfilenamesalarystatementbefore;

        // console.log("fullfilenamesalarystatementbefore",fullfilenamesalarystatementbefore);

      }

      //////////salarystatementago photo

      const salarystatementago = files.salarystatementago;
      let fullfilenamesalarystatementago = null;

      if (salarystatementago) {
        if(application.salarystatementago){
            deletefile(application.salarystatementago);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(salarystatementago)
          ? salarystatementago[0]
          : salarystatementago;

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

        fullfilenamesalarystatementago = blob.url;
        application.salarystatementago =  fullfilenamesalarystatementago;

        // console.log("fullfilenamesalarystatementago",fullfilenamesalarystatementago);

      }

      //////////residencepermit photo

      const residencepermit = files.residencepermit;
      let fullfilenameresidencepermit = null;

      if (residencepermit) {
        if(application.residencepermit){
            deletefile(application.residencepermit);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(residencepermit)
          ? residencepermit[0]
          : residencepermit;

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

        fullfilenameresidencepermit = blob.url;
        application.residencepermit =  fullfilenameresidencepermit;
        // console.log("fullfilenameresidencepermit",fullfilenameresidencepermit);
        
      }

      //////////identificationdocument photo

      const identificationdocument = files.identificationdocument;
      let fullfilenameidentificationdocument = null;

      if (identificationdocument) {
        if(application.identificationdocument){
            deletefile(application.identificationdocument);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(identificationdocument)
          ? identificationdocument[0]
          : identificationdocument;

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

        fullfilenameidentificationdocument = blob.url;
        application.identificationdocument =  fullfilenameidentificationdocument;

        // console.log("fullfilenameidentificationdocument",fullfilenameidentificationdocument);

      }

      //////////shortvideo photo

      const shortvideo = files.shortvideo;
      let fullfilenameshortvideo = null;

      if (shortvideo) {
        if(application.shortvideo){
            deletefile(application.shortvideo);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(shortvideo)
          ? shortvideo[0]
          : shortvideo;

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

        fullfilenameshortvideo = blob.url;
        application.shortvideo =  fullfilenameshortvideo;

        // console.log("fullfilenameshortvideo",fullfilenameshortvideo);

      }
      //////////currentSchufareport photo

      const currentSchufareport = files.currentSchufareport;
      let fullfilenamecurrentSchufareport = null;

      if (currentSchufareport) {
        if(application.currentSchufareport){
            deletefile(application.currentSchufareport);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(currentSchufareport)
          ? currentSchufareport[0]
          : currentSchufareport;

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

        fullfilenamecurrentSchufareport = blob.url;
        application.currentSchufareport =  fullfilenamecurrentSchufareport;
        // console.log("fullfilenamecurrentSchufareport",fullfilenamecurrentSchufareport);

      }
      //////////currentSchufareport photo

      const rentalschoolfree = files.rentalschoolfree;
      let fullfilenamerentalschoolfree = null;

      if (rentalschoolfree) {
        if(application.rentalschoolfree){
            deletefile(application.rentalschoolfree);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(rentalschoolfree)
          ? rentalschoolfree[0]
          : rentalschoolfree;

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

        fullfilenamerentalschoolfree = blob.url;
        application.rentalschoolfree =  fullfilenamerentalschoolfree;

        // console.log("fullfilenamerentalschoolfree",fullfilenamerentalschoolfree);

      }

      //////////signatureData photo
      const signatureData = files.signatureData;
      // console.log(files.signatureData);
      let fullfilenamesignatureData = null;

      if (signatureData) {
        if(application.signatureData){
            deletefile(application.signatureData);
        }
        // If photo is an array, get the first item
        const photoFile = Array.isArray(signatureData)
          ? signatureData[0]
          : signatureData;

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

        fullfilenamesignatureData = blob.url;
        application.signatureData =  fullfilenamesignatureData;

        // console.log("fullfilenamesignatureData",fullfilenamesignatureData);

      }
      //////////applicationIMG photo

      const componentImage = files.componentImage;
      let fullfilenamecomponentImage = null;

      if (componentImage) {
        if(application.applicationImg){
            deletefile(application.applicationImg);
        }
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
        application.applicationImg =  fullfilenamecomponentImage;
        // console.log("fullfilenamecomponentImage",fullfilenamecomponentImage);

      }
      try {
        await application.save();
        if (!application) {
          return res.status(404).json({ success: false, message: 'Form not Successfully Submited!' });
        }
        // const updateData = {
        //   userId:  userid,
        //     vorname: vorname,
        //     nachname: nachname,
        //     strabe: strabe,
        //     hausnummer: hausnummer,
        //     PLZ: PLZ,
        //     Ort: Ort,
        //     email: email,
        //     tel: tel,
        //     geburtsdatum: geburtsdatum,
        //     ausgeübterBeruf: ausgeübterBeruf,
        //     arbeitgeber: arbeitgeber,
        //     income: income,
        //     textarea1: textarea1,
        //     textarea2: textarea2,
        //     textarea3: textarea3,
        //     textarea4: textarea4,
        //     textarea5: textarea5,
        //     inputfoto: fullfilename, // Save the URL of the uploaded file
        //     noofpeople: noofpeople,
        //     status: status,
        //     currentactivity: currentactivity,
        //     currentemployer: currentemployer,
        //     incomee: incomee,
        //     fläche: fläche,
        //     anzahlderzimmer: anzahlderzimmer,
        //     salarystatementlast: fullfilenamesalarystatementlast,
        //     salarystatementbefore: fullfilenamesalarystatementbefore,
        //     salarystatementago: fullfilenamesalarystatementago,
        //     residencepermit: fullfilenameresidencepermit,
        //     identificationdocument: fullfilenameidentificationdocument,
        //     shortvideo: fullfilenameshortvideo,
        //     currentSchufareport: fullfilenamecurrentSchufareport,
        //     rentalschoolfree: fullfilenamerentalschoolfree,
        //     signatureData: fullfilenamesignatureData,
        //     applicationImg: fullfilenamecomponentImage
        //   };
          
        //   const user = await Application.findOneAndUpdate(
        //     { _id: applicationid },
        //     updateData,
        //     { new: true } // Option to return the updated document
        //   );
        // salarystatementago,
        // residencepermit,
        // identificationdocument,
        // shortvideo,
        // currentSchufareport,
        // rentalschoolfree,

        return res
          .status(200)
          .json({ success: true, message: "Form Updated successfully" });
      } catch (error) {
        console.error("Error saving data:", error);
        return res
          .status(500)
          .json({ success: false, error: "Error saving data" });
      }
    });
  } 
  else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
};

export default handler;
