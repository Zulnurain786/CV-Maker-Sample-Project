import React from "react";
import styles from "../styles/pdf.module.css";
import Header from "./PdfDesignHeader"


const PdfDesignPage6 = ({currentSchufareport,showcurrentSchufareport,vorname,nachname,email,tel,selectedImg}) => {
  return (
    <>
      {/* page 6*/}
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
          <p className={`${styles["titleBlue"]}`}>ARBEITSVERTRAG (1/3)</p>
          <img className={`${styles["pdfimg"]}`} src="/images/img.png" />
        </div> */}
        {/* table  */}
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
              {currentSchufareport!=="" &&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>showcurrentSchufareport</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <img className={`${styles["headerImage"]}`} src={`\ ${showcurrentSchufareport}`} />
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
      {/* page 6 end*/}
    </>
  );
};

export default PdfDesignPage6;
