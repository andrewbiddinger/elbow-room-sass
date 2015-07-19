	
#	Elbow-Room Sass 
Sass Margin and Padding Tweaking System by @AndrewBiddinger 

**Version: 0.0.1**

## The System's Termanology
**Buffer**  = CSS Margin (Referring to a shield, cushion, or bumper.) Margin is the elbowroom outside an element.

**Bosom** = CSS Padding (Referring to a state of enclosing intimacy, warm closeness, like a bosom friend.) Padding is the elbowroom within an element.

**Modifiers** control are the amount of elbow-room applied to the buffer or bosom mixin. 

* xs = 4px
* sm = 8px
* reg = 15px
* md = 30px
* lg = 45px
* xlg = 65px

## Modifyer Usage 
```
@include bosom-lg();
```

**Note:** Modifier Variables can be customized globally or custom values can be passed directly into the mixins being used. 


## Actual Usage Example
```
.buffer-example {
  @include buffer();
}
.buffer-example-custom {
  @include buffer($size: 945px, $left: true);
}
.buffer-large-example-left-right {
  @include bosom-lg($left: true, $right:true);
}

.bosom-example {
  @include bosom();
}

.anti-bosom-example {
  @include anti-bosom();
}

```
