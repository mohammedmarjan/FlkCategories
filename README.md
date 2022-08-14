# FlkCategories

This code setup allows you to list, and get categories as given by the api https://www.cubyt.io/data/categories. A JS file is used to store the data. This is just an example and of course you could use any data storage as a backend.

## Use-cases

- API for a Web Application
- API for a Mobile Application

## Setup

```bash
npm install
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```

## Usage

You can retrieve categories with the following commands:


### List all Categories

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/categories
```

Example output:
```bash
[
    {
        "category_name": "ACCELEROMETERS",
        "display_name": "Accelerometers",
        "description": null,
        "image_uri": null,
        "spec_parameters": [
            null
        ],
        "attributes": {
            "null": {
                "null": null
            }
        }
    },
    {
        "category_name": "ANALOG_MULTIMETERS",
        "display_name": "Analog Multimeters",
        "description": null,
        "image_uri": null,
        "spec_parameters": [
            null
        ],
        "attributes": {
            "null": {
                "null": null
            }
        }
    },]%
```

### Get one Category

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/categories/<category>
```

Example Result:
```bash
  {
        "category_name": "ANALOG_MULTIMETERS",
        "display_name": "Analog Multimeters",
        "description": null,
        "image_uri": null,
        "spec_parameters": [
            null
        ],
        "attributes": {
            "null": {
                "null": null
            }
        }
    }%
```

