
# random-code

### Get a random text code for your needs.




## Installation

### npm
```bash
  npm install random-code
```
### yarn
```bash
  yarn add random-code
```
    
## Usage/Examples

```javascript
import getRandomCode from 'random-code'

const lettersCode = getRandomCode(6, { letters: true }); // arovup

const absoluteRandomCode = getRandomCode(16,
  { letters: true, digits: true, symbols: true },
  true,
); // W$+mj4^/@ri%Z48v

/** 
 * type PatternConfig = {
 *   letters?: boolean;
 *   digits?: boolean;
 *   symbols?: boolean;
 * }
// getRandomCode(length: number, config: PatternConfig, uppercase: boolean)
```

