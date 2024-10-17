import React from "react";
import styles from "../styles/pdf.module.css";
import Header from "./PdfDesignHeader"


const PdfDesignPage3 = ({
  vorname,nachname,email,tel,selectedImg,status,showsalarystatementlast,salarystatementlast,showsalarystatementbefore,showsalarystatementago,salarystatementbefore,salarystatementago,currentactivity,currentemployer,incomee,selectedRadio6
}) => {
  return (
    <>
      {/* page 3*/}
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
          <p className={`${styles["titleBlue"]}`}>EINKOMMENSNACHWEISE (1/3)</p>
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
              {/* {vorname !== "" && (
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>First Name</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{vorname}</p>
                  </div>
                </div>
              )}
              {nachname!==""&&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>Last Name</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{nachname}</p>
                  </div>
               </div>
              )} */}
              {status!==""&&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>status</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{status}</p>
                  </div>
               </div>
              )}            
              {currentactivity!==""&&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>currentactivity</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{currentactivity}</p>
                  </div>
               </div>
              )}            
              {currentemployer!==""&&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>currentemployer</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{currentemployer}</p>
                  </div>
               </div>
              )}            
              {incomee!==""&&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>incomee</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{incomee}</p>
                  </div>
               </div>
              )}            
              {selectedRadio6!==""&&(
                <div className={`${styles["tableRow"]}`}>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>Beschäftigungsverhältnis</p>
                  </div>
                  <div className={`${styles["tableCol"]}`}>
                    <p className={`${styles["tableCell"]}`}>{selectedRadio6}</p>
                  </div>
               </div>
              )}            
              {salarystatementlast!==""&&(
                <div>
                  <img className={`${styles["pdfimg"]}`} src={`\ ${showsalarystatementlast}`} />
                </div>

              //   <div className={`${styles["tableRow"]}`}>
              //     <div className={`${styles["tableCol"]}`}>
              //       <p className={`${styles["tableCell"]}`}>showsalarystatementlast</p>
              //     </div>
              //     <div className={`${styles["tableCol"]}`}>
              //       {/* <p className={`${styles["tableCell"]}`}>{showsalarystatementlast}</p> */}
              //       <img className={`${styles["headerImage"]}`} src={`\ ${showsalarystatementlast}`} />
              //     </div>
              //  </div>
              )}            
              {salarystatementago!==""&&(
                <img className={`${styles["pdfimg"]}`} src={`\ ${showsalarystatementago}`} />

              //   <div className={`${styles["tableRow"]}`}>
              //     <div className={`${styles["tableCol"]}`}>
              //       <p className={`${styles["tableCell"]}`}>showsalarystatementago</p>
              //     </div>
              //     <div className={`${styles["tableCol"]}`}>
              //       <img className={`${styles["headerImage"]}`} src={`\ ${showsalarystatementago}`} />
              //     </div>
              //  </div>
              )}            
              {salarystatementbefore!=="" &&(
                <img className={`${styles["pdfimg"]}`} src={`\ ${showsalarystatementbefore}`} />

              //   <div className={`${styles["tableRow"]}`}>
              //     <div className={`${styles["tableCol"]}`}>
              //       <p className={`${styles["tableCell"]}`}>showsalarystatementbefore</p>
              //     </div>
              //     <div className={`${styles["tableCol"]}`}>
              //       <img className={`${styles["headerImage"]}`} src={`\ ${showsalarystatementbefore}`} />
              //     </div>
              //  </div>
              )}            
          </div>
        {/* Page Number */}
        <p
          className={`${styles["pageNumber"]}`}
          render={({ pageNumber }) => `${pageNumber}`}
          fixed
        />
      </div>
      {/* page 3 end*/}
    </>
  );
};

export default PdfDesignPage3;
