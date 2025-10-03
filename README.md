# Greet Package

Random greeting message generator using lodash.

## Installation

```bash
npm install github:your-username/greet-package
```

## Usage

```typescript
import { greeting, GreetingResponses } from '@nova/greet';

console.log(greeting());
console.log(GreetingResponses);
```

```javascript
const { greeting } = require('@nova/greet');

console.log(greeting());
```

## API

### `greeting()`

Returns a random greeting string.

```typescript
greeting();
```

### `GreetingResponses`

Array of all available greetings.

```typescript
['Ohaiyo', 'Yo! ✨', 'Henlo!', 'Sup!', 'Heya!', 'Hi hi~', 'Aloha! 🌺', '*waves*', 'Heyyo!', 'Wassup!']
```

## Development

```bash
npm install
npm run build
```

## License

MIT