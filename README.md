# Fast Rank
### Take an array of weights and an array of datas and returns a mark

Note that for performance purpose no verification is done on arguments. You must provide arrays of numbers and arrays that have the same length.

```javascript
var fastRank = require ('fast-rank');
fastRank([0, 1, 2, 3], [3004, 14298, 1781, 6361]); // {mark: 1.45, total: 25444}
fastRank.total([3004, 14298, 1781, 6361]); //25444
fastRank.mark(([0, 1, 2, 3], [3004, 14298, 1781, 6361]); //1.45
```