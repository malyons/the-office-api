# The Office API



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [node.js](https://nodejs.org/en/download/) - 10.1

* [yarn](https://yarnpkg.com/en/) - package manager

### Installation

Clone the repository

```
git clone https://github.com/malyons/the-office-api.git
```

Install dependencies

```
yarn
```

## Running the tests

```
yarn test
```

There's currently only 1 test suite that checks for the environment variables to be set for a Sendgrid API key, to and from email, and to make sure error handling within the mail send methods work correctly.

### Linting

eslint is used in this project, using the airbnb rules.

```
yarn lint
```

## Built With

* [Express](https://github.com/sendgrid/sendgrid-nodejs) - Used to interact with the Sendgrid API
* [Webpack](https://www.npmjs.com/package/node-lambda) - Used to simulate AWS Lambda for local development, and deployment
* [Docker](https://www.npmjs.com/package/node-lambda) - Used to simulate AWS Lambda for local development, and deployment
* [Jest](https://facebook.github.io/jest/) - Facebooks test framework

## Contributing

1. Fork the repo
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Added some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

Please read [CONTRIBUTING.md](https://github.com/malyons/the-office-api/blob/master/CONTRIBUTING.md) for more details on the code of conduct.

## Authors

* **Marcus Lyons** - *Initial work* - [@malyons](https://github.com/malyons)

The list of [contributors](https://github.com/malyons/the-office-api/contributors) who participated in this project.

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE.md) file for details
