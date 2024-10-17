import { useState, useRef, useEffect } from "react";
import React from "react";
import styles from "../styles/form.module.css";
import SignatureCanvas from "react-signature-canvas";
import html2canvas from "html2canvas";
import PdfDesignPage1 from "./PdfDesignPage1";
import { z } from 'zod';


const stepone = ({
  vorname,
  nachname,
  strabe,
  hausnummer,
  PLZ,
  Ort,
  email,
  tel,
  geburtsdatum,
  ausgeübterBeruf,
  arbeitgeber,
  income,
  photo,
  textarea1,
  textarea2,
  textarea3,
  textarea4,
  textarea5,
  setTextarea1,
  setTextarea2,
  setTextarea3,
  setTextarea4,
  setTextarea5,
  handleChange,
  selectedImg,
  setComponents,
  signatureData,
  setSignatureData,
  setApplicationimg,
}) => {
  const sigCanvas = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(800); // Default width, could be any reasonable value
  // const [selectedImg, setSelectedImg] = useState('../image.png');
  
  const [selectedRadio1, setSelectedRadio1] = useState(false);
  const [selectedRadio2, setSelectedRadio2] = useState(false);
  const [selectedRadio3, setSelectedRadio3] = useState(false);
  const [selectedRadio4, setSelectedRadio4] = useState(false);
  const [selectedRadio5, setSelectedRadio5] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const updateCanvasWidth = () => {
      if (typeof window !== "undefined") {
        setCanvasWidth(window.innerWidth * 0.76);
      }
    };
    if(textarea1) setSelectedRadio1('Ja');
    if(textarea2) setSelectedRadio2('Ja');
    if(textarea3) setSelectedRadio3('Ja');
    if(textarea4) setSelectedRadio4('Ja');
    if(textarea5) setSelectedRadio5('Ja');
    

    updateCanvasWidth(); // Set initial width

    window.addEventListener("resize", updateCanvasWidth);
    return () => {
      window.removeEventListener("resize", updateCanvasWidth);
    };
  }, [textarea1,textarea2,textarea3,textarea4,textarea5]);

  const clearSignature = (e) => {
    e.preventDefault(); // Prevent form submission
    sigCanvas.current.clear();
  };
  const handleBegin = () => {
    // Hide the placeholder when the user begins drawing
    document.getElementById("placeholder").style.display = "none";
  };

  const handleEnd = () => {
    // Show the placeholder if the canvas is empty
    if (sigCanvas.current.isEmpty()) {
      document.getElementById("placeholder").style.display = "block";
    }
  };

  const radiohandle = (value, id) => {
    if (id === "r1") {
      if (id === "r1" && value === "Ja") {
        setSelectedRadio1(value);
      } else {
        setSelectedRadio1(value);
        setTextarea1('');
      }
    }
    if (id === "r2") {
      if (id === "r2" && value === "Ja") {
        setSelectedRadio2(value);
      } else {
        setSelectedRadio2(value);
        setTextarea2('');
      }
    }
    if (id === "r3") {
      if (id === "r3" && value === "Ja") {
        setSelectedRadio3(value);
      } else {
        setSelectedRadio3(value);
        setTextarea3('');
      }
    }
    if (id === "r4") {
      if (id === "r4" && value === "Ja") {
        setSelectedRadio4(value);
      } else {
        setSelectedRadio4(value);
        setTextarea4('');
      }
    }
    if (id === "r5") {
      if (id === "r5" && value === "Ja") {
        setSelectedRadio5(value);
      } else {
        setSelectedRadio5(value);
        setTextarea5('');
      }
    }
  };

  function dataURLtoFile(dataURL, filename) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // const singphoto = () => {

  //   // if (fileInput.files && fileInput.files.length > 0) {
  //       //     // Files have been selected
  //       //     const selectedFile = fileInput.files[0];
  //       //     console.log('File selected:', selectedFile);
  //       // } else {
  //       //     // No files selected
  //       //     console.log('No file selected');
  //       // }
  //  }
  //  const captureComponent = async () => {
  //   // Capture the component using html2canvas

  //     // Append the captured image to the body
  //     // document.body.appendChild(canvas);
  // };

  // // Define your schema using Zod
  // const signupSchema = z.object({
  //   vorname: z.string().min(1, "Name is required"),
  //   email: z.string().email("Invalid email address"),
  // });

  // const [formerrors, setFormerrors] = useState({});


  // useEffect(() => {
  //   const savedSignatureObj = localStorage.getItem("savedSignature");
  
  //   if (savedSignatureObj && sigCanvas.current) {
  //     try {
  //       // Parse the JSON data from localStorage
  //       const { signatureData, canvasWidth, canvasHeight } = JSON.parse(savedSignatureObj);
        
  //       console.log('Restoring signature:', signatureData);  // Debug log
  //       console.log('Canvas dimensions:', canvasWidth, canvasHeight);  // Debug log
  
  //       // Set the canvas size to match the saved signature's size
  //       sigCanvas.current.getCanvas().width = canvasWidth;
  //       sigCanvas.current.getCanvas().height = canvasHeight;
  
  //       // Restore the strokes (this will redraw the signature)
  //       if (signatureData && signatureData.length > 0) {
  //         sigCanvas.current.fromData(signatureData); // Use fromData() to load strokes
  //       } else {
  //         console.log("No signature strokes to restore");
  //       }
  //     } catch (error) {
  //       console.error("Error parsing saved signature:", error);
  //     }
  //   }
  // }, []);
  
  
  const validation = async () => {
    // Convert FormData to a plain object for validation
    // const formValues = {
    //   vorname: vorname,
    //   email: email,
    //   // Extract and parse other fields similarly
    //   // Example for age: age: parseInt(formData.get("age")) || undefined,
    // };



    // // Use safeParse for validation
    // const validation = signupSchema.safeParse(formValues);

    // if (validation.success) {
    //   // If validation passes, submit the form
    //   console.log("Success:", validation.data);

    //   // Clear errors
    //   setFormerrors({});
    //   // Proceed with form submission, e.g., sending the data to the server
    // } else {
    //   // If validation fails, map errors to form fields
    //   const fieldErrors = {};
    //   validation.error.errors.forEach((error) => {
    //     fieldErrors[error.path[0]] = error.message;
    //   });
    //   setFormerrors(fieldErrors); // Update state with errors
    // }


    // console.log(formerrors);
    // exit();





    await html2canvas(document.getElementById("captureComponent")).then(
      (canvas) => {
        // Convert canvas to data URL
        var data = canvas.toDataURL();

        // Convert data URL to File object
        const selectedFile = dataURLtoFile(data, "applicationInput.png");

        // Set the captured image file to state
        setApplicationimg(selectedFile);

        // Get the file input element
        const applicationInput = document.getElementById("applicationInput");
        if(applicationInput)
        {
          // Create a new FileList object with the selected file
          const fileList = new DataTransfer();
          fileList.items.add(selectedFile);

          // Set the file input value to the selected file
          applicationInput.files = fileList.files;
        }        
      }
    );

    const newErrors = {};

    if (sigCanvas.current && sigCanvas.current.isEmpty()) {
      // console.log("Signature pad is empty");
      if(!signatureData) newErrors.signature = "signature is required";

    } else {

      // const signatureData = sigCanvas.current.toData(); // Get the signature strokes (JSON data)
      // const canvasWidth = sigCanvas.current.getCanvas().width;
      // const canvasHeight = sigCanvas.current.getCanvas().height;

      // // Save the strokes and canvas dimensions as an object in localStorage
      // const signatureObj = {
      //   signatureData,   // This is JSON, not an image URL
      //   canvasWidth,
      //   canvasHeight,
      // };

      // localStorage.setItem("savedSignature", JSON.stringify(signatureObj));





      const data = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      // localStorage.setItem("savedSignature", data); // Save to local storage
      const selectedFile = dataURLtoFile(data, "signature.png");
      const fileInput = document.getElementById("fileInput");
  
      // Create a new FileList object with the selected file
      const fileList = new DataTransfer();
      fileList.items.add(selectedFile);
      fileInput.files = fileList.files;
      setSignatureData(selectedFile);

      // console.log("Signature pad is not empty");
    }

    // setComponents(2);
    


    if (!vorname) newErrors.vorname = "Vorname is required";
    if (!nachname) newErrors.nachname = "Nachname is required";
    if (!photo) newErrors.photo = "Datei ist erforderlich";
    if (!strabe) newErrors.strabe = "Straße is required";
    if (!hausnummer) newErrors.hausnummer = "Hausnummer is required";
    if (!PLZ) newErrors.PLZ = "PLZ is required";
    if (!Ort) newErrors.Ort = "Ort is required";
    if (!email) newErrors.email = "E-Mail is required";
    if (!tel) newErrors.tel = "Tel. Mobil is required";
    if (!geburtsdatum) newErrors.geburtsdatum = "Geburtsdatum is required";
    if (!ausgeübterBeruf) newErrors.ausgeübterBeruf = "Ausgeübter Beruf is required";
    if (!arbeitgeber) newErrors.arbeitgeber = "Arbeitgeber is required";
    if (!income) newErrors.income ="Höhe des monatlichen verfügbaren Nettoeinkommens (€) is required";

    setErrors(newErrors);

    // console.log(newErrors);
    // console.log(Object.keys(newErrors).length);

    if (Object.keys(newErrors).length === 0) { 
      setComponents(2);
    }
  };
  /////////////////////////////////////////////////////////////////
  const vornameRef = useRef(null);
  const nachnameRef = useRef(null);
  const photoRef = useRef(null);
  const strabeRef = useRef(null);
  const hausnummerRef = useRef(null);
  const PLZRef = useRef(null);
  const OrtRef = useRef(null);
  const emailRef = useRef(null);
  const telRef = useRef(null);
  const geburtsdatumRef = useRef(null);
  const ausgeübterBerufRef = useRef(null);
  const arbeitgeberRef = useRef(null);
  const incomeRef = useRef(null);
  const signature = useRef(null);

  useEffect(() => {
    if (errors.vorname) vornameRef.current.focus();
    else if (errors.nachname) nachnameRef.current.focus();
    else if (errors.photo) photoRef.current.focus();
    else if (errors.strabe) strabeRef.current.focus();
    else if (errors.hausnummer) hausnummerRef.current.focus();
    else if (errors.PLZ) PLZRef.current.focus();
    else if (errors.Ort) OrtRef.current.focus();
    else if (errors.email) emailRef.current.focus();
    else if (errors.tel) telRef.current.focus();
    else if (errors.geburtsdatum) geburtsdatumRef.current.focus();
    else if (errors.ausgeübterBeruf) ausgeübterBerufRef.current.focus();
    else if (errors.arbeitgeber) arbeitgeberRef.current.focus();
    else if (errors.income) incomeRef.current.focus();
    else if (errors.signature) signature.current.focus();
  }, [errors]);

  // const saveSignature = () => {
  //   // Get the signature data from the canvas
  //   const data = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
  //   // console.log(data);
  //   const img = new Image();
  //   img.src = data; // Assuming `data` is the Base64-encoded data URL
  //   document.body.appendChild(img);
  // };
  // const validation = () =>{
  //     const newErrors = {};

  //     if (!vorname) newErrors.vorname = 'Vorname is required';
  //     if (!nachname) newErrors.nachname = 'Nachname is required';
  //     if (!strabe) newErrors.strabe = 'Straße is required';
  //     if (!hausnummer) newErrors.hausnummer = 'Hausnummer is required';
  //     if (!PLZ) newErrors.PLZ = 'PLZ is required';
  //     if (!Ort) newErrors.Ort = 'Ort is required';
  //     if (!email) newErrors.email = 'E-Mail is required';
  //     if (!tel) newErrors.tel = 'Tel. Mobil is required';
  //     if (!geburtsdatum) newErrors.geburtsdatum = 'Geburtsdatum is required';
  //     if (!ausgeübterBeruf) newErrors.ausgeübterBeruf = 'Ausgeübter Beruf is required';
  //     if (!arbeitgeber) newErrors.arbeitgeber = 'Arbeitgeber is required';
  //     if (!income) newErrors.income = 'Höhe des monatlichen verfügbaren Nettoeinkommens (€) is required';
  //     if (!photo) newErrors.photo = 'Foto is required';
  //     if (selectedRadio1 === 'Ja' && !textarea1) newErrors.textarea1 = 'This field is required';
  //     if (selectedRadio2 === 'Ja' && !textarea2) newErrors.textarea2 = 'This field is required';
  //     if (selectedRadio3 === 'Ja' && !textarea3) newErrors.textarea3 = 'This field is required';
  //     if (selectedRadio4 === 'Ja' && !textarea4) newErrors.textarea4 = 'This field is required';
  //     if (selectedRadio5 === 'Ja' && !textarea5) newErrors.textarea5 = 'This field is required';

  //     setErrors(newErrors);

  //     if (Object.keys(newErrors).length === 0) {
  //       setComponents(2);
  //     }
  // }
  // const validation = () =>{
  //     if (
  //       !vorname ||
  //       !nachname ||
  //       !strabe ||
  //       !hausnummer ||
  //       !PLZ ||
  //       !Ort ||
  //       !email ||
  //       !tel ||
  //       !geburtsdatum ||
  //       !ausgeübterBeruf ||
  //       !arbeitgeber ||
  //       !income ||
  //       !photo ||
  //       (selectedRadio1 === "Ja" && !textarea1) ||
  //       (selectedRadio2 === "Ja" && !textarea2) ||
  //       (selectedRadio3 === "Ja" && !textarea3) ||
  //       (selectedRadio4 === "Ja" && !textarea4) ||
  //       (selectedRadio5 === "Ja" && !textarea5)
  //     ) {
  //       console.log("Please fill all required fields.");
  //     } else {
  //       setComponents(2);
  //     }
  // }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        <h1>Number Nav</h1>
        <h1 className={`${styles["nav-link"]} mt-4 mb-7`}>
          Persönliche Daten: Mieter 1
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-3 mb-3">
          <div className="...">
            <div className="input-field">
              <input
                type="text"
                className={`${styles["form-input"]} form-input `}
                id="vorname"
                name="vorname"
                placeholder="Vorname"
                value={vorname}
                ref={vornameRef}
                onChange={handleChange}
              />
              {errors.vorname && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.vorname}
                </div>
              )}
              {/* {formerrors.vorname && <p style={{ color: "red" }}>{formerrors.vorname}</p>} */}
            </div>
          </div>
          <div className="...">
            <div className="input-field">
              <input
                type="text"
                className={`${styles["form-input"]} form-input `}
                id="nachname"
                name="nachname"
                ref={nachnameRef}
                placeholder="Nachname"
                value={nachname}
                onChange={handleChange}
              />
              {errors.nachname && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.nachname}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5">
          <div className="...">
            <div className={`${styles["file-input-container"]} col-span-full`}>
              <label htmlFor="inputfoto" className={`${styles["file-label"]} `}>
                Foto
              </label>
              <div className={`${styles["file-input-wrapper"]}  `}>
                <input
                  type="file"
                  className={styles["file-input2"]}
                  id="photo"
                  ref={photoRef}
                  name="photo"
                  onChange={handleChange}
                  placeholder="1234 Main St"
                />
                <img
                  src={`\ ${selectedImg}`}
                  alt="Description of the image"
                  width={37}
                  height={37}
                  className={styles["file-icon"]}
                />
              </div>
              <input
                type="text"
                className={`${styles["form-input"]}  `}
                readOnly
                placeholder="Wählen Sie eine Datei aus oder ziehen Sie sie hierher"
              />
              {errors.photo && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.photo}
                </div>
                )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-7">
          <div className="col-span-5 ...">
            <input
              type="text"
              className={`${styles["form-input"]} form-control `}
              id="strabe"
              name="strabe"
              ref={strabeRef}
              placeholder="Straße"
              value={strabe}
              onChange={handleChange}
            />
            {errors.strabe && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.strabe}
                </div>
              )}
          </div>
          <div className="col-span-1 ...">
            <input
              type="text"
              className={`${styles["form-input"]} form-control `}
              id="hausnummer"
              name="hausnummer"
              ref={hausnummerRef}
              placeholder="Hausnummer"
              value={hausnummer}
              onChange={handleChange}
            />
            {errors.hausnummer && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.hausnummer}
                </div>
              )}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-7">
          <div className="col-span-1...">
            <input
              type="text"
              className={`${styles["form-input"]} form-control `}
              id="PLZ"
              name="PLZ"
              ref={PLZRef}
              placeholder="PLZ"
              value={PLZ}
              onChange={handleChange}
            />
            {errors.PLZ && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.PLZ}
                </div>
              )}
          </div>
          <div className="col-span-5 ...">
            <input
              type="text"
              className={`${styles["form-input"]} form-control `}
              id="Ort"
              name="Ort"
              placeholder="Ort"
              value={Ort}
              ref={OrtRef}
              onChange={handleChange}
            />
            {errors.Ort && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.Ort}
                </div>
              )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5">
          <div className="...">
            <input
              type="email"
              className={`${styles["form-input"]} form-control `}
              id="email"
              name="email"
              placeholder="E-Mail"
              ref={emailRef}
              value={email}
              onChange={handleChange}
            />
            {errors.email && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.email}
                </div>
              )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5">
          <div className="...">
            <input
              type="tel"
              className={`${styles["form-input"]} form-control `}
              id="tel"
              name="tel"
              placeholder="Tel. Mobil"
              ref={telRef}
              value={tel}
              onChange={handleChange}
            />
            {errors.tel && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.tel}
                </div>
              )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5">
          <div className="...">
            <input
              type="date"
              className={`${styles["form-input"]} form-control `}
              id="geburtsdatum"
              name="geburtsdatum"
              placeholder="Geburtsdatum"
              ref={geburtsdatumRef}
              value={geburtsdatum}
              onChange={handleChange}
            />
            {errors.geburtsdatum && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.geburtsdatum}
                </div>
              )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="...">
            <div className="input-field">
              <input
                type="text"
                className={`${styles["form-input"]} form-input `}
                id="ausgeübterBeruf"
                name="ausgeübterBeruf"
                placeholder="Ausgeübter Beruf"
                ref={ausgeübterBerufRef}
                value={ausgeübterBeruf}
                onChange={handleChange}
              />
              {errors.ausgeübterBeruf && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.ausgeübterBeruf}
                </div>
              )}
            </div>
          </div>
          <div className="...">
            <div className="input-field">
              <input
                type="text"
                className={`${styles["form-input"]} form-input `}
                id="arbeitgeber"
                name="arbeitgeber"
                placeholder="Arbeitgeber"
                ref={arbeitgeberRef}
                value={arbeitgeber}
                onChange={handleChange}
              />
              {errors.arbeitgeber && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.arbeitgeber}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5">
          <div className="...">
            <input
              type="number"
              className={`${styles["form-input"]} form-control `}
              id="income"
              name="income"
              placeholder="Höhe des monatlichen verfügbaren Nettoeinkommens (€)"
              value={income}
              ref={incomeRef}
              onChange={handleChange}
            />
            {errors.income && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.income}
                </div>
              )}
          </div>
        </div>
        <div className="grid grid-cols-8 mt-5">
          <div className="col-span-6 ...">
            <p className={`${styles["form-input"]} form-control label-text `}>
              Besteht dein Beschäftigungsverhältnis länger als 6 Monate?
            </p>
            <textarea
              id="textarea1"
              name="textarea1"
              value={textarea1}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your text here"
              className={`${
                selectedRadio1 === "Ja" ? "block" : "hidden"
              } w-full mt-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2  `}
              type="radio"
              name="employee"
              id="employee1"
              value="Ja"
              onChange={() => radiohandle("Ja", "r1")}
              checked={selectedRadio1 === "Ja"}
            />
            <label
              className={` ${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio1 === "Ja" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Ja", "r1")}
              htmlFor="employee1"
            >
              Ja
            </label>
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="employee"
              id="employee2"
              value="Nein"
              onChange={() => radiohandle("Nein", "r1")}
              checked={selectedRadio1 === "Nein"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio1 === "Nein" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Nein", "r1")}
              htmlFor="employee2"
            >
              Nein
            </label>
          </div>
        </div>
        <div className="grid grid-cols-8 mt-5">
          <div className="col-span-6">
            <p className={`${styles["form-input"]} form-control label-text `}>
              Sollen außer ihnen noch weitere Personen die Wohnung beziehen?
            </p>
            <textarea
              id="textarea2"
              name="textarea2"
              value={textarea2}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your text here"
              className={`${
                selectedRadio2 === "Ja" ? "block" : "hidden"
              } w-full mt-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="moveappartment"
              id="moveappartment1"
              value="Ja"
              onChange={() => radiohandle("Ja", "r2")}
              checked={selectedRadio2 === "Ja"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${styles["radio-btn"]} ${
                selectedRadio2 === "Ja" ? styles["black"] : ""
              }`}
              onClick={() => radiohandle("Ja", "r2")}
              htmlFor="moveappartment1"
            >
              Ja
            </label>
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="moveappartment"
              id="moveappartment2"
              value="Nein"
              onChange={() => radiohandle("Nein", "r2")}
              checked={selectedRadio2 === "Nein"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${styles["radio-btn"]} ${
                selectedRadio2 === "Nein" ? styles["black"] : ""
              }`}
              onClick={() => radiohandle("Nein", "r2")}
              htmlFor="moveappartment2"
            >
              Nein
            </label>
          </div>
        </div>
        <div className="grid grid-cols-8 mt-5">
          <div className="col-span-6 ...">
            <p className={`${styles["form-input"]} form-control label-text `}>
              Bestehen Mietrückstände aus bisherigen Mietverhältnissen?
            </p>
            <textarea
              id="textarea3"
              name="textarea3"
              value={textarea3}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your text here"
              className={`${
                selectedRadio3 === "Ja" ? "block" : "hidden"
              } w-full mt-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="rentareas"
              id="rentareas1"
              value="Ja"
              onChange={() => radiohandle("Ja", "r3")}
              checked={selectedRadio3 === "Ja"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio3 === "Ja" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Ja", "r3")}
              htmlFor="rentareas1"
            >
              Ja
            </label>
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="rentareas"
              id="rentareas2"
              value="Nein"
              onChange={() => radiohandle("Nein", "r3")}
              checked={selectedRadio3 === "Nein"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio3 === "Nein" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Nein", "r3")}
              htmlFor="rentareas2"
            >
              Nein
            </label>
          </div>
        </div>
        <div className="grid grid-cols-8 mt-5">
          <div className="col-span-6 ...">
            <p className={`${styles["form-input"]} form-control label-text `}>
              Wurde in den letzten 5 Jahren Insolvenzverfahren gegen Sie
              eröffnet?
            </p>
            <textarea
              id="textarea4"
              name="textarea4"
              value={textarea4}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your text here"
              className={`${
                selectedRadio4 === "Ja" ? "block" : "hidden"
              } w-full mt-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="proceedings"
              id="proceedings1"
              value="Ja"
              onChange={() => radiohandle("Ja", "r4")}
              checked={selectedRadio4 === "Ja"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio4 === "Ja" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Ja", "r4")}
              htmlFor="proceedings1"
            >
              Ja
            </label>
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="proceedings"
              id="proceedings2"
              value="Nein"
              onChange={() => radiohandle("Nein", "r4")}
              checked={selectedRadio4 === "Nein"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio4 === "Nein" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Nein", "r4")}
              htmlFor="proceedings2"
            >
              Nein
            </label>
          </div>
        </div>
        <div className="grid grid-cols-8 mt-5">
          <div className="col-span-6 ...">
            <p className={`${styles["form-input"]} form-control label-text `}>
              Ist eine gewerbliche Nutzung der Wohnung beabsichtigt?
            </p>
            <textarea
              id="textarea5"
              name="textarea5"
              value={textarea5}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your text here"
              className={`${
                selectedRadio5 === "Ja" ? "block" : "hidden"
              } w-full mt-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="apartmentintended"
              id="apartmentintended1"
              value="Ja"
              onChange={() => radiohandle("Ja", "r5")}
              checked={selectedRadio5 === "Ja"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio5 === "Ja" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Ja", "r5")}
              htmlFor="apartmentintended1"
            >
              Ja
            </label>
          </div>
          <div className="col-span-1 flex items-baseline">
            <input
              className={`${styles["form-check-input"]} mr-2 `}
              type="radio"
              name="apartmentintended"
              id="apartmentintended2"
              value="Nein"
              onChange={() => radiohandle("Nein", "r5")}
              checked={selectedRadio5 === "Nein"}
            />
            <label
              className={`${styles["form-check-label"]} ${
                styles["radio-btn"]
              } ${selectedRadio5 === "Nein" ? styles["black"] : ""}`}
              onClick={() => radiohandle("Nein", "r5")}
              htmlFor="apartmentintended2"
            >
              Nein
            </label>
          </div>
        </div>
        {/* <div className="grid grid-cols-8 mt-5">
                    <div className="col-span-6 ...">
                    <p className={`${styles['form-input']} form-control label-text `}>Ist eine gewerbliche Nutzung der Wohnung beabsichtigt?</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                    <input className={`${styles['form-check-input']} mr-2 `} type="radio" name="apartmentintended" id="apartmentintended1" value="Ja" checked={formData.apartmentintended === 'Ja'} onChange={handleChange} />
                    <label className={`${styles['form-check-label']} ${styles['radio-btn']}`} htmlFor="apartmentintended1">Ja</label>
                    </div>
                    <div className="col-span-1 flex items-center">
                    <input className={`${styles['form-check-input']} mr-2 `} type="radio" name="apartmentintended" id="apartmentintended2" value="Nein" checked={formData.apartmentintended === 'Nein'} onChange={handleChange} />
                    <label className={`${styles['form-check-label']} ${styles['radio-btn']}`} htmlFor="apartmentintended2">Nein</label>
                    </div>
                </div> */}
        {/* <div className="grid grid-cols-1 gap-4 mt-9">
                    <div className="mt-9">
                    <input type="text" className="form-control form-input signature-field" id="signature" placeholder="Unterschrift" value={formData.signature} onChange={handleChange} />
                    </div>
                </div> */}

        <div className={`${styles["sign-div"]} `}>
          <div
            className={`${styles["sign-canvas"]} `}
            style={{ position: "relative"}}
          >
            <div
              id="placeholder"
              className={styles["placeholder"]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "none", // Allow interactions to pass through
                color: "gray",
                fontSize: "20px",
                zIndex: 1,
              }}
            >
              Sign here
            </div>
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              minWidth={1}
              maxWidth={1}
              onBegin={handleBegin}
              onEnd={handleEnd}
              canvasProps={{
                width: canvasWidth,
                height: 100,
                className: "sigCanvas",
                name: "signature",
              }}
            />
          </div>
          <button
            ref={signature}
            type="button"
            className={`${styles["sign-btn"]} `}
            onClick={clearSignature}
          >
            Clear
          </button>
          <input
            type="file"
            id="fileInput"
            onChange={handleChange}
            className="hidden"
            name="signature"
          />
          <input
            type="file"
            id="applicationInput"
            onChange={handleChange}
            className="hidden"
            name="application"
          />
        </div>
        {errors.signature && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.signature}
                </div>
                )}
        <div className="grid grid-cols-8 mt-9">
          <div className="col-span-6 ..."></div>
          <div className="col-span-2 mt-9 ...">
            <input
              type="button"
              className={`${styles["form-input"]} form-control cursor-pointer `}
              id={`${styles["submit"]}`}
              value="Weiter"
              onClick={validation}
            />
          </div>
        </div>
      </div>
      <div className="">
        <PdfDesignPage1
          id="captureComponent"
          vorname={vorname}
          nachname={nachname}
          strabe={strabe}
          hausnummer={hausnummer}
          PLZ={PLZ}
          Ort={Ort}
          email={email}
          tel={tel}
          geburtsdatum={geburtsdatum}
          ausgeübterBeruf={ausgeübterBeruf}
          arbeitgeber={arbeitgeber}
          income={income}
          photo={photo}
          textarea1={textarea1}
          textarea2={textarea2}
          textarea3={textarea3}
          textarea4={textarea4}
          textarea5={textarea5}
          handleChange={handleChange}
          selectedImg={selectedImg}
          setComponents={setComponents}
          setSignatureData={setSignatureData}
          setApplicationimg={setApplicationimg}
          selectedRadio1={selectedRadio1}
          selectedRadio2={selectedRadio2}
          selectedRadio3={selectedRadio3}
          selectedRadio4={selectedRadio4}
          selectedRadio5={selectedRadio5}
        />
      </div>
    </div>
  );
};

export default stepone;
