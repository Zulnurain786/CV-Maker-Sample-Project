import React from "react";
import styles from "../styles/form.module.css";
import PdfDesignPage6 from "./PdfDesignPage6";
import { useState } from "react";

const StepSix = ({handleChange,setComponents,currentSchufareport,showcurrentSchufareport,vorname,nachname,email,tel,selectedImg}) => {
  const [selectedRadio8, setSelectedRadio8] = useState("Ja");
  // const [showcurrentSchufareport, setShowcurrentSchufareport] = useState(false);

  const radiohandle = (value, id) => {
    if (id === "r8") {
      setSelectedRadio8(value);
    }
  };

  // if (currentSchufareport) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const result = reader.result;
  //     setShowcurrentSchufareport(result); // Assuming setSelectedImg updates the state to show the image
  //   };
  //   reader.readAsDataURL(currentSchufareport);
  // }
  const validation = () =>{
    const newErrors = {};
    setComponents(7);


    // if (!vorname) newErrors.vorname = 'Vorname is required';
    // if (!nachname) newErrors.nachname = 'Nachname is required';
    // if (!strabe) newErrors.strabe = 'Straße is required';
    // if (!hausnummer) newErrors.hausnummer = 'Hausnummer is required';
    // if (!PLZ) newErrors.PLZ = 'PLZ is required';
    // if (!Ort) newErrors.Ort = 'Ort is required';
    // if (!email) newErrors.email = 'E-Mail is required';
    // if (!tel) newErrors.tel = 'Tel. Mobil is required';
    // if (!geburtsdatum) newErrors.geburtsdatum = 'Geburtsdatum is required';
    // if (!ausgeübterBeruf) newErrors.ausgeübterBeruf = 'Ausgeübter Beruf is required';
    // if (!arbeitgeber) newErrors.arbeitgeber = 'Arbeitgeber is required';
    // if (!income) newErrors.income = 'Höhe des monatlichen verfügbaren Nettoeinkommens (€) is required';

    // setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //   setComponents(2);
    // }
} 
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className={`${styles["form1-heading"]} mt-4 mb-7`}>
            Schufa : Mieter 1
          </h1>

          <div className="grid grid-cols-8 gap-4 mt-9">
            <div className="col-span-8 text-center ...">
              <p className={`${styles["form-control"]} form-control mb-9 `}>
                Haben Sie eine aktuelle Schufaauskunft?{" "}
              </p>
            </div>
            <div className="col-span-8 mt-3 mb-8 text-center m-auto ...">
              <img src="/Bewerbungsunterlagen.svg" alt="" />
            </div>
            <div className="col-span-4 flex items-center justify-end">
              <input
                className={`${styles["form-check-input"]} mr-2  `}
                type="radio"
                name="schufareport"
                id="schufa-report1"
                value="option1"
                checked
              />
              <label
                className={` ${styles["form-check-label"]} ${
                  styles["radio-btn-2"]
                } ${selectedRadio8 === "Ja" ? styles["black"] : ""}`}
                onClick={() => radiohandle("Ja", "r8")}
                htmlFor="employee1"
                for="schufa-report1"
              >
                Ja
              </label>
            </div>
            <div className="col-span-4 flex items-center">
              <input
                className={`${styles["form-check-input"]} mr-2  `}
                type="radio"
                name="schufareport"
                id="schufa-report2"
                value="option2"
              />
              <label
                className={` ${styles["form-check-label"]} ${
                  styles["radio-btn-2"]
                } ${selectedRadio8 === "Nein" ? styles["black"] : ""}`}
                onClick={() => radiohandle("Nein", "r8")}
                htmlFor="employee1"
                for="schufa-report2"
              >
                Nein
              </label>
            </div>
          </div>

          <div className={`grid grid-cols-8 gap-4 mt-9 ${selectedRadio8 === "Ja" ? "block" : "hidden" }`}>
            <div className="col-span-8 text-center ...">
              <p className={`${styles["form-control"]} form-control mb-9 `}>
                Laden Sie ihre aktuelle Schufaauskunft bitte hier hoch
              </p>
            </div>
            <div className="col-span-8 text-center ...">
              <div className={`${styles["file-upload"]}`}>
                <label
                  className={`${styles["file_up"]} control-label `}
                  for="attach"
                >
                  <img src={showcurrentSchufareport || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='} className="mt-4" alt="" />
                  <h4 className={`${styles["file-h4"]} mt-4`}>
                    Wählen Sie ihre Datei aus oder ziehen Sie diese hier hinein
                  </h4>
                  <p className={`${styles["file-p"]} mt-4`}>
                    JPG, PNG or PDF, file size no more than 10MB
                  </p>
                  <input
                    type="file"
                    id="attach7"
                    className={`${styles["inputfile"]}`}
                    name="currentSchufareport"
                    onChange={handleChange}
                  />
                  <label
                    for="attach7"
                    name="salary-statemnent"
                    className={`${styles["custom-file-upload"]} mt-3`}
                  >
                    Select file
                  </label>
                </label>
              </div>
            </div>
          </div>

          {/* <h1 className={`${styles["form1-heading"]} mt-9 mb-7`}>
            Schufa : Mieter 2
          </h1>

          <div className="grid grid-cols-8 gap-4 mt-9">
            <div className="col-span-8 text-center ...">
              <p className={`${styles["form-control"]} form-control mb-9 `}>
                Haben Sie eine aktuelle Schufaauskunft?{" "}
              </p>
            </div>
            <div className="col-span-8 mt-3 mb-8 text-center m-auto ...">
              <img src="/Bewerbungsunterlagen.svg" alt="" />
            </div>
            <div className="col-span-4 flex items-center justify-end">
              <input
                className={`${styles["form-check-input"]} mr-2  `}
                type="radio"
                name="schufareport2"
                id="schufa-report3"
                value="option1"
                checked
              />
              <label
                className={` ${styles["form-check-label"]} ${
                  styles["radio-btn-2"]
                } ${selectedRadio10 === "Ja" ? styles["black"] : ""}`}
                onClick={() => radiohandle("Ja", "r10")}
                htmlFor="employee1"
                for="schufa-report3"
              >
                Ja
              </label>
            </div>
            <div className="col-span-4 flex items-center">
              <input
                className={`${styles["form-check-input"]} mr-2  `}
                type="radio"
                name="schufareport2"
                id="schufa-report4"
                value="option2"
              />
              <label
                className={` ${styles["form-check-label"]} ${
                  styles["radio-btn-2"]
                } ${selectedRadio10 === "Ja" ? styles["black"] : ""}`}
                onClick={() => radiohandle("Ja", "r10")}
                htmlFor="employee1"
                for="schufa-report4"
              >
                Nein
              </label>
            </div>
          </div> */}

          <div className={`grid grid-cols-8 gap-4 mt-9 ${selectedRadio8 === "Ja" ? "block" : "hidden" }`}>
            <div className="col-span-8 text-center ...">
              <p className={`${styles["form-control"]} form-control mb-5 `}>
                Klicken Sie auf den Link und erhalten Sie ihre
                <br /> aktuelle Schufaauskunft ℹ️
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center ...">
              <a className={`${styles["schufa-info-btn"]} `} href="#">
                Hier Schufaauskunft erhalten
              </a>
            </div>
            <div className="col-span-8 flex items-center justify-center  mt-5 ...">
              <a href="" className={`${styles["alternativ-btn"]}`}>
                Alternativ
              </a>
            </div>
          </div>
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
        <div className={`${selectedRadio8 === "Ja" ? "block" : "hidden" }`}>
          <PdfDesignPage6  
              vorname={vorname}
              nachname={nachname}
              email={email}
              tel={tel}
              selectedImg={selectedImg}
              showcurrentSchufareport={showcurrentSchufareport}
              currentSchufareport={currentSchufareport}
            />
        </div>
      </div>
      
    </>
  );
};

export default StepSix;
