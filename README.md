	
#	Elbow-Room Sass 
A Sass Built Margin and Padding System for Tweaking Layouts by @AndrewBiddinger 

**Version: 0.0.2**

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
.buffer-example-custom {
  @include buffer();
}
.buffer-right-example-custom {
  @include buffer(right);
}
.bosom-large-example-left-right {
  @include bosom(left right, lg);
}

.bosom-example {
  @include bosom();
}

.anti-bosom-example {
  @include bosom(all, reg, anti);
}

```
