	
#	Elbow-Room Sass 
Sass Margin and Padding Tweaking System by @AndrewBiddinger 
** Version: 0.0.1 **

## The System's Termanology
**Buffer:** (Referring to a shield, cushion, or bumper.) = CSS Margin - Margin is the elbowroom outside an element.
**Bosom:** (Referring to a state of enclosing intimacy, warm closeness, like a bosom friend.) = CSS Padding - Padding is the elbowroom within an element.

**Note:** Variables that can be customized globally or custom values can be passed directly into the mixins. 


## Example Usage
```
.buffer-example {
  @include buffer();
}
.buffer-example-custom {
  @include buffer($size: 945px, $left: true);
}
.buffer-large-example-left {
  @include bosom-lg($left: true, $right:true);
}

.bosom-example {
  @include bosom();
}

.anti-bosom-example {
  @include anti-bosom();
}

```
