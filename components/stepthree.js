import React, { useState,useRef,useEffect } from "react";
import styles from "../styles/form.module.css";
import PdfDesignPage3 from "./PdfDesignPage3";



const stepthree = ({vorname,nachname,email,tel,selectedImg,status,showsalarystatementlast,showsalarystatementbefore,showsalarystatementago,salarystatementlast,salarystatementbefore,salarystatementago,handleChange,currentactivity,currentemployer,incomee,setComponents}) => {
  const [selectedRadio6, setSelectedRadio6] = useState("Ja");
  // const [showsalarystatementlast, setShowsalarystatementlast] = useState(false);
  // const [showsalarystatementbefore, setShowsalarystatementbefore] = useState(false);
  // const [showsalarystatementago, setShowsalarystatementago] = useState(false);

  const radiohandle = (value, id) => {
    if (id === "r6") {
      setSelectedRadio6(value);
    }
  };

  
  // if (salarystatementlast) {
  //   console.log(salarystatementlast);
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const result = reader.result;
  //     setShowsalarystatementlast(result); // Assuming setSelectedImg updates the state to show the image
  //   };
  //   reader.readAsDataURL(salarystatementlast);
  // }
  // if (salarystatementbefore) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const result = reader.result;
  //     setShowsalarystatementbefore(result); // Assuming setSelectedImg updates the state to show the image
  //   };
  //   reader.readAsDataURL(salarystatementbefore);
  // }
  // if (salarystatementago) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const result = reader.result;
  //     setShowsalarystatementago(result); // Assuming setSelectedImg updates the state to show the image
  //   };
  //   reader.readAsDataURL(salarystatementago);
  // }
  const [errors,setErrors] = useState({});
  // const backbtn = () =>{
  //   setComponents(1);
  // }


  // const validations = () => {
  //   const newErrors = {};
  //   if (!status) newErrors.status = 'status is required';
  //   if (!currentactivity) newErrors.currentactivity = 'currentactivity is required';

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     setComponents(3);
  //   }
  // };
  const validation = () => {
    // console.log("test");

    const newErrors = {};
      if (!status) newErrors.status = 'status is required';
      if (!currentactivity) newErrors.currentactivity = 'currentactivity is required';
      if (!currentemployer) newErrors.currentemployer = 'currentemployer is required';
      if (!incomee) newErrors.incomee = 'incomee is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setComponents(4);
    }
  };
  
  const statusRef = useRef(null);
  const currentactivityRef = useRef(null);
  const currentemployerRef = useRef(null);
  const incomeeRef = useRef(null);

  useEffect(() => {
    if (errors.status) statusRef.current.focus();
    if (errors.currentactivity) currentactivityRef.current.focus();
    if (errors.currentemployer) currentemployerRef.current.focus();
    if (errors.incomee) incomeeRef.current.focus();

  }, [errors]);


  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
      {/* step 3 */}
      <h1 className={`${styles["form1-heading"]} mt-4 mb-7`}>
        Beschäftigungsverhältnis: Mieter 1
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-3 mb-3">
        <div className="...">
          <div className="input-field">
          <select
                id="status"
                name="status"
                ref={statusRef}
                onChange={handleChange}
                value={status} // Set the value based on the state
                className={`${styles["form-input"]} form-input`}
            >
                <option value="Beschäftigungsstatus">Beschäftigungsstatus</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            {errors.status && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.status}
                </div>
              )}
          </div>
        </div>
        <div className="...">
          <div className="input-field">
            <input
              type="text"
              className={`${styles["form-input"]} form-input `}
              id="current-activity"
              name="currentactivity"
              onChange={handleChange}
              ref={currentactivityRef} 
              value={currentactivity} 
              placeholder="Welche Tätigkeit üben Sie gerade aus?  "
            />
            {errors.currentactivity && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.currentactivity}
                </div>
              )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3">
        <div className="...">
          <div className="input-field">
            <input
              type="text"
              className={`${styles["form-input"]} form-input `}
              id="current-employer"
              name="currentemployer"
              onChange={handleChange}
              value={currentemployer} 
              ref={currentemployerRef} 
              placeholder="Aktueller Arbeitgeber"
            />
             {errors.currentemployer && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.currentemployer}
                </div>
              )}
          </div>
        </div>
        <div className="...">
          <div className="input-field">
            <input
              type="text"
              className={`${styles["form-input"]} form-input `}
              id="monthly-income"
              name="incomee"
              onChange={handleChange}
              value={incomee}
              ref={incomeeRef} 
              placeholder="Monatlichen Nettoeinkommen"
            />
            {errors.incomee && (
                <div className={` ${styles["error"]} color-red `}>
                  {errors.incomee}
                </div>
              )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4 mt-9">
        <div className="col-span-8 text-center ...">
          <p className={`${styles["form-control"]} form-control mb-9 `}>
            Besteht ihr Beschäftigungsverhältnis länger als 6 Monate?{" "}
          </p>
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <input
            className={`${styles["form-check-input"]} mr-2`}
            type="radio"
            name="timeperiod"
            id="timeperiod1"
            value="option1"
          />
          <label
            className={` ${styles["form-check-label"]} ${
              styles["radio-btn-2"]
            } ${selectedRadio6 === "Ja" ? styles["black"] : ""}`}
            onClick={() => radiohandle("Ja", "r6")}
            htmlFor="employee1"
            for="timeperiod1"
          >
            Ja
          </label>
        </div>
        <div className="col-span-4 flex items-center">
          <input
            className={`${styles["form-check-input"]} mr-2  `}
            type="radio"
            name="timeperiod"
            id="timeperiod2"
            value="option2"
          />
          <label
            className={` ${styles["form-check-label"]} ${
              styles["radio-btn-2"]
            } ${selectedRadio6 === "Nein" ? styles["black"] : ""}`}
            onClick={() => radiohandle("Nein", "r6")}
            htmlFor="employee2"
            for="timeperiod2"
          >
            Nein
          </label>
        </div>
      </div>

      <div className={`grid grid-cols-8 gap-4 mt-9 ${selectedRadio6 === "Ja" ? "block" : "hidden"}`}>
        <div className="col-span-8 text-center ...">
          <p className={`${styles["form-control"]} form-control mb-5 `}>
            Laden Sie bitte ihren Gehaltsnachweis aus dem letzten Monat hoch ℹ
          </p>
        </div>
        <div className="col-span-8 text-center ...">
          <div className={`${styles["file-upload"]}`}>
            <label
              className={`${styles["file_up"]} control-label `}
              for="attach"
            >
              <img src={showsalarystatementlast || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='} className="mt-4" alt="" />
              <h4 className={`${styles["file-h4"]} mt-4`}>
                Wählen Sie ihre Datei aus oder ziehen Sie diese hier hinein
              </h4>
              <p className={`${styles["file-p"]} mt-4`}>
                JPG, PNG or PDF, file size no more than 10MB
              </p>
              <input
                type="file"
                id="attach1"
                className={`${styles["inputfile"]}`}
                name="salarystatementlast"
                onChange={handleChange}
              />
              <label
                for="attach1"
                name="salary-slip"
                className={`${styles["custom-file-upload"]} mt-3`}
              >
                Select file
              </label>
            </label>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-8 gap-4 mt-9 ${selectedRadio6 === "Ja" ? "block" : "hidden"}`}>
        <div className="col-span-8 text-center ...">
          <p className={`${styles["form-control"]} form-control mb-5 `}>
            Laden Sie bitte ihren Gehaltsnachweis aus dem vorletzten Monat hoch
          </p>
        </div>
        <div className="col-span-8 text-center ...">
          <div className={`${styles["file-upload"]}`}>
            <label
              className={`${styles["file_up"]} control-label `}
              for="attach"
            >
              <img src={showsalarystatementbefore || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='} className="mt-4" alt="" />
              <h4 className={`${styles["file-h4"]} mt-4`}>
                Wählen Sie ihre Datei aus oder ziehen Sie diese hier hinein
              </h4>
              <p className={`${styles["file-p"]} mt-4`}>
                JPG, PNG or PDF, file size no more than 10MB
              </p>
              <input
                type="file"
                id="attach2"
                className={`${styles["inputfile"]}`}
                name="salarystatementbefore"
                onChange={handleChange}
              />
              <label
                for="attach2"
                name="salary-statemnent"
                className={`${styles["custom-file-upload"]} mt-3`}
              >
                Select file
              </label>
            </label>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-8 gap-4 mt-9 ${selectedRadio6 === "Ja" ? "block" : "hidden"}`}>
        <div className="col-span-8 text-center ...">
          <p className={`${styles["form-control"]} form-control mb-5 `}>
            Laden Sie bitte ihren Gehaltsnachweis von vor 3 Monaten hoch
          </p>
        </div>
        <div className="col-span-8 text-center ...">
          <div className={`${styles["file-upload"]}`}>
            <label
              className={`${styles["file_up"]} control-label `}
              for="attach"
            >
              <img src={showsalarystatementago || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='} className="mt-4" alt="" />
              <h4 className={`${styles["file-h4"]} mt-4`}>
                Wählen Sie ihre Datei aus oder ziehen Sie diese hier hinein
              </h4>
              <p className={`${styles["file-p"]} mt-4`}>
                JPG, PNG or PDF, file size no more than 10MB
              </p>
              <input
                type="file"
                id="attach3"
                className={`${styles["inputfile"]}`}
                name="salarystatementago"
                onChange={handleChange}
              />
              <label
                for="attach3"
                name="salary-statemnent"
                className={`${styles["custom-file-upload"]} mt-3`}
              >
                Select file
              </label>
            </label>
          </div>
        </div>
      </div>
      {/* step 3 end */}
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
      <div>
       <PdfDesignPage3 
          vorname={vorname}
          nachname={nachname}
          email={email}
          tel={tel}
          selectedImg={selectedImg}
          showsalarystatementlast={showsalarystatementlast}
          showsalarystatementbefore={showsalarystatementbefore}
          showsalarystatementago={showsalarystatementago}
          status={status}
          currentactivity={currentactivity}
          currentemployer={currentemployer}
          incomee={incomee}
          selectedRadio6={selectedRadio6}
          salarystatementlast={salarystatementlast}
          salarystatementbefore={salarystatementbefore}
          salarystatementago={salarystatementago}
       
       />
      </div>
      {/* <button onClick={backbtn}>backbtn</button> */}

    </div>
  );
};

export default stepthree;
