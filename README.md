# Memorable Unique Identifiers for Node.js/TypeScript

A implementation of [Memorable Unique Identifiers](https://github.com/microprediction/muid) (Muids) in Node.js/TypeScript

## Installation

```
npm install memorable-unique-identifier
```

## Usage

```js
import { MemorableUniqueIdentifier } from "memorable-unique-identifier";

// Create a key of difficulty 6 this should
// not take long at all.
const result = MemorableUniqueIdentifier.create(6);

console.error(result);

// Example result output (your result will vary)
//
// {
//  length: 6,
//  pretty: 'Sma Eel',
//  key: '1ed2798ec3f5d61270629ab6ad14f7e8',
//  hash: '53aee16014b2829688c2907ae010f90b'
// }
```

## API

### MemorableUniqueIdentifier

• **MemorableUniqueIdentifier**:

### `Static` animal

▸ **animal**(`key`: string): _undefined | string_

Return the animal name from the specified key.

**Parameters:**

| Name  | Type   | Description                                   |
| ----- | ------ | --------------------------------------------- |
| `key` | string | The key to hash and retrieve the animal name. |

**Returns:** _undefined | string_

### `Static` bhash

▸ **bhash**(`key`: string): _string_

Return the first 32 bytes a hex encoded string

**Parameters:**

| Name  | Type   | Description                               |
| ----- | ------ | ----------------------------------------- |
| `key` | string | The key to hash (should be lowercase hex) |

**Returns:** _string_

string A 32 byte hash

### `Static` create

▸ **create**(`difficulty`: number): _MinedKey_

Create a new memorable unique identifier with the specified
difficulty.

**Parameters:**

| Name         | Type   | Default | Description                                     |
| ------------ | ------ | ------- | ----------------------------------------------- |
| `difficulty` | number | 8       | The difficulty or length of the Muid to create. |

**Returns:** _MinedKey_

### `Static` difficulty

▸ **difficulty**(`key`: string): _number_

The difficulty or length of the passed key

**Parameters:**

| Name  | Type   | Description       |
| ----- | ------ | ----------------- |
| `key` | string | The candidate key |

**Returns:** _number_

number The difficulty of the key. 0 if the key is invalid.

### `Static` mine_until

▸ **mine_until**(`difficulty`: number, `quota`: number): _MinedKey[]_

Mine until the necessary number of keys are produced.

**Parameters:**

| Name         | Type   |
| ------------ | ------ |
| `difficulty` | number |
| `quota`      | number |

**Returns:** _MinedKey[]_

### `Static` search

▸ **search**(`code`: string): _undefined | string_

Return the spirit animal given the public identity

**Parameters:**

| Name   | Type   | Description                              |
| ------ | ------ | ---------------------------------------- |
| `code` | string | The code of which to extract the animal. |

**Returns:** _undefined | string_

### `Static` shash

▸ **shash**(`source`: Buffer): _string_

Hash a Buffer and return the first 16 bytes encoded
in hex as a 32 byte string.

**Parameters:**

| Name     | Type   | Description         |
| -------- | ------ | ------------------- |
| `source` | Buffer | The buffer to hash. |

**Returns:** _string_

### `Static` validate

▸ **validate**(`key`: string): _boolean_

Check to see if the key is a memorable unique identifier
by extracting the animal name.

**Parameters:**

| Name  | Type   | Description       |
| ----- | ------ | ----------------- |
| `key` | string | The candidate key |

**Returns:** _boolean_

boolean Indicate if the key is a valid Muid

### MinedKey

• **MinedKey**:

### hash

• **hash**: _string_

### key

• **key**: _string_

### length

• **length**: _number_

### pretty

• **pretty**: _string_

## TODO

[ ] Use the WebCrypto API's to allow these identifiers to be
generated in the browser.
