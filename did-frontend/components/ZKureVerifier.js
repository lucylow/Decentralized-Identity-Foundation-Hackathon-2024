import React, { useState } from 'react';
import { Button, Box, Spinner, Text, VStack } from '@chakra-ui/react';

function ZKureVerifier({
  publicServerURL,
  localServerURL,
  credentialType,
  issuerOrHowToLink,
  onVerificationResult,
}) {
  const [loading, setLoading] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');

  const verifyCredential = async () => {
    setLoading(true);
    setVerificationMessage('');

    try {
      // Request credential verification from the server
      const response = await fetch(`${publicServerURL}/verify-credential`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credentialType }),
      });

      const result = await response.json();

      if (result.verified) {
        setVerificationMessage('Verification successful! Access granted.');
        onVerificationResult(true); // Grant access in the parent component
      } else {
        setVerificationMessage('Verification failed. Credential not valid.');
        onVerificationResult(false);
      }
    } catch (error) {
      setVerificationMessage('Verification error. Please try again.');
      console.error('Verification error:', error);
      onVerificationResult(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box border="1px solid #805AD5" p={4} borderRadius="md">
      <VStack spacing={4}>
        <Text fontSize="lg">
          To access this dapp, you must verify your ZKure credential.
        </Text>
        <Button
          colorScheme="purple"
          onClick={verifyCredential}
          disabled={loading}
        >
          {loading ? <Spinner size="sm" /> : 'Verify Credential'}
        </Button>
        {verificationMessage && <Text>{verificationMessage}</Text>}
        <Text fontSize="sm" color="gray.500">
          Need a credential?{' '}
          <a href={issuerOrHowToLink} target="_blank" rel="noopener noreferrer">
            Get your ZKure credential here
          </a>
        </Text>
      </VStack>
    </Box>
  );
}

export default ZKureVerifier;
