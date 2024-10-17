import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
// Register the Montserrat font
Font.register({
  family: 'Montserrat',
  fonts: [
    {
      src: '/Font/Montserrat/static/Montserrat-Medium.ttf',
      fontWeight: 'medium',
    },
    {
      src: '/Font/Montserrat/static/Montserrat-Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 0,
  },
  section: {
    margin: 10,
    padding: 40,
    fontSize: 12,
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  titleBlue: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: '#276aa4',
  },
  titleCenter: {
    marginTop: 50,
    marginBottom: 10,
    fontFamily: 'Montserrat',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titlePdf: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  titlePdfbody: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 15,
  },
  para: {
    color: '#9d9d9d',
    marginTop: 10,
  },
  paraBlue: {
    color: '#276aa4',
    marginTop: 10,
    lineHeight: 1.6,
  },
  parapdf: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
  },
  image: {
    margin: 'auto',
    marginBottom: 20,
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  pdfImage: {
    marginTop: 20,
    padding: 20,
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e2e2e2',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e2e2e2',
    marginBottom: 10,
    fontFamily: 'Montserrat',
    fontWeight: 'medium',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '50%',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e2e2e2',
  },
  tableCell: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 10,
    textAlign: 'left',
    color: '#5d4e40',
  },
  evenTableCell: {
    backgroundColor: '#f6f6f6',
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: '#276aa4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    border: '1px solid black',
    marginLeft: 20,
  },
  headerText: {
    flex: 1,
    textAlign: 'right',
    color: '#ffff',
    paddingBottom: 10,
    paddingTop: 10,
  },
  headerName: {
    textAlign: 'right',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerPhone: {
    textAlign: 'right',
    fontFamily: 'Montserrat',
    fontWeight: 'medium',
    fontSize: 13,
  },
  headerEmail: {
    textAlign: 'right',
    fontFamily: 'Montserrat',
    fontWeight: 'medium',
    fontSize: 13,
  },
  evenTableCol: {
    backgroundColor: '#f6f6f6',
  },
  oddTableCol: {
    backgroundColor: '#ffffff',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 10,
    left: 40,
  },
  pdfSection: {
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#e2e2e2',
  },
  pdfFooter: {
    paddingTop: 40,
    paddingBottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pfdLeft: {
    flex: 1,
    textAlign: 'left',
    color: '#000',
    paddingBottom: 10,
    paddingTop: 10,
  },
  pfdRight: {
    flex: 1,
    textAlign: 'right',
    color: '#000',
    paddingBottom: 10,
    paddingTop: 10,
  },
  datePlace: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    paddingRight: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    marginRight: 60,
  },
  imagePlace: {
    position: 'relative',
    paddingRight: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  signImage: {
    position: 'absolute',
    width: '80%',
  },
  signatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    paddingBottom: 24,
    marginRight: 40,
  },
  signHeader: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    textAlign:'left',
  },
  dateHeader: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    textAlign:'left',
  },
});


