# VisualDLP-API

## Installation

#### Requirements 

- Typescript 5.0.0+!
- Node 17.5 

#### From NPM

```shell
npm install visualdlp-api
```

## Basic Usage

making a call

```ts
import { initializeVDLP } from "visualdlp-api";

const vdlp = initializeVDLP(username, password)
vdlp.GetDoctorsList()
```



## Testing

To clone the main repository to your computer, you'll need to follow a few simple steps:

1. First, you'll need to open a terminal or command prompt on your computer.
2. Next, navigate to the directory where you want to clone the repository. You can use the cd command to do this.
3. Once you're in the right directory, type the following command and hit enter 

```shell 
git clone https://github.com/vamuscari/VisualDPL-API.git
```
to run the test you will need to add your service account to your environment variables

```shell
VLDP_USER={username}, VLDP_PW={password}
```

use `npm run test` to run Jest testing

It's important to note that the tests are not shipped to npm. If you need to run the tests locally, you'll need to navigate to the root directory of the cloned repository and run the tests using the appropriate testing framework. You might also need to install any dependencies or dev dependencies required to run the tests.



