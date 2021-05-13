## Naming

-   HSON:
    actually, HTML + JSON is,
    and i think, JSON is 'Javascript Son'
    but actaully is javascript object nataunal
    i think, HTML with JSON syntax but this is very hard
-   JSH:
    this come from,

    -   Javascript Sassy HTML
    -   Javascript HTML
    -   Javascript side HTML

-   HJS:
    -   HTML Javascript
    -   HTML Javascript Sassy
    -   HTML Javascript son

```yml
div {
  class: ['class-1', 'class-2'], # or `class: 'class-1 class-2'`
  attrs: {
    id: 'some-id',
    ...other attributes
  }
}
```

### Model 3

````scss
@mixin b-btn($type: 'secondary', $text: 'btn-click', $icon: 'cursor'){
  div.btn.btn-#{type}{
    i [class=`fa.fa-${icon}`]{}
    !{text}
  }
}
#app { // default div
  &div#second-id {}
  &div [id='first-id'] {}

  &div.class-a.class-b {}
  &div [class='class-1 class-2'] {}

  &div {
    span.child {
      @if($right.isEnabled()){
        Hi, Im am stron { 'developer' } for
        follow me please click a [href='#'] {
          &img [src='follow-icon.jpg']{}
          'click this icon'
        }
      } @else 'no thing to see!';
    }
    &label [for='#form'] {
      input [type='number', value=0]{}
      @include b-btn('primary', 'arrow-up', 'increase');
    }
  }
}```
````
