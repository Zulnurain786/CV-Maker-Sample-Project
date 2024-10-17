import React from "react";
import styles from "../styles/pdf.module.css";
import Header from "./PdfDesignHeader"


const PdfDesignPage4 = ({fläche,anzahlderzimmer,residencepermit,showresidencepermit,vorname,nachname,email,tel,selectedImg}) => {
  return (
    <>
      {/* page 4*/}
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
              {residencepermit!=="" &&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>showresidencepermit</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <img className={`${styles["headerImage"]}`} src={`\ ${showresidencepermit}`} />
                  </div>
               </div>
              )}            
              {fläche !== "" && (
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>fläche</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{fläche}</p>
                  </div>
                </div>
              )}            
              {anzahlderzimmer !== "" && (
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>anzahlderzimmer</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{anzahlderzimmer}</p>
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
      {/* page 4 end*/}
    </>
  );
};

export default PdfDesignPage4;
