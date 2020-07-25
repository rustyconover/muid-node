# Memorable Unique Identifiers for Node.js/TypeScript

A implementation of [Memorable Unique Identifiers](https://github.com/microprediction/muid) (Muids) in Node.js/TypeScript

## Installation

```
npm install memorable-unique-identifiers
```

## Usage

```js
import MemorableUniqueIdentifier from "memorable-unique-identifiers";

// Create a key of difficulty 6 this should
// not take long at all.
const result = MemorableUniqueIdentifier.create(6);

console.error(result);
```

## API
