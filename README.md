# DocuSign Integration with Fastify, Zod, and Node.js

This repository contains an integration that allows you to automate and simplify the sending of pre-created templates in DocuSign through a Node.js application. The integration uses the Fastify framework, the Zod library for data validation, and the DocuSign Node.js SDK to connect to DocuSign.

## Installation Instructions

Follow these steps to set up and run the integration on your machine:

1.  Clone this repository:

    ```bash
    git clone https://github.com/charleskx/integration_docusign
    ```

2.  Navigate to the project folder:

    ```bash
    cd integration_docusign
    ```

3.  Run the following command to install the dependencies:

    ```bash
    npm install
    ```

4.  Configure the `.env` file with your access credentials and DocuSign application information.

5.  Create a "private.key" file in the root of the project, containing the private key of the "RSA Keypair" application.

6.  Start the development server with the following command:

    ```bash
    npm run start:dev
    ```

7.  You can now access the application at the following address:

[http://localhost:3333](http://localhost:3333)

## How the Integration Works

The integration allows you to send pre-created templates in DocuSign in an automated way, eliminating the need for manual interaction. It uses Fastify as the web framework to create an API that accepts requests to send documents.

## Technologies Used

- [Fastify](https://fastify.io/): A lightweight and efficient web framework for Node.js.
- [Zod](https://github.com/colinhacks/zod): A library for data validation in TypeScript.
- [DocuSign Node.js SDK](https://github.com/docusign/docusign-node-client): The official DocuSign SDK for Node.js, making it easy to integrate with DocuSign services.

Make sure to properly configure your DocuSign credentials and application information in the `.env` file for the integration to work correctly.

Enjoy automating document sending with DocuSign using this integration!
