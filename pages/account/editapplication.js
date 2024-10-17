import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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


const EditApplication = () => {
  const router = useRouter();
  const { id } = router.query;
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
  const [selectedImg, setSelectedImg] = useState("../../useravt");
  const [components, setComponents] = useState(1);
  const [applicationid, setApplicationid] = useState(1);
  ///////img show useState
  const [showsalarystatementlast, setShowsalarystatementlast] = useState(false);
  const [showsalarystatementbefore, setShowsalarystatementbefore] = useState(false);
  const [showsalarystatementago, setShowsalarystatementago] = useState(false);
  const [showresidencepermit, setShowresidencepermit] = useState(false);
  const [showidentificationdocument, setShowidentificationdocument] = useState(false);
  const [showshortvideo, setShowshortvideo] = useState(false);
  const [showcurrentSchufareport, setShowcurrentSchufareport] = useState(false);
  const [showrentalschoolfree, setShowrentalschoolfree] = useState(false);


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/user/application?id=${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        const data = await res.json();
        // console.log(data.data.inputfoto);
        setApplicationid(data.data._id);
        setVorname(data.data.vorname);
        setNachname(data.data.nachname);
        setStrabe(data.data.strabe);
        setHausnummer(data.data.hausnummer);
        setPLZ(data.data.PLZ);
        setOrt(data.data.Ort);
        setEmail(data.data.email);
        setTel(data.data.tel);
        setGeburtsdatum(data.data.geburtsdatum);
        setAusgeübterBeruf(data.data.ausgeübterBeruf);
        setArbeitgeber(data.data.arbeitgeber);
        setIncome(data.data.income);
        setTextarea1(data.data.textarea1);
        setTextarea2(data.data.textarea2);
        setTextarea3(data.data.textarea3);
        setTextarea4(data.data.textarea4);
        setTextarea5(data.data.textarea5);
        setPeople(data.data.noofpeople);
        setStatus(data.data.status);
        setCurrentactivity(data.data.currentactivity);
        setCurrentemployer(data.data.currentemployer);
        setIncomee(data.data.incomee);
        setFläche(data.data.fläche);
        setAnzahlderzimmer(data.data.anzahlderzimmer);
        // setPhoto(data.data.inputfoto);
    //    // Fetch the image from the URL
    //    function dataURLtoFile(dataUrl, fileName) {
    //     let arr = dataUrl.split(','), 
    //         mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[1]), 
    //         n = bstr.length, 
    //         u8arr = new Uint8Array(n);
    //     while(n--) {
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }
    //     return new File([u8arr], fileName, {type:mime});
    // }
    // // Function to create an object URL for displaying the image
    // function blobToImageURL(blob) {
    //   return URL.createObjectURL(blob);
    // }
    if (data.data.inputfoto) {
      // console.log(data.data.inputfoto);
      // console.log("handle photo load");

      // Assume inputfoto is a URL to an image
      fetch(data.data.inputfoto)
      .then(response => response.blob()) // Convert the image to a Blob
      .then(blob => {
          const file = new File([blob], "uploadedImage.jpg", { type: blob.type }); // Create a File from the Blob

          // Now create a new FileList and assign it to the input field
          const fileList = new DataTransfer();
          fileList.items.add(file); // Add the file to the list

          // // Get the input element of type file
          // const inputElement = document.getElementById("applicationInput");
          // if (inputElement) {
          //     inputElement.files = fileList.files; // Set the files property to the new FileList
          //     console.log("Image added to input file element");
          // }
          // // Set the image source to display the image in the <img> tag
          // const imgElement = document.getElementById("applicationImg");
          // if (imgElement) {
          //     imgElement.src = blobToImageURL(blob); // Set the image source to the Blob URL
          //     console.log("Image displayed in img tag");
          // }


          // Handling file reading and state updates
          if (data.data.inputfoto) {
            setPhoto(fileList.files); // Assuming setPhoto updates some state or handles the file

            if (fileList.files.length > 0) { // Ensure there's at least one file
                const reader = new FileReader();
                reader.onloadend = () => {
                    const result = reader.result; // Base64 string or data URL
                    setSelectedImg(result); // Assuming setSelectedImg updates the state to show the image
                    // console.log("Image loaded and set in state");
                };
                reader.readAsDataURL(fileList.files[0]); // Read the first file as Data URL
            }
          }
      })
      .catch(error => console.error('Error fetching the image:', error));
    }
        // setSelectedImg(data.data.inputfoto);
        setSalarystatementlast(data.data.salarystatementlast);
        setShowsalarystatementlast(data.data.salarystatementlast);
        setSalarystatementbefore(data.data.salarystatementbefore);
        setShowsalarystatementbefore(data.data.salarystatementbefore);
        setSalarystatementago(data.data.salarystatementago);
        setShowsalarystatementago(data.data.salarystatementago);
        setResidencepermit(data.data.residencepermit);
        setShowresidencepermit(data.data.residencepermit);
        setIdentificationdocument(data.data.identificationdocument);
        setShowidentificationdocument(data.data.identificationdocument);
        setShortvideo(data.data.shortvideo);
        setShowshortvideo(data.data.shortvideo);
        setCurrentSchufareport(data.data.currentSchufareport);
        setShowcurrentSchufareport(data.data.currentSchufareport);
        setRentalschoolfree(data.data.rentalschoolfree);
        setShowrentalschoolfree(data.data.rentalschoolfree);
        setSignatureData(data.data.signatureData);
        setApplicationimg(data.data.applicationImg);
        // console.log(response);
        if (res.success) {
        //   toast.success("Form Deleted successfully", {
        //     position: "top-center",
        //     autoClose: 1500,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   });
          // console.log(response);

        //   const router = useRouter();
        //   window.location.reload();
        //   console.log(response);

        //    router.push(`${process.env.NEXT_PUBLIC_HOST}/account/allapplications`)
        } else {
        //   toast.error(response.error, {
        //     position: "top-center",
        //     autoClose: 1500,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   });
        }
      } catch (error) {
        console.error("Error deleting application:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);


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


  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // console.log('Event triggered:', name, value, files);
    if (files && files.length > 0) {
      // console.log("handle chnage");
      if (name === "photo") {
      // console.log("handle photo");

        setPhoto(files[0]);
        // console.log(photo);
        if (files[0]) {
      // console.log("handle photo load");

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
        // console.log(salarystatementlast);
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
        // console.log(salarystatementlast);
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
        // console.log(salarystatementlast);
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
        // console.log(salarystatementlast);
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
        // console.log(salarystatementlast);
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
        // console.log(salarystatementlast);
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
        // console.log(salarystatementlast);
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
        // console.log(salarystatementlast);
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
      //   // console.log(salarystatementlast);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("vorname", vorname);
    // console.log("nachname", nachname);
    // console.log("strabe", strabe);
    // console.log("hausnummer", hausnummer);
    // console.log("PLZ", PLZ);
    // console.log("Ort", Ort);
    // console.log("email", email);
    // console.log("tel", tel);
    // console.log("geburtsdatum", geburtsdatum);
    // console.log("ausgeübterBeruf", ausgeübterBeruf);
    // console.log("arbeitgeber", arbeitgeber);
    // console.log("income", income);
    // console.log("textarea1", textarea1);
    // console.log("textarea2", textarea2);
    // console.log("textarea3", textarea3);
    // console.log("textarea4", textarea4);
    // console.log("textarea5", textarea5);
    // console.log("photo", photo);
    // console.log("noofpeople", people);
    // console.log("status", status);
    // console.log("currentactivity", currentactivity);
    // console.log("currentemployer", currentemployer);
    // console.log("incomee", incomee);
    // console.log("fläche", fläche);
    // console.log("anzahlderzimmer", anzahlderzimmer);
    // console.log("salarystatementlast", salarystatementlast);
    // console.log("salarystatementbefore", salarystatementbefore);
    // console.log("salarystatementago", salarystatementago);
    // console.log("residencepermit", residencepermit);
    // console.log("shortvideo", shortvideo);
    // console.log("identificationdocument", identificationdocument);
    // console.log("currentSchufareport", currentSchufareport);
    // console.log("rentalschoolfree", rentalschoolfree);
    // console.log("signatureData", signatureData);
    // console.log('componentImage', applicationimg);
    // return;
    setLoading(true);
    try {
    const formData = new FormData();
    formData.append("applicationid", applicationid);
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
    // console.log(applicationimg);
    // console.log(photo);
      const res = await fetch("/api/user/updateapplication", {
        method: "POST",
        body: formData,
      });

      const response = await res.json();
      if (response.success) {
        setLoading(false);
        //   localStorage.setItem('token', response.token)
        toast.success("Application Updated successfully", {
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
              {/* <input type="file" id="applicationInput" />
              <img id="applicationImg" alt="uploaded image" /> */}
              {/* <Image src="file" id="applicationImg" height={20} width={20} /> */}
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
                  signatureData={signatureData}
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
                  salarystatementbefore={salarystatementbefore}
                  salarystatementago={salarystatementago}
                  showsalarystatementbefore={showsalarystatementbefore}
                  showsalarystatementlast={showsalarystatementlast}
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

export default EditApplication;
