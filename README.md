# VisualDLP-API

## Installation

#### Requirements 

- Typescript 5.0.0+!

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

To use the tests first add your username and password to the environment. 
```shell
VLDP_USER={username}, VLDP_PW={password}
```

use `npm run test` to run Jest testing