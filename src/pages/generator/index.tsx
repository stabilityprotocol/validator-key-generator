import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Link,
  UnorderedList,
  ListItem,
  Text,
  VStack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { Terminal } from "./components/Terminal";
import { useCallback, useMemo, useState } from "preact/hooks";
import { useCopyToClipboard } from "usehooks-ts";
import { useBIP39 } from "../../hooks/useBIP39";
import CsvDownloader from "react-csv-downloader";

export const Generator = () => {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [, copy] = useCopyToClipboard();
  const toast = useToast();
  const { generateRandomMnemonic, isValidMnemonic, getMnemonicDetail } =
    useBIP39();

  const isValid = useMemo(() => isValidMnemonic(mnemonic), [mnemonic]);

  const onGenerateMnemonic = useCallback(() => {
    const mnemonic = generateRandomMnemonic();
    setMnemonic(mnemonic);
  }, []);

  const csvData = useMemo(() => {
    if (!isValid) return [];
    const detail = getMnemonicDetail(mnemonic);
    return [...Object.entries(detail), ["mnemonic", mnemonic]];
  }, [mnemonic]);

  return (
    <VStack align="stretch" marginBottom="10">
      <Card size="lg" variant={"outline"}>
        <CardBody>
          <Heading size={"md"} marginBottom="5">
            What is this?
          </Heading>
          <VStack align={"stretch"}>
            <Text>
              Initialize Validators Securely: Utilize our BIP39 mnemonic
              standard for a secure and user-friendly setup. This method
              generates a 12 to 24-word phrase, essential for creating
              cryptographic keys needed for validators. It combines robust
              security with simplicity, ensuring an efficient setup.
            </Text>
            <Text>
              <Link
                href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
                isExternal
              >
                Learn more about BIP39 <ExternalLinkIcon />
              </Link>
            </Text>
          </VStack>
        </CardBody>
      </Card>
      <Card size="lg" variant={"outline"}>
        <CardBody>
          <Heading size={"md"} marginBottom="5">
            Generate
          </Heading>
          <VStack align="stretch">
            <Text>
              Provide your existing BIP39 mnemonic phrase or click to create a
              new, secure 12 to 24-word phrase for setup.
            </Text>
            <Box>
              <Input
                value={mnemonic}
                isInvalid={mnemonic.length > 0 && !isValid}
                placeholder="Type here your mnemonic..."
                onChange={(e: {
                  target: { value: string | ((prevState: string) => string) };
                }) => setMnemonic(e.target.value)}
              />
            </Box>
            <HStack justifyContent={"flex-end"}>
              {isValid && (
                <Button
                  colorScheme="green"
                  onClick={() => {
                    copy(mnemonic);
                    toast({
                      title: "Copied to clipboard",
                    });
                  }}
                >
                  Copy to clipboard
                </Button>
              )}
              <Button colorScheme="green" onClick={onGenerateMnemonic}>
                Generate Mnemonic
              </Button>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
      {isValid && (
        <Card size="lg" variant={"outline"}>
          <CardBody>
            <VStack align="stretch">
              <Flex justifyContent={"flex-end"}>
                <CsvDownloader datas={csvData} filename="mnemonic.csv">
                  <Button>Download as CSV</Button>
                </CsvDownloader>
              </Flex>
              <Terminal {...{ mnemonic }} />
            </VStack>
          </CardBody>
        </Card>
      )}
      <Card size="lg" variant={"outline"}>
        <CardBody>
          <Heading size={"md"} marginBottom="4">
            Where to continue
          </Heading>
          <UnorderedList>
            <ListItem>
              <Link isExternal href="https://stabilityprotocol.com/">
                Homepage
              </Link>
            </ListItem>
            <ListItem>
              <Link isExternal href="https://docs.stabilityprotocol.com/">
                Documentation
              </Link>
            </ListItem>
            <ListItem>
              <Link isExternal href="https://github.com/stabilityprotocol">
                Github
              </Link>
            </ListItem>
            <ListItem>
              <Link isExternal href="https://medium.com/stabilitynetwork">
                Medium
              </Link>
            </ListItem>
            <ListItem>
              <Link isExternal href="https://discord.gg/fr7bq83c">
                Discord
              </Link>
            </ListItem>
            <ListItem>
              <Link
                isExternal
                href="https://github.com/stabilityprotocol/validator-key-generator"
              >
                Source code
              </Link>
            </ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
    </VStack>
  );
};
