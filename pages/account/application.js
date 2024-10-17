import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import router from "next/router";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/form.module.css";
import UserNav from "@/components/UserNav";
import Steptwo from "@/components/steptwo";
import StepOne from "@/components/stepone";
import Stepthree from "@/components/stepthree";
import Stepfour from "@/components/stepfour";
import Stepfive from "@/components/Stepfive";
import StepSix from "@/components/StepSix";
import StepSeven from "@/components/StepSeven";
import LoadingSpinner from "@/components/loading";
import { parseWithZod } from "@conform-to/zod";


const application = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [strabe, setStrabe] = useState("");
  const [hausnummer, setHausnummer] = useState("");
  const [PLZ, setPLZ] = useState("");
  const [Ort, setOrt] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [geburtsdatum, setGeburtsdatum] = useState("");
  const [ausgeübterBeruf, setAusgeübterBeruf] = useState("");
  const [arbeitgeber, setArbeitgeber] = useState("");
  const [income, setIncome] = useState("");
  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [textarea4, setTextarea4] = useState("");
  const [textarea5, setTextarea5] = useState("");
  const [people, setPeople] = useState("");
  const [status, setStatus] = useState("");
  // console.log(status);
  const [currentactivity, setCurrentactivity] = useState("");
  const [currentemployer, setCurrentemployer] = useState("");
  const [incomee, setIncomee] = useState("");
  const [fläche, setFläche] = useState("");
  const [anzahlderzimmer, setAnzahlderzimmer] = useState("");
  const [photo, setPhoto] = useState(null);
  const [salarystatementlast, setSalarystatementlast] = useState("");
  const [salarystatementbefore, setSalarystatementbefore] = useState("");
  const [salarystatementago, setSalarystatementago] = useState("");
  const [residencepermit, setResidencepermit] = useState("");
  const [identificationdocument, setIdentificationdocument] = useState("");
  const [shortvideo, setShortvideo] = useState("");
  const [currentSchufareport, setCurrentSchufareport] = useState("");
  const [rentalschoolfree, setRentalschoolfree] = useState("");
  const [signatureData, setSignatureData] = useState(null);
  const [applicationimg, setApplicationimg] = useState(null);
  const [selectedImg, setSelectedImg] = useState("../image.png");
  
  const [loading, setLoading] = useState(false);
  const [components, setComponents] = useState(1);

  const [isMenuVisible, setMenuVisible] = useState(false);
  ///////img show useState
  const [showsalarystatementlast, setShowsalarystatementlast] = useState(false);
  const [showsalarystatementbefore, setShowsalarystatementbefore] = useState(false);
  const [showsalarystatementago, setShowsalarystatementago] = useState(false);
  const [showresidencepermit, setShowresidencepermit] = useState(false);
  const [showidentificationdocument, setShowidentificationdocument] = useState(false);
  const [showshortvideo, setShowshortvideo] = useState(false);
  const [showcurrentSchufareport, setShowcurrentSchufareport] = useState(false);
  const [showrentalschoolfree, setShowrentalschoolfree] = useState(false);

  // useEffect(() => {
  //   // console.log('salarystatementlast has changed:', salarystatementlast);
  //   if (salarystatementlast) {
  //     console.log(salarystatementlast);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       setShowsalarystatementlast(result); // Assuming setSelectedImg updates the state to show the image
  //     };
  //     reader.readAsDataURL(salarystatementlast);
  //   }
  //   if (salarystatementbefore) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       setShowsalarystatementbefore(result); // Assuming setSelectedImg updates the state to show the image
  //     };
  //     reader.readAsDataURL(salarystatementbefore);
  //   }
  //   if (salarystatementago) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       setShowsalarystatementago(result); // Assuming setSelectedImg updates the state to show the image
  //     };
  //     reader.readAsDataURL(salarystatementago);
  //   }
  //   if (residencepermit) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       setShowresidencepermit(result); // Assuming setSelectedImg updates the state to show the image
  //     };
  //     reader.readAsDataURL(residencepermit);
  //   }
  //   if (identificationdocument) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       setShowidentificationdocument(result); // Assuming setSelectedImg updates the state to show the image
  //     };
  //     reader.readAsDataURL(identificationdocument);
  //   }
  //   if (shortvideo) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       setShowshortvideo(result); // Assuming setSelectedImg updates the state to show the image
  //     };
  //     reader.readAsDataURL(shortvideo);
  //   }
  // }, [salarystatementlast,salarystatementbefore,salarystatementago,residencepermit,identificationdocument,shortvideo]);



  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // console.log('Event triggered:', name, value, files);
    if (files && files.length > 0) {
      if (name === "photo") {
        setPhoto(files[0]);
        // console.log(photo);
        if (files[0]) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const result = reader.result;
            setSelectedImg(result); // Assuming setSelectedImg updates the state to show the image
            // console.log(selectedImg);
          };
          reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementlast") {
        // console.log(files[0]);
        setSalarystatementlast(files[0]);
        
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementlast(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementbefore") {
        // console.log(files[0]);
        setSalarystatementbefore(files[0]);
        // console.log(salarystatementbefore);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementbefore(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementago") {
        // console.log(files[0]);
        setSalarystatementago(files[0]);
        // console.log(salarystatementago)
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementago(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "residencepermit") {
        // console.log(files[0]);
        setResidencepermit(files[0]);
        
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowresidencepermit(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "identificationdocument") {
        // console.log(files[0]);
        setIdentificationdocument(files[0]);
        
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowidentificationdocument(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "shortvideo") {
        // console.log(files[0]);
        setShortvideo(files[0]);
        
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowshortvideo(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "currentSchufareport") {
        // console.log(files[0]);
        setCurrentSchufareport(files[0]);
        
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowcurrentSchufareport(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "rentalschoolfree") {
        // console.log(files[0]);
        setRentalschoolfree(files[0]);
        
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowrentalschoolfree(result);  // Assuming setSelectedImg updates the state to show the image
        };
        reader.readAsDataURL(files[0]);
        }
      }
      // if (name === 'signature') {
      //   // console.log(files[0]);
      //   setSignatureData(files[0]);
      //   
      //   // if (files[1]) {
      //         // const reader = new FileReader();
      //         // reader.onloadend = () => {
      //         //     const result = reader.result;
      //         //     setSelectedImg(result);  // Assuming setSelectedImg updates the state to show the image
      //         // };
      //         // reader.readAsDataURL(files[0]);
      //     // }
      // }
    } else {
      if (name === "vorname") setVorname(value);
      if (name === "nachname") setNachname(value);
      if (name === "strabe") setStrabe(value);
      if (name === "hausnummer") setHausnummer(value);
      if (name === "PLZ") setPLZ(value);
      if (name === "email") setEmail(value);
      if (name === "Ort") setOrt(value);
      if (name === "tel") setTel(value);
      if (name === "geburtsdatum") setGeburtsdatum(value);
      if (name === "ausgeübterBeruf") setAusgeübterBeruf(value);
      if (name === "arbeitgeber") setArbeitgeber(value);
      if (name === "income") setIncome(value);
      if (name === "textarea1") setTextarea1(value);
      if (name === "textarea2") setTextarea2(value);
      if (name === "textarea3") setTextarea3(value);
      if (name === "textarea4") setTextarea4(value);
      if (name === "textarea5") setTextarea5(value);
      if (name === "testname") setTestname(value);
      if (name === "testage") setTestage(value);
      if (name === "people") setPeople(value);
      if (name === "status") setStatus(value);
      if (name === "currentactivity") setCurrentactivity(value);
      if (name === "currentemployer") setCurrentemployer(value);
      if (name === "incomee") setIncomee(value);
      if (name === "anzahlderzimmer") setAnzahlderzimmer(value);
      if (name === "fläche") setFläche(value);
      // if (name === "signature") {
      //   // Handle signature data
      //   const signaturedata = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      //   console.log(signaturedata);
      //   // Do whatever you want with the signature data, such as saving it to state
      //   setSignatureData(signaturedata);
      //   // const img = new Image();
      //   // img.src = data; // Assuming `data` is the Base64-encoded data URL
      //   // document.body.appendChild(img);
      // }
    }
  };
  // const componentRef = useRef(null);

  // Function to capture the image of the component
  // const captureComponentImage = async (componentRef) => {
  //   try {
  //     const canvas = await html2canvas(componentRef.current);
  //     const imgData = canvas.toDataURL('image/png');
  //     console.log(imgData);
  //     return imgData;
  //   } catch (error) {
  //     console.error('Error capturing component image:', error);
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   console.log("Updated formerrors:", formerrors);
  // }, [formerrors]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    const formData = new FormData();
    formData.append("vorname", vorname);
    formData.append("nachname", nachname);
    formData.append("strabe", strabe);
    formData.append("hausnummer", hausnummer);
    formData.append("PLZ", PLZ);
    formData.append("Ort", Ort);
    formData.append("email", email);
    formData.append("tel", tel);
    formData.append("geburtsdatum", geburtsdatum);
    formData.append("ausgeübterBeruf", ausgeübterBeruf);
    formData.append("arbeitgeber", arbeitgeber);
    formData.append("income", income);
    formData.append("textarea1", textarea1);
    formData.append("textarea2", textarea2);
    formData.append("textarea3", textarea3);
    formData.append("textarea4", textarea4);
    formData.append("textarea5", textarea5);
    formData.append("photo", photo);
    formData.append("noofpeople", people);
    formData.append("status", status);
    formData.append("currentactivity", currentactivity);
    formData.append("currentemployer", currentemployer);
    formData.append("incomee", incomee);
    formData.append("fläche", fläche);
    formData.append("anzahlderzimmer", anzahlderzimmer);
    formData.append("salarystatementlast", salarystatementlast);
    formData.append("salarystatementbefore", salarystatementbefore);
    formData.append("salarystatementago", salarystatementago);
    formData.append("residencepermit", residencepermit);
    formData.append("shortvideo", shortvideo);
    formData.append("identificationdocument", identificationdocument);
    formData.append("currentSchufareport", currentSchufareport);
    formData.append("rentalschoolfree", rentalschoolfree);
    formData.append("signatureData", signatureData);
    formData.append('componentImage', applicationimg);


      const res = await fetch("/api/user/application", {
        method: "POST",
        body: formData,
      });

      const response = await res.json();
      if (response.success) {
        setLoading(false);
        // 666c3ac22407a94457a9f6e6
        //   localStorage.setItem('token', response.token)
        toast.success("Form submitted successfully", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        router.push(`${process.env.NEXT_PUBLIC_HOST}/account/allapplications`);
      } else {
        setLoading(false);
        toast.error(response.error, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      setLoading(true);
      toast.error("Form submission failed: An error occurred");
    }
  };

  return (
    <>
      {loading && (
        <>
          <div className="fixed inset-0 bg-white bg-opacity-70 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <LoadingSpinner />
          </div>
        </>
      )}

      {/* // <div>
    //   <ToastContainer />
    //   <form onSubmit={handleSubmit} encType="multipart/form-data">
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" id="name" name="name" value={vorname} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label htmlFor="photo">Photo:</label>
    //       <input type="file" id="photo" name="photo" onChange={handleChange} required />
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div> */}
      <div className="min-h-full">
        <UserNav />
        <ToastContainer />
        <div className="mt-7">
          <ul
            className={`nav ${styles["nav-progress"]}  mx-auto max-w-7xl flex justify-around`}
          >
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link   ${
                  components >= 1 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
                aria-current="page"
              >
                1
              </a>
            </li>
            <li>
              <img src="/arrow.png" />
            </li>
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link  ${
                  components >= 2 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
              >
                2
              </a>
            </li>
            <li>
              <img src="/arrow.png" />
            </li>
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link  ${
                  components >= 3 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
              >
                3
              </a>
            </li>
            <li>
              <img src="/arrow.png" />
            </li>
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link  ${
                  components >= 4 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
              >
                4
              </a>
            </li>
            <li>
              <img src="/arrow.png" />
            </li>
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link  ${
                  components >= 5 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
              >
                5
              </a>
            </li>
            <li>
              <img src="/arrow.png" />
            </li>
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link  ${
                  components >= 6 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
              >
                6
              </a>
            </li>
            <li>
              <img src="/arrow.png" />
            </li>
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link  ${
                  components >= 7 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
              >
                7
              </a>
            </li>
            <li>
              <img src="/arrow.png" />
            </li>
            <li className="nav-item">
              <a
                className={`${styles["nav-link"]} nav-link  ${
                  components === 8 ? "bg-teal-500 !importent " : "bg-gray-300"
                } `}
              >
                8
              </a>
            </li>
          </ul>
        </div>
        <div className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <form
              className={`${styles["form-paddingt"]} `}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              {components === 1 && (
                <StepOne         
                  setApplicationimg={setApplicationimg}         
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
                  setTextarea1={setTextarea1}
                  setTextarea2={setTextarea2}
                  setTextarea3={setTextarea3}
                  setTextarea4={setTextarea4}
                  setTextarea5={setTextarea5}
                  selectedImg={selectedImg}
                  signatureData={signatureData}
                  setSignatureData={setSignatureData}
                  handleChange={handleChange}
                  setComponents={setComponents}
                />
              )}
              {components === 2 && (
                <Steptwo
                  vorname={vorname}
                  nachname={nachname}
                  email={email}
                  tel={tel}
                  selectedImg={selectedImg}
                  people={people}
                  handleChange={handleChange}
                  setComponents={setComponents}
                />
              )}
              {components === 3 && (
                <Stepthree
                  vorname={vorname}
                  nachname={nachname}
                  email={email}
                  tel={tel}
                  selectedImg={selectedImg}
                  status={status}
                  currentactivity={currentactivity}
                  currentemployer={currentemployer}
                  incomee={incomee}
                  salarystatementlast={salarystatementlast}
                  showsalarystatementlast={showsalarystatementlast}
                  salarystatementbefore={salarystatementbefore}
                  showsalarystatementbefore={showsalarystatementbefore}
                  salarystatementago={salarystatementago}
                  showsalarystatementago={showsalarystatementago}
                  handleChange={handleChange}
                  setComponents={setComponents}
                />
              )}
              {components === 4 && (
                <Stepfour
                  vorname={vorname}
                  nachname={nachname}
                  email={email}
                  tel={tel}
                  selectedImg={selectedImg}
                  anzahlderzimmer={anzahlderzimmer}
                  fläche={fläche}
                  residencepermit={residencepermit}
                  showresidencepermit={showresidencepermit}
                  handleChange={handleChange}
                  setComponents={setComponents}
                />
              )}
              {components === 5 && (
                <Stepfive
                  vorname={vorname}
                  nachname={nachname}
                  email={email}
                  tel={tel}
                  selectedImg={selectedImg}
                  identificationdocument={identificationdocument}
                  shortvideo={shortvideo}
                  showidentificationdocument={showidentificationdocument}
                  showshortvideo={showshortvideo}
                  handleChange={handleChange}
                  setComponents={setComponents}
                />
              )}
              {components === 6 && (
                <StepSix
                  vorname={vorname}
                  nachname={nachname}
                  email={email}
                  tel={tel}
                  selectedImg={selectedImg}
                  currentSchufareport={currentSchufareport}
                  showcurrentSchufareport={showcurrentSchufareport}
                  handleChange={handleChange}
                  setComponents={setComponents}
                />
              )}
              {components === 7 && (
                <StepSeven
                  vorname={vorname}
                  nachname={nachname}
                  email={email}
                  tel={tel}
                  selectedImg={selectedImg}
                  rentalschoolfree={rentalschoolfree}
                  showrentalschoolfree={showrentalschoolfree}
                  handleChange={handleChange}
                  setComponents={setComponents}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default application;
