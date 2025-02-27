import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import router from "next/router";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/form.module.css";
import UserNav from "@/components/UserNav";
import StepOne from "@/components/Applicationtwo/stepone";
import Steptwo from "@/components/Applicationtwo/steptwo";
import Stepthree from "@/components/Applicationtwo/stepthree";
import Stepfour from "@/components/Applicationtwo/stepfour";
import Stepfive from "@/components/Applicationtwo/Stepfive";
import StepSix from "@/components/Applicationtwo/StepSix";
import StepSeven from "@/components/Applicationtwo/StepSeven";
import LoadingSpinner from "@/components/loading";



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
  const [currentactivity, setCurrentactivity] = useState("");
  const [currentemployer, setCurrentemployer] = useState("");
  const [incomee, setIncomee] = useState("");
  const [fläche, setFläche] = useState("");
  const [anzahlderzimmer, setAnzahlderzimmer] = useState("");
  const [photo, setPhoto] = useState(null);
  const [salarystatementlast, setSalarystatementlast] = useState(null);
  const [salarystatementbefore, setSalarystatementbefore] = useState(null);
  const [salarystatementago, setSalarystatementago] = useState(null);
  const [residencepermit, setResidencepermit] = useState(null);
  const [identificationdocument, setIdentificationdocument] = useState(null);
  const [shortvideo, setShortvideo] = useState(null);
  const [currentSchufareport, setCurrentSchufareport] = useState(null);
  const [rentalschoolfree, setRentalschoolfree] = useState(null);
  const [signatureData, setSignatureData] = useState(null);
  const [applicationimg, setApplicationimg] = useState(null);
  const [selectedImg, setSelectedImg] = useState("../image.png");
  const [showsalarystatementlast, setShowsalarystatementlast] = useState(false);
  const [showsalarystatementbefore, setShowsalarystatementbefore] = useState(false);
  const [showsalarystatementago, setShowsalarystatementago] = useState(false);
  const [showresidencepermit, setShowresidencepermit] = useState(false);
  const [showidentificationdocument, setShowidentificationdocument] = useState(false);
  const [showshortvideo, setShowshortvideo] = useState(false);
  const [showcurrentSchufareport, setShowcurrentSchufareport] = useState(false);
  const [showrentalschoolfree, setShowrentalschoolfree] = useState(false);


  const [vorname2, setVorname2] = useState("");
  const [nachname2, setNachname2] = useState("");
  const [strabe2, setStrabe2] = useState("");
  const [hausnummer2, setHausnummer2] = useState("");
  const [PLZ2, setPLZ2] = useState("");
  const [Ort2, setOrt2] = useState("");
  const [email2, setEmail2] = useState("");
  const [tel2, setTel2] = useState("");
  const [geburtsdatum2, setGeburtsdatum2] = useState("");
  const [ausgeübterBeruf2, setAusgeübterBeruf2] = useState("");
  const [arbeitgeber2, setArbeitgeber2] = useState("");
  const [income2, setIncome2] = useState("");
  const [textarea1_t2, setTextarea1_2] = useState("");
  const [textarea2_t2, setTextarea2_2] = useState("");
  const [textarea3_t2, setTextarea3_2] = useState("");
  const [textarea4_t2, setTextarea4_2] = useState("");
  const [textarea5_t2, setTextarea5_2] = useState("");
  const [photo2, setPhoto2] = useState(null);
  const [people2, setPeople2] = useState("");
  const [status2, setStatus2] = useState("");
  const [currentactivity2, setCurrentactivity2] = useState("");
  const [currentemployer2, setCurrentemployer2] = useState("");
  const [incomee2, setIncomee2] = useState("");
  const [fläche2, setFläche2] = useState("");
  const [anzahlderzimmer2, setAnzahlderzimmer2] = useState("");
  const [selectedImg2, setSelectedImg2] = useState("../image.png");
  const [signatureData2, setSignatureData2] = useState(null);
  const [salarystatementlast2, setSalarystatementlast2] = useState(null);
  const [salarystatementbefore2, setSalarystatementbefore2] = useState(null);
  const [salarystatementago2, setSalarystatementago2] = useState(null);
  const [residencepermit2, setResidencepermit2] = useState(null);
  const [identificationdocument2, setIdentificationdocument2] = useState(null);
  const [shortvideo2, setShortvideo2] = useState(null);
  const [currentSchufareport2, setCurrentSchufareport2] = useState(null);
  const [rentalschoolfree2, setRentalschoolfree2] = useState(null);
  const [showsalarystatementlast2, setShowsalarystatementlast2] = useState(false);
  const [showsalarystatementbefore2, setShowsalarystatementbefore2] = useState(false);
  const [showsalarystatementago2, setShowsalarystatementago2] = useState(false);
  const [showresidencepermit2, setShowresidencepermit2] = useState(false);
  const [showidentificationdocument2, setShowidentificationdocument2] = useState(false);
  const [showshortvideo2, setShowshortvideo2] = useState(false);
  const [showcurrentSchufareport2, setShowcurrentSchufareport2] = useState(false);
  const [showrentalschoolfree2, setShowrentalschoolfree2] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [components, setComponents] = useState(1);

  const [isMenuVisible, setMenuVisible] = useState(false);

  


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
            setSelectedImg(result); 
            // console.log(selectedImg);
          };
          reader.readAsDataURL(files[0]);
        }
      }
      if (name === "photo2") {
        setPhoto2(files[0]);

        if (files[0]) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const result = reader.result;
            setSelectedImg2(result); 
            // console.log(selectedImg);
          };
          reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementlast") {
        // console.log(files[0]);
        setSalarystatementlast(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementlast(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementlast2") {
        setSalarystatementlast2(files[0]);
    
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementlast2(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementbefore") {
        // console.log(files[0]);
        setSalarystatementbefore(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementbefore(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementbefore2") {
        setSalarystatementbefore2(files[0]);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementbefore2(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementago") {

        setSalarystatementago(files[0]);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementago(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "salarystatementago2") {

        setSalarystatementago2(files[0]);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowsalarystatementago2(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "residencepermit") {
        // console.log(files[0]);
        setResidencepermit(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowresidencepermit(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "residencepermit2") {
        // console.log(files[0]);
        setResidencepermit2(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowresidencepermit2(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "identificationdocument") {
        // console.log(files[0]);
        setIdentificationdocument(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowidentificationdocument(result); 
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "identificationdocument2") {
        setIdentificationdocument2(files[0]);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowidentificationdocument2(result); 
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "shortvideo") {
        // console.log(files[0]);
        setShortvideo(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowshortvideo(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "shortvideo2") {

        setShortvideo2(files[0]);

        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowshortvideo2(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "currentSchufareport") {
        // console.log(files[0]);
        setCurrentSchufareport(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowcurrentSchufareport(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "currentSchufareport2") {

        setCurrentSchufareport2(files[0]);

        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowcurrentSchufareport2(result);  
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "rentalschoolfree") {
        // console.log(files[0]);
        setRentalschoolfree(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowrentalschoolfree(result); 
        };
        reader.readAsDataURL(files[0]);
        }
      }
      if (name === "rentalschoolfree2") {
        // console.log(files[0]);
        setRentalschoolfree2(files[0]);
        // console.log(salarystatementlast);
        if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setShowrentalschoolfree2(result); 
        };
        reader.readAsDataURL(files[0]);
        }
      }
    
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
      
      if (name === "vorname2") setVorname2(value);
      if (name === "nachname2") setNachname2(value);
      if (name === "strabe2") setStrabe2(value);
      if (name === "hausnummer2") setHausnummer2(value);
      if (name === "PLZ2") setPLZ2(value);
      if (name === "email2") setEmail2(value);
      if (name === "Ort2") setOrt2(value);
      if (name === "tel2") setTel2(value);
      if (name === "geburtsdatum2") setGeburtsdatum2(value);
      if (name === "ausgeübterBeruf2") setAusgeübterBeruf2(value);
      if (name === "arbeitgeber2") setArbeitgeber2(value);
      if (name === "income2") setIncome2(value);
      if (name === "textarea1_t2") setTextarea1_2(value);
      if (name === "textarea2_t2") setTextarea2_2(value);
      if (name === "textarea3_t2") setTextarea3_2(value);
      if (name === "textarea4_t2") setTextarea4_2(value);
      if (name === "textarea5_t2") setTextarea5_2(value);
      if (name === "people2") setPeople2(value);
      if (name === "status2") setStatus2(value);
      if (name === "currentactivity2") setCurrentactivity2(value);
      if (name === "currentemployer2") setCurrentemployer2(value);
      if (name === "incomee2") setIncomee2(value);
      if (name === "anzahlderzimmer2") setAnzahlderzimmer2(value);
      if (name === "fläche2") setFläche2(value);
     
    }
  };
  const generateUniqueFamilyId = () => {
    return `family_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    const formData = new FormData();
    const familyid = generateUniqueFamilyId(); // Create unique family ID
    formData.append("first_person_vorname", vorname);
    formData.append("first_person_nachname", nachname);
    formData.append("first_person_strabe", strabe);
    formData.append("first_person_hausnummer", hausnummer);
    formData.append("first_person_PLZ", PLZ);
    formData.append("first_person_Ort", Ort);
    formData.append("first_person_email", email);
    formData.append("first_person_tel", tel);
    formData.append("first_person_geburtsdatum", geburtsdatum);
    formData.append("first_person_ausgeübterBeruf", ausgeübterBeruf);
    formData.append("first_person_arbeitgeber", arbeitgeber);
    formData.append("first_person_income", income);
    formData.append("first_person_textarea1", textarea1);
    formData.append("first_person_textarea2", textarea2);
    formData.append("first_person_textarea3", textarea3);
    formData.append("first_person_textarea4", textarea4);
    formData.append("first_person_textarea5", textarea5);
    formData.append("first_person_photo", photo);
    formData.append("first_person_noofpeople", people);
    formData.append("first_person_status", status);
    formData.append("first_person_currentactivity", currentactivity);
    formData.append("first_person_currentemployer", currentemployer);
    formData.append("first_person_incomee", incomee);
    formData.append("first_person_fläche", fläche);
    formData.append("first_person_anzahlderzimmer", anzahlderzimmer);
    formData.append("first_person_salarystatementlast", salarystatementlast);
    formData.append("first_person_salarystatementbefore", salarystatementbefore);
    formData.append("first_person_salarystatementago", salarystatementago);
    formData.append("first_person_residencepermit", residencepermit);
    formData.append("first_person_shortvideo", shortvideo);
    formData.append("first_person_identificationdocument", identificationdocument);
    formData.append("first_person_currentSchufareport", currentSchufareport);
    formData.append("first_person_rentalschoolfree", rentalschoolfree);
    formData.append("first_person_signatureData", signatureData);
    // formData.append("familyid", familyid);


    formData.append("second_person_vorname", vorname2);
    formData.append("second_person_nachname", nachname2);
    formData.append("second_person_strabe", strabe2);
    formData.append("second_person_hausnummer", hausnummer2);
    formData.append("second_person_PLZ", PLZ2);
    formData.append("second_person_Ort", Ort2);
    formData.append("second_person_email", email2);
    formData.append("second_person_tel", tel2);
    formData.append("second_person_geburtsdatum", geburtsdatum2);
    formData.append("second_person_ausgeübterBeruf", ausgeübterBeruf2);
    formData.append("second_person_arbeitgeber", arbeitgeber2);
    formData.append("second_person_income", income2);
    formData.append("second_person_textarea1", textarea1_t2);
    formData.append("second_person_textarea2", textarea2_t2);
    formData.append("second_person_textarea3", textarea3_t2);
    formData.append("second_person_textarea4", textarea4_t2);
    formData.append("second_person_textarea5", textarea5_t2);
    formData.append("second_person_photo", photo2);
    formData.append("second_person_noofpeople", people2);
    formData.append("second_person_status", status2);
    formData.append("second_person_currentactivity", currentactivity2);
    formData.append("second_person_currentemployer", currentemployer2);
    formData.append("second_person_incomee", incomee2);
    formData.append("second_person_fläche", fläche2);
    formData.append("second_person_anzahlderzimmer", anzahlderzimmer2);
    formData.append("second_person_salarystatementlast", salarystatementlast2);
    formData.append("second_person_salarystatementbefore", salarystatementbefore2);
    formData.append("second_person_salarystatementago", salarystatementago2);
    formData.append("second_person_residencepermit", residencepermit2);
    formData.append("second_person_shortvideo", shortvideo2);
    formData.append("second_person_identificationdocument", identificationdocument2);
    formData.append("second_person_currentSchufareport", currentSchufareport2);
    formData.append("second_person_rentalschoolfree", rentalschoolfree2);
    formData.append("second_person_signatureData", signatureData2);
    // formData2.append("familyid", familyid);


    formData.append('componentImage', applicationimg);

      const res = await fetch("/api/user/twopersonapplication", {
        method: "POST",
        body: formData,
      });

      // formData2.append('componentImage', applicationimg);

      // const res2 = await fetch("/api/user/application", {
      //   method: "POST",
      //   body: formData2,
      // });

      const response = await res.json();
      // const response2 = await res2.json();
      if (response.success) {
        setLoading(false);
        
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
                  setSignatureData={setSignatureData}

                  vorname2={vorname2}
                  nachname2={nachname2}
                  strabe2={strabe2}
                  hausnummer2={hausnummer2}
                  PLZ2={PLZ2}
                  Ort2={Ort2}
                  email2={email2}
                  tel2={tel2}
                  geburtsdatum2={geburtsdatum2}
                  ausgeübterBeruf2={ausgeübterBeruf2}
                  arbeitgeber2={arbeitgeber2}
                  income2={income2}
                  textarea1_t2={textarea1_t2}
                  textarea2_t2={textarea2_t2}
                  textarea3_t2={textarea3_t2}
                  textarea4_t2={textarea4_t2}
                  textarea5_t2={textarea5_t2}
                  setTextarea1_2={setTextarea1_2}
                  setTextarea2_2={setTextarea2_2}
                  setTextarea3_2={setTextarea3_2}
                  setTextarea4_2={setTextarea4_2}
                  setTextarea5_2={setTextarea5_2}
                  selectedImg2={selectedImg2}
                  setSignatureData2={setSignatureData2}

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
                  people2={people2}
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
                  salarystatementlast2={salarystatementlast2}
                  showsalarystatementlast2={showsalarystatementlast2}
                  salarystatementbefore={salarystatementbefore}
                  showsalarystatementbefore={showsalarystatementbefore}
                  salarystatementbefore2={salarystatementbefore2}
                  showsalarystatementbefore2={showsalarystatementbefore2}
                  salarystatementago={salarystatementago}
                  showsalarystatementago={showsalarystatementago}
                  salarystatementago2={salarystatementago2}
                  showsalarystatementago2={showsalarystatementago2}
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
                  anzahlderzimmer2={anzahlderzimmer2}
                  fläche2={fläche2}
                  residencepermit2={residencepermit2}
                  showresidencepermit2={showresidencepermit2}
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
                  shortvideo={shortvideo}
                  showshortvideo={showshortvideo}
                  identificationdocument={identificationdocument}
                  showidentificationdocument={showidentificationdocument}
                  identificationdocument2={identificationdocument2}
                  showidentificationdocument2={showidentificationdocument2}
                  shortvideo2={shortvideo2}
                  showshortvideo2={showshortvideo2}
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
                  showcurrentSchufareport2={showcurrentSchufareport2}
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
                  rentalschoolfree2={rentalschoolfree2}
                  showrentalschoolfree2={showrentalschoolfree2}
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
