# fafaz-Tab
fafaz-Tab is a lightweight tab plugin with no dependencies (3KB minified / 1.3KB gzipped)

</br>

## Instructions

Install via add a css, javascript files from the [build](build) directory to your page.


<br/>

## Usage


#### HTML

```html
<head>
  ...
  <script src="Tab.min.js"></script>
</head>

<body>
  <div class="tab">
    <div class="tab-header">
      <div class="tab-header__item">title1</div>
      <div class="tab-header__item">title2</div>
      <div class="tab-header__item">title3</div>
    </div>
    <div class="tab-body">
      <div class="tab-body__item">content1</div>
      <div class="tab-body__item">content2</div>
      <div class="tab-body__item">content3</div>
    </div>
  </div>
</body>
```


</br>

#### Javascript

```javascript
var myTab = new fafaz.Tab.default('.tab');
```


<br/>

## Events

```javascript
var myTab = new fafaz.Tab('.tab');
myTab.on('change', ({ idx, container }) => {
    console.log(idx, container);
})
```


<br/>

## License

MIT
