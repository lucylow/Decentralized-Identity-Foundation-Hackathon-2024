# ZKURE : VC Gated Dapp

Schema Hash
The Schema Hash is a unique identifier for a Claim Schema. It is derived by hashing the string that represents unique identifier @id of the Claim Schema type. In the previous example, the hash pre-image is the string https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v4.jsonld#KYCAgeCredential. ` For example, in the case of the Auth Claim the schema hash would be


var sHash core.SchemaHash
h := Keccak256([]byte("https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v4.jsonld#KYCAgeCredential"))
copy(sHash[:], h[len(h)-16:])
sHashHex, _ := sHash.MarshalText()
fmt.Println(string(sHashHex))

'''

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
  
'''

This template spins up a dapp that is

- ✅ Built with the popular [NextJS](https://nextjs.org/) library
- ✅ VC Gated with a [Polygon ID KYCAgeCredential](https://oceans404.notion.site/How-to-get-a-KYCAgeCredential-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4)
- ✅ Fully connected with to all EVM chains including Polygon zkEVM Cardona Testnet and Polygon Amoy Testnet with [RainbowKit](https://www.rainbowkit.com/)
- ✅ Beautifully styled with configurable components and icons from the [Chakra UI](https://chakra-ui.com/docs/components) library
- ✅ Ready to interact with any smart contract thanks to working read and write examples from a Polygon zkEVM Testnet demo smart contract with [wagmi hooks](https://wagmi.sh/)

Use this template as a base to bootstrap a Polygon hackathon project **FAST** 🏃🏻‍♀️ so you can focus on your dapp's business logic & building the value layer of the internet. 🚀

Love or hate something about this template? Let me know by [tweeting your feedback](https://twitter.com/intent/tweet?text=gm%20Steph%20I'm%20building%20with%20your%20VC%20gated%20Dapp%20template%20%400ceans404%20https%3A%2F%2Fgithub.com%2Foceans404%2Ffullstack-polygon-id-vc-gated-dapp%20%400xPolygon)

## Getting started with the template

Node requirement: **node v20.2.0**

Here's how to check your node version.

```bash
node -v
```

If you're not running this version, you can switch your version with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

#### Setup

0. Visit the template repo https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/tree/main and click "Use this template" to create a new repo

1. Get a KYCAgeCredential Verifiable Credential - [follow instructions here](https://oceans404.notion.site/How-to-get-a-KYCAgeCredential-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4)

2. Follow server setup instructions

https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/tree/main/server

3. Follow frontend setup instructions

https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/tree/main/did-frontend

## Default localhosts

- Frontend: localhost:3000
- Server: localhost:8080

## Here's the fullstack vc gated dapp this template spins up

Welcome page: In order to see the dapp, you need to prove your access rights. Click the "Prove access rights" button

<img width="1135" alt="Screenshot 2023-06-23 at 10 51 19 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/65c486ea-16f5-4ad7-9da5-97492bc83b7e">

A modal with a QR code appears. Scan this QR code with your Polygon ID mobile app. Note: you must hold a KYCAgeCredential with a birthday before this year. [Here's how to get the KYCAgeCredential VC](https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4)

<img width="1134" alt="Screenshot 2023-06-23 at 10 51 30 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/c570c4c6-c549-4dea-9f4b-611bb54bbe78">

If you successfully complete age verification, you'll see a success message, then be redirected to the dapp.

<img width="1133" alt="Screenshot 2023-06-23 at 10 51 57 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/f3d12060-d17e-4c55-b4da-43c6fe13c7eb">

This is the Dapp page that you see once you've proved access rights. It's set up with a RainbowKit wallet connector and has read and write to smart contract examples.

<img width="1134" alt="Screenshot 2023-06-23 at 10 52 19 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/7e89b2b8-fb78-42df-9bc1-5938198af3a8">
