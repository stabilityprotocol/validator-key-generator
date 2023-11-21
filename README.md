# validator-key-generator

Welcome to our BIP39 Mnemonic Generator project. This platform is designed to securely generate BIP39 mnemonic phrases, commonly used for cryptographic key generation in blockchain technologies. It's an essential tool for setting up validators, managing wallets, and ensuring secure blockchain operations.

Check out the live version of the application [here](https://stabilityprotocol.github.io/validator-key-generator/).

## Features

- Mnemonic Generation: Generate a new BIP39 compliant 12, 15, 18, or 24-word mnemonic phrase.
- Entropy Source: Utilizes a secure and robust method to generate random entropy for mnemonics.
- Checksum Verification: Ensures the integrity of generated mnemonics with built-in checksum validation.
- User-Friendly Interface: Simple and intuitive interface for both generating and entering mnemonics.
- Secure Practices: Prioritizes security in every aspect of mnemonic generation and handling.

## Getting Started

1. Clone the Repository
2. Install Dependencies

```
yarn
```

3. Run the Application

```bash
yarn dev
```

The application will be available on `localhost:5173`.

## Usage

To generate a new mnemonic, simply click on the 'Generate New Mnemonic' button.
To use an existing mnemonic, enter it into the provided field.
Follow the on-screen instructions for further steps.

## Contribution

Contributions are welcome! If you have suggestions or want to improve the code, please feel free to fork the repository and submit a pull request.

## Security

While we strive to implement robust security measures, please ensure to follow best practices for securing mnemonic phrases. Do not share your mnemonic phrases publicly.
