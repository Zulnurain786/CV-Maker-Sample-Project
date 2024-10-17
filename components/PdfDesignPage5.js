import React from "react";
import styles from "../styles/pdf.module.css";
import Header from "./PdfDesignHeader"


const PdfDesignPage5 = ({shortvideo,identificationdocument,showidentificationdocument,showshortvideo,handleChange,setComponents,vorname,nachname,email,tel,selectedImg}) => {
  return (
    <>
      {/* page 5*/}
      <div className={`${styles["pagepdf"]}`}>
        {/* header */}
        <Header 
          vorname={vorname}
          nachname={nachname}
          selectedImg={selectedImg}
          email={email}
          tel={tel}
          />
        {/* header */}

        {/* <div className={`${styles["section"]}`}>
          <p className={`${styles["titleBlue"]}`}>EINKOMMENSNACHWEISE (2/3)</p>
          <img className={`${styles["pdfimg"]}`} src="/images/img.png" />
        </div> */}

        <div className={`${styles["table"]}`}>
            {/* Table Headers */}
            <div className={`${styles["tableRow"]}`}>
              <div className={`${styles["tableCol"]}`}>
                <p className={`${styles["tableCell"]}`}>heading</p>
              </div>
              <div className={`${styles["tableCol"]}`}>
                <p className={`${styles["tableCell"]}`}>Value1</p>
              </div>
            </div>
              {/* Table Rows */}    
              {shortvideo!=="" &&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>showshortvideo</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <img className={`${styles["headerImage"]}`} src={`\ ${showshortvideo}`} />
                  </div>
               </div>
              )}            
              {identificationdocument!=="" &&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>showidentificationdocument</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <img className={`${styles["headerImage"]}`} src={`\ ${showidentificationdocument}`} />
                  </div>
               </div>
              )}            
          </div>
        {/* Page Number */}
        <p
          className={`${styles["pageNumber"]}`}
          render={({ pageNumber }) => `${pageNumber}`}
          fixed
        />
      </div>
      {/* page 5 end*/}
    </>
  );
};

export default PdfDesignPage5;
