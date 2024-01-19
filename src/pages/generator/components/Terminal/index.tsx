import { Box } from "@chakra-ui/react";
import { useBIP39 } from "../../../../hooks/useBIP39";
import { useMemo } from "preact/hooks";
import React from "preact/compat";

export const Terminal: React.FC<{ mnemonic: string }> = ({ mnemonic }) => {
  const { getMnemonicDetail } = useBIP39();

  const detail = useMemo(() => {
    return getMnemonicDetail(mnemonic);
  }, [mnemonic]);

  return (
    <Box
      backgroundColor={"darkblue"}
      borderRadius={"md"}
      fontFamily={"'Courier New', monospace"}
      color={"white"}
      textAlign={"left"}
      p="4"
    >
      <Box>ETH Address: {detail.ethAddress}</Box>
      <Box>SS58 Address: {detail.address}</Box>
      <Box>Private Key: {detail.privateKey}</Box>
      <Box>Public Key: {detail.publicKey}</Box>
      <Box>SS58 Public Key: {detail.ss58PublicKey}</Box>
      <Box>Mnemonic: {mnemonic}</Box>
    </Box>
  );
};