// Create Document Component
const MyDocument = ({ profileData }) => {
  // console.log(profileData);
  const rows = [
    { field: "first_person_Vorname", value: profileData.first_person_vorname },
    { field: "first_person_Nachname", value: profileData.first_person_nachname},
    { field: "first_person_Straße", value: profileData.first_person_strabe },
    { field: "first_person_hausnummer", value: profileData.first_person_hausnummer },
    { field: "first_person_PLZ", value: profileData.first_person_PLZ },
    { field: "first_person_Ort", value: profileData.first_person_Ort },
    { field: "first_person_E-Mail", value: profileData.first_person_email },
    { field: "first_person_Tel. Mobil", value: profileData.first_person_tel },
    { field: "first_person_Geburtsdatum", value: profileData.first_person_geburtsdatum },
    { field: "first_person_Ausgeübter Beruf", value: profileData.first_person_ausgeübterBeruf },
    { field: "first_person_Arbeitgeber", value: profileData.first_person_arbeitgeber },
    { field: "first_person_Nettoeinkommen (€)", value: profileData.first_person_income },
    { field: "first_person_textarea1", value: profileData.first_person_textarea1 },
    { field: "first_person_textarea2", value: profileData.first_person_textarea2 },
    { field: "first_person_textarea3", value: profileData.first_person_textarea3 },
    { field: "first_person_textarea4", value: profileData.first_person_textarea4 },
    { field: "first_person_textarea5", value: profileData.first_person_textarea5 },

  ];
  const secondpersonrecord = [

    { field: "second_person_Vorname", value: profileData.second_person_vorname },
    { field: "second_person_Nachname", value: profileData.second_person_nachname},
    { field: "second_person_Straße", value: profileData.second_person_strabe },
    { field: "second_person_hausnummer", value: profileData.second_person_hausnummer },
    { field: "second_person_PLZ", value: profileData.second_person_PLZ },
    { field: "second_person_Ort", value: profileData.second_person_Ort },
    { field: "second_person_E-Mail", value: profileData.second_person_email },
    { field: "second_person_Tel. Mobil", value: profileData.second_person_tel },
    { field: "second_person_Geburtsdatum", value: profileData.second_person_geburtsdatum },
    { field: "second_person_Ausgeübter Beruf", value: profileData.second_person_ausgeübterBeruf },
    { field: "second_person_Arbeitgeber", value: profileData.second_person_arbeitgeber },
    { field: "second_person_Nettoeinkommen (€)", value: profileData.second_person_income },
    { field: "second_person_textarea1", value: profileData.second_person_textarea1 },
    { field: "second_person_textarea2", value: profileData.second_person_textarea2 },
    { field: "second_person_textarea3", value: profileData.second_person_textarea3 },
    { field: "second_person_textarea4", value: profileData.second_person_textarea4 },
    { field: "second_person_textarea5", value: profileData.second_person_textarea5 },
  ];
 
  return (
    <Document>
      {/* page 1*/}
      <Page style={styles.page}>

      {/* header */}
      <View style={styles.header}>
      
       {/* <Image style={styles.headerImage} src="/images/img.png" /> */}
        <Image style={styles.headerImage} src={`${profileData.second_person_inputfoto}`} />
        <View style={styles.headerText}>
          <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
          <Text style={styles.headerPhone}>0987654313</Text>
          <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
        </View>
      </View>
       {/* header */}

        <View style={styles.section}>
          <Text style={styles.title}>MIETER- SELBSTAUSKUNFT</Text>
          <Text style={styles.para}>Ich bin/Wir sind an der Anmietung folgender Räumlichkeiten interessiert:</Text>
          <Text style={styles.para}>3 ZKB | Sommerallee 23, 1025 Berlin 2. Stock, rechts</Text>
          <Text style={styles.para}>Mietbeginn:</Text>
          <Text style={styles.para}>Im Rahmen der freiwilligen Selbstauskunft erteile/n ich/wir dem Vermieter nachfolgende Informationen zum Zweck einer möglichen Anmietung des o.g. Mietobjektes:</Text>
          <Image
            style={styles.image}
            src={`${profileData.first_person_inputfoto}`}
            // src="/uploads/abCapture.PNG"
            alt="Description of the image"
          />
          
          <View style={styles.table}>
            {/* Table Headers */}
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Value1</Text>
              </View>
            </View>
            {/* Table Rows */}
            {rows.map((row, index) => (
              <View style={[styles.tableRow]} key={index}>
                <View style={[styles.tableCol, index % 2 === 0 ? styles.evenTableCol : styles.oddTableCol]}>
                  <Text style={styles.tableCell}>{row.field}</Text>
                </View>
                <View style={[styles.tableCol, index % 2 === 0 ? styles.evenTableCol : styles.oddTableCol]}>
                  <Text style={styles.tableCell}>{row.value}</Text>
                </View>
              </View>
            ))}
          </View>
          <View>
            <Image
               style={styles.image}
               src={`${profileData.second_person_inputfoto}`}
               // src="/uploads/abCapture.PNG"
               alt="Description of the image"
            />
            {secondpersonrecord.map((row, index) => (
            <View style={[styles.tableRow]} key={index}>
                <View style={[styles.tableCol, index % 2 === 0 ? styles.evenTableCol : styles.oddTableCol]}>
                <Text style={styles.tableCell}>{row.field}</Text>
                </View>
                <View style={[styles.tableCol, index % 2 === 0 ? styles.evenTableCol : styles.oddTableCol]}>
                <Text style={styles.tableCell}>{row.value}</Text>
                </View>
            </View>
            ))}
          </View>
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 1 end*/}

      {/* page 2*/}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
          <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
          <Text style={styles.headerPhone}>0987654313</Text>
          <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
          
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>ÜBER MICH</Text>
            <Text style={styles.paraBlue}>Hallo!</Text>
            <Text style={styles.paraBlue}>Mein Name ist Ivan, bin 29 Jahre alt, komme aus Barcelona, Spanien und wohne seit 2012 in Deutschland. Ich bin derzeit als Berater berufstätig und arbeite bei Consulting 4 Drive, einem Beratungsunternehmen aus Berlin. Ihre Wohnung scheint genau das anzubieten, wonach ich für mein neues Zuhause suche, und daher würde ich mich sehr freuen, wenn ich die Wohnung vermieten könnte.</Text>
            <Text style={styles.paraBlue}>Dank meines stabilen Einkommens von mehr als 3000 € Netto pro Monat (+Bonus) und Ersparnisse von mehr als 22.000 € bin ich in der Lage, mir diese Wohnung leisten zu können und biete damit ausreichende Sicherheit und Stabilität für zukünftige Mietzahlungen.</Text>
            <Text style={styles.paraBlue}>Der Grund für meine Wohnungssuche liegt darin, dass meine derzeitige Wohnung langsam zu klein für meine Bedürfnisse wird. Dank meiner stabilen und komfortablen beruflichen Situation bin ich in der Lage, nach einer neuen größeren Wohnung zu suchen, wo ich langfristig leben kann.</Text>
            <Text style={styles.paraBlue}>Ich lege auch höchsten Wert darauf, die Wohnung gut zu pflegen, nicht nur, weil dies entscheidend für die Qualität der Wohnung ist, sondern auch, weil sie ein Raum ist, der mein tägliches Leben prägt.</Text>
            <Text style={styles.paraBlue}>Für meine Bewerbung füge ich anbei meine Einkommensnachweise, meinen Arbeitsvertrag, meinen Kontosaldo, den Nachweis meiner Mietzahlungen, den Schufa- Bonitätscheck, Haftpflichtversicherungsschein und den Personalausweis. Für weitere Fragen oder Informationen stehe ich immer gerne zur Verfügung.</Text>
            <Text style={styles.paraBlue}>Ich freue mich auf Ihre Rückmeldung.</Text>
            <Text style={styles.paraBlue}>Viele Grüße,</Text>
            <Text style={styles.paraBlue}>Ivan Gutierrez</Text>
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 2 end*/}

      {/* page 3*/}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>EINKOMMENSNACHWEISE (1/3)</Text>
            <Image style={styles.pdfImage}  src="/images/img.png" />
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 3 end*/}

      {/* page 4*/}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>EINKOMMENSNACHWEISE (2/3)</Text>
            <Image style={styles.pdfImage}  src="/images/img.png" />
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 4 end*/}

      {/* page 5*/}
      <Page style={styles.page}>
        {/* header */}

        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>EINKOMMENSNACHWEISE (2/3)</Text>
            <Image style={styles.pdfImage}  src="/images/img.png" />
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 5 end*/}

       {/* page 6*/}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>ARBEITSVERTRAG (1/3)</Text>
            <Image style={styles.pdfImage}  src="/images/img.png" />
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 6 end*/}

       {/* page 7*/}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>ARBEITSVERTRAG (2/3)</Text>
            <Image style={styles.pdfImage}  src="/images/img.png" />
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 7 end*/}

      {/* page 8*/}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>ARBEITSVERTRAG (3/3)</Text>
            <Image style={styles.pdfImage}  src="/images/img.png" />
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 8 end*/}

      {/* page 9 */}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.titleBlue}>SCHUFA - BONITÄTSCHECK</Text>
            <Image style={styles.pdfImage}  src="/images/img.png" />
          </View>
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 9 end*/}

      {/* page 10 */}
      <Page style={styles.page}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.headerImage} src="/images/img.png" />
          <View style={styles.headerText}>
            <Text style={styles.headerName}>Ivan Gutierrez Otero</Text>
            <Text style={styles.headerPhone}>0987654313</Text>
            <Text style={styles.headerEmail}>Ivan.gutierrez.otero@gmail.com</Text>
          </View>
        </View>
        {/* header */}

          <View style={styles.section}>
            <Text style={styles.title}>Untermieter</Text>
            <View style={styles.pdfSection}>
              <Text style={styles.titleCenter}>Mietschuldenfreiheitsbescheinigung</Text>
              <Text style={styles.titlePdf}>Vermieter/Eigentümer</Text>
              <Text style={styles.parapdf}>Nurten Güler</Text>
              <Text style={styles.parapdf}>Gontermannstraße 55</Text>
              <Text style={styles.parapdf}>12101 Berlin</Text>
              <Text style={styles.titlePdf}>Mieter</Text>
              <Text style={styles.parapdf}>Nurten Güler</Text>
              <Text style={styles.parapdf}>Gontermannstraße 55</Text>
              <Text style={styles.parapdf}>12101 Berlin</Text>
              <Text style={styles.titlePdfbody}>Der Vermieter/Eigentümer bestätigt folgendes:</Text>
              <Text style={styles.parapdf}>Während der Zeit des Mietverhältnisses ist der Mieter den vertraglichen Zahlungsverpflichtungen regelmäßig, fristgerecht und vollständig nachgekommen. Aus diesen Verpflichtungen bestehen keine Mietschulden oder auszugleichenden Beträge.</Text>
              <View style={styles.pdfFooter}>
                <View style={styles.pfdLeft}>
                  <Text style={styles.datePlace}>Berlin, 22.04.2024</Text>
                  <Text style={styles.dateHeader}>Ort, Datum</Text>
                </View>
                <View style={styles.pfdRight}>
                  <View style={styles.signatureContainer}>
                    <Image style={styles.signImage} src={`${profileData.second_person_signatureData}`} />
                  </View>
                  <Text style={styles.signHeader}>Unterschrift Vermieter</Text>
                </View>
              </View>
            </View>
          </View>
         
          {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} fixed />
      </Page>
      {/* page 10 end*/}
    </Document>
  );
};

export default MyDocument;
