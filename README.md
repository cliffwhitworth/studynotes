# Studynotes

Reactjs flashcard style app

## Getting Started

There are two package.json files, one in the server directory and one in the server/app directory.<br />
Use npm install in respective folders. <br />
Npm run dev in server directory to concurrently start the server and the app.

<!--
### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```
-->

The app uses Google OAuth and there are a few things that can be changed to take advantage of OAuth:
 * Uncomment this.props.history.push('/'); in requireAuth.js to utilize requireAuth HOC
 * Edit Header.js, case false:, to include only Home and Sign In for their respective ul tags to only show Notes and More when authenticated
 * Example of Note JSON {"category":"category1","name":"Title 1","purpose":"Description or purpose for Title 1","code":"Code"}

<!--
## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```
-->

## Deployment

See app on [HEROKU](https://powerful-castle-94827.herokuapp.com/)

## Built With

* Reactjs and Nodejs

<!--
## Contributing

Please read [CONTRIBUTING.md](https://github.com/cliffwhitworth/studynotes) for details on our code of conduct, and the process for submitting pull requests to us.
-->

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Cliff Whitworth** - *Initial work* - [cliffwhitworth](https://github.com/cliffwhitworth/studynotes)

<!--
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
-->

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to Stephen Grider at Udemy
