# visualizeCompleteness.js

visualizeCompleteness.js is made for visualizing the completeness.

## Getting Started

Include visualizeCompleteness.js.
```
<script src="visualizeCompleteness.js"></script>
```

Create class VCompleteness after the elements are created.
```
let obj = new VCompleteness(".indicator", {"method": "blur"});
```

You may update the appearance by using:
```
obj.update(50);
```

## Demo
https://ivyip.github.io/visualizeCompleteness/

## Options
You can try to override some default value by setting the options.
e.g:
```
new VCompleteness(".indicator", {"method": "area"});
```
The followings are possible options for "method":
| Parameter | Description | Default |
| --- | --- | --- |
| blur | ... | ... |
| area |... | ... |
| width | ... | ... |
| height | ... | ... |
| brightness | ... | ... |
| darkness | ... | ... |
| rotate | ... | ... |
| horizontal-move | ... | ... |
| vertical-move | ... | ... |
| grayscale | ... | ... |
| opacity | ... | ... |