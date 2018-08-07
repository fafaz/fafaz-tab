# fafaz-Tab
fafaz-Tab is a lightweight tab plugin with no dependencies (3KB minified / 1.3KB gzipped)

</br><br/>

## Instructions 
#### common

```html
<body>
    <div class="tab" hidden>
        <div class="tab-header">
            <div class="tab-header__item">title 1</div>
            <div class="tab-header__item">title 2</div>
            <div class="tab-header__item">title 3</div>
        </div>
        <div class="tab-body">
            <div class="tab-body__item">content 1</div>
            <div class="tab-body__item">content 2</div>
            <div class="tab-body__item">content 3</div>
        </div>
    </div>
</body>
```

<br/>

#### basic usage

```html
<body>
  .
  .
  .

    <script src="path/Tab.min.js"></script>
    <script>
        var myTab = new fafaz.Tab.default('.tab');
    </script>
</body>
```

<br/>

#### package manager + babel compiler 

`npm install --save fafaz-tab` **or** `yarn add fafaz-tab`

```javascript
import Tab from 'fafaz-tab';

const myTab = new Modal('.tab');
```


<br/><br/>

## Events

```javascript
var myTab = new fafaz.Tab('.tab');
myTab.on('change', ({ idx, container }) => {
    console.log(idx, container);
})
```


<br/><br/>

## Compatibility

IE10+ (this library uses css flexbox)

<br/><br/>

## License

MIT
