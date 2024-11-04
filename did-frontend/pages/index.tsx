import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import VcGatedDapp from '../components/VcGatedDapp';
import ZKureVerifier from '../components/ZKureVerifier.js'; 
import { useState } from 'react';
import { Center, Card, Image, CardBody, Container } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [provedAccessCredential, setProvedAccessCredential] = useState(false);

  return (
    <>
      {provedAccessCredential ? (
        <VcGatedDapp />
      ) : (
        <Center className={styles.mainpage}>
          <Container>
            <Card
              style={{
                border: '2px solid #805AD5',
              }}
            >
              <CardBody style={{ paddingBottom: 0 }}>
                <p>
                  Welcome to ZKure, a secure platform utilizing verifiable credentials for access.
                  Prove that you meet the required credential standards to proceed.
                </p>

                <ZKureVerifier
                  publicServerURL={process.env.NEXT_PUBLIC_VERIFICATION_SERVER_PUBLIC_URL}
                  localServerURL={process.env.NEXT_PUBLIC_VERIFICATION_SERVER_LOCAL_HOST_URL}
                  credentialType={'ZKureCredential'} // Updated credential type
                  issuerOrHowToLink={'https://zkure.com/get-your-credential'} // Placeholder link
                  onVerificationResult={setProvedAccessCredential}
                />

                <Image
                  src="https://yourzkurebrandingimage.url"
                  alt="ZKure branding image"
                  borderRadius="lg"
                />
              </CardBody>
              <a
                href="https://twitter.com/ZKcure"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
                    right: '0',
                    fontSize: '8px',
                  }}
                >
                  Template customized for ZKure 💜 by Your Team
                </p>
              </a>
            </Card>
          </Container>
        </Center>
      )}
    </>
  );
};

export default Home;
