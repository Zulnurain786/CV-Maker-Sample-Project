import mongoose from 'mongoose'

const TwoPersonApplicationSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref:'User',required:true},
    title: { type: String, default: "Untitled" },
    
    first_person_vorname: { type: String, required: true },
    first_person_nachname: { type: String, required: true },
    first_person_strabe: { type: String, required: true },
    first_person_hausnummer: { type: String, required: true },
    first_person_PLZ: { type: String, required: true },
    first_person_Ort: { type: String, required: true },
    first_person_email: { type: String, required: true },
    first_person_tel: { type: String, required: true },
    first_person_geburtsdatum: { type: String, required: true },
    first_person_ausgeübterBeruf: { type: String, required: true },
    first_person_arbeitgeber: { type: String, required: true },
    first_person_income: { type: String, required: true },
    first_person_inputfoto: { type: String },
    first_person_textarea1: { type: String },
    first_person_textarea2: { type: String },
    first_person_textarea3: { type: String },
    first_person_textarea4: { type: String },
    first_person_textarea5: { type: String },
    first_person_noofpeople: { type: String },
    first_person_status: { type: String },
    first_person_currentactivity: { type: String },
    first_person_currentemployer: { type: String },
    first_person_incomee: { type: String },
    first_person_salarystatementlast : { type: String, default: "step3m1" },
    first_person_salarystatementbefore : { type: String, default: "step3m2" },
    first_person_salarystatementago : { type: String, default: "step3m3" },
    
    first_person_fläche : { type: String },
    first_person_anzahlderzimmer : { type: String },
    first_person_residencepermit  : { type: String, default: "step4m1" },
    first_person_identificationdocument  : { type: String, default: "step5m1" },
    first_person_shortvideo  : { type: String, default: "step5m2" },
    first_person_currentSchufareport  : { type: String, default: "step6m1" },
    first_person_rentalschoolfree  : { type: String, default: "step7m1" },
    first_person_signatureData  : { type: String, default: "signature" },




    second_person_vorname: { type: String, required: true },
    second_person_nachname: { type: String, required: true },
    second_person_strabe: { type: String, required: true },
    second_person_hausnummer: { type: String, required: true },
    second_person_PLZ: { type: String, required: true },
    second_person_Ort: { type: String, required: true },
    second_person_email: { type: String, required: true },
    second_person_tel: { type: String, required: true },
    second_person_geburtsdatum: { type: String, required: true },
    second_person_ausgeübterBeruf: { type: String, required: true },
    second_person_arbeitgeber: { type: String, required: true },
    second_person_income: { type: String, required: true },
    second_person_inputfoto: { type: String },
    second_person_textarea1: { type: String },
    second_person_textarea2: { type: String },
    second_person_textarea3: { type: String },
    second_person_textarea4: { type: String },
    second_person_textarea5: { type: String },
    second_person_noofpeople: { type: String },
    second_person_status: { type: String },
    second_person_currentactivity: { type: String },
    second_person_currentemployer: { type: String },
    second_person_incomee: { type: String },
    second_person_salarystatementlast : { type: String, default: "step3m1" },
    second_person_salarystatementbefore : { type: String, default: "step3m2" },
    second_person_salarystatementago : { type: String, default: "step3m3" },
    
    second_person_fläche : { type: String },
    second_person_anzahlderzimmer : { type: String },
    second_person_residencepermit  : { type: String, default: "step4m1" },
    second_person_identificationdocument  : { type: String, default: "step5m1" },
    second_person_shortvideo  : { type: String, default: "step5m2" },
    second_person_currentSchufareport  : { type: String, default: "step6m1" },
    second_person_rentalschoolfree  : { type: String, default: "step7m1" },
    second_person_signatureData  : { type: String, default: "signature" },

    applicationImg :{type:String},
},{timestamp:true});

export default mongoose.models.TwoPersonApplication || mongoose.model('TwoPersonApplication',TwoPersonApplicationSchema);
