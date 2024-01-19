import Keyring, { encodeAddress } from "@polkadot/keyring";
import {
  mnemonicGenerate,
  mnemonicValidate,
  mnemonicToMiniSecret,
  secp256k1PairFromSeed,
} from "@polkadot/util-crypto";
import { u8aToHex } from "@polkadot/util";
import { ethers } from "ethers";

export const useBIP39 = () => {
  const isValidMnemonic = (mnemonic: string) => {
    return mnemonicValidate(mnemonic);
  };

  const generateRandomMnemonic = () => {
    return mnemonicGenerate();
  };

  const getMnemonicDetail = (mnemonic: string) => {
    const key = new Keyring({ type: "ecdsa" });
    const seed = mnemonicToMiniSecret(mnemonic);
    const address = key.addFromSeed(seed).address;
    const { publicKey, secretKey } = secp256k1PairFromSeed(seed);
    const hexPublicKey = u8aToHex(publicKey);
    const hexSecretKey = u8aToHex(secretKey);
    const ethAddress = ethers.computeAddress(hexPublicKey);
    const ss58PublicKey = encodeAddress(hexPublicKey, 42);
    return {
      address,
      publicKey: hexPublicKey,
      privateKey: hexSecretKey,
      ethAddress,
      ss58PublicKey,
    };
  };

  return {
    isValidMnemonic,
    generateRandomMnemonic,
    getMnemonicDetail,
  };
};
