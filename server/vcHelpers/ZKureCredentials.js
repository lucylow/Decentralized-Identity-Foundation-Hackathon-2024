module.exports = {
    // 1. VaccinationRecordCredential
    // This credential verifies that an individual has received a specific vaccination, such as COVID-19 or influenza.
    // It can be used to confirm immunization status for travel, work, or healthcare access.
    VaccinationRecordCredential: (credentialSubject) => ({
      id: 1,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'VaccinationRecordCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/vaccination-record.jsonld',
        credentialSubject,
      },
    }),
  
    // 2. COVIDTestResultCredential
    // This credential validates the COVID-19 test result of an individual, showing the test type, result, and date.
    // Useful for travel, event attendance, or workplace safety compliance.
    COVIDTestResultCredential: (credentialSubject) => ({
      id: 2,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'COVIDTestResultCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/covid-test-result.jsonld',
        credentialSubject,
      },
    }),
  
    // 3. AllergyConditionCredential
    // This credential stores information on allergies, such as food or medication allergies, to ensure safe medical treatment.
    // Often required in healthcare settings to prevent adverse reactions.
    AllergyConditionCredential: (credentialSubject) => ({
      id: 3,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'AllergyConditionCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/allergy-condition.jsonld',
        credentialSubject,
      },
    }),
  
    // 4. GovernmentIDVerificationCredential
    // This credential verifies the identity of an individual using government-issued ID, like a passport or driver’s license.
    // Essential for identity proofing in various official and private sector applications.
    GovernmentIDVerificationCredential: (credentialSubject) => ({
      id: 4,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'GovernmentIDVerificationCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/government-id-verification.jsonld',
        credentialSubject,
      },
    }),
  
    // 5. AgeVerificationCredential
    // This credential confirms that an individual meets a minimum age requirement.
    // Useful for accessing age-restricted services, such as alcohol purchases or online content.
    AgeVerificationCredential: (credentialSubject) => ({
      id: 5,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'AgeVerificationCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/age-verification.jsonld',
        credentialSubject,
      },
    }),
  
    // 6. EmploymentVerificationCredential
    // This credential verifies employment status, such as the employer, position, and employment period.
    // Useful for background checks, loan applications, and job applications.
    EmploymentVerificationCredential: (credentialSubject) => ({
      id: 6,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'EmploymentVerificationCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/employment-verification.jsonld',
        credentialSubject,
      },
    }),
  
    // 7. EducationalQualificationCredential
    // This credential verifies academic achievements, such as degrees or certifications.
    // Often used for employment verification, academic admissions, and licensing.
    EducationalQualificationCredential: (credentialSubject) => ({
      id: 7,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'EducationalQualificationCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/educational-qualification.jsonld',
        credentialSubject,
      },
    }),
  
    // 8. HealthInsuranceCredential
    // This credential provides health insurance information, such as policy details and coverage dates.
    // Important for healthcare access and claims processing.
    HealthInsuranceCredential: (credentialSubject) => ({
      id: 8,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'HealthInsuranceCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/health-insurance.jsonld',
        credentialSubject,
      },
    }),
  
    // 9. PrescriptionRecordCredential
    // This credential verifies an individual’s prescription details, such as medication type and dosage.
    // Used in healthcare to ensure continuity of care and avoid prescription errors.
    PrescriptionRecordCredential: (credentialSubject) => ({
      id: 9,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'PrescriptionRecordCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/prescription-record.jsonld',
        credentialSubject,
      },
    }),
  
    // 10. MedicalHistoryCredential
    // This credential holds information on an individual's medical history, including past diagnoses and treatments.
    // Important for healthcare providers to inform treatment decisions.
    MedicalHistoryCredential: (credentialSubject) => ({
      id: 10,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'MedicalHistoryCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/medical-history.jsonld',
        credentialSubject,
      },
    }),
  
    // 11. ResidenceVerificationCredential
    // This credential verifies an individual's residential address, often required for service eligibility or legal compliance.
    // Useful for housing applications, financial services, and government benefits.
    ResidenceVerificationCredential: (credentialSubject) => ({
      id: 11,
      circuitId: 'credentialAtomicQuerySigV2',
      query: {
        allowedIssuers: ['*'],
        type: 'ResidenceVerificationCredential',
        context:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/residence-verification.jsonld',
        credentialSubject,
      },
    }),
  };
  