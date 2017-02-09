[![Build Status](https://travis-ci.org/thomashare/slatecss.svg?branch=master)](https://travis-ci.org/thomashare/slatecss)

## Screen Sizes

**Default device screen sizes**:

- xs = extra-small (0px up to 543px)
- sm = small (544px up to 767px)
- md = medium (768px up to 992px)
- lg = large (992px up to 1139px)
- xl = extra-large (1140px and up)

Slate.css is mobile-first with a standard floating grid. The default maximum column size value is 12 (or 100%) for the specified device screen size.
Note: Because Slate is mobile-first, setting the columns 'xs' column size value will affect all screen sizes up until the next screen-size column size value is set.

> Ex: If 'xs-4' is set, medium devices up to extra-large devices will have a column size value of 4 also. If you set 'xs-4' and 'lg-6', small and medium devices will retain the size of 4, while xl and up will retain the size of 6.

Column sizes are set by screen size and value

> Ex: &lt;div class='xs-12 md-6 xl-4'&gt;
This will give extra-small (xs) devices such as smaller phones, a column size of 12. While medium screen size devices will have a column size of 6 and an extra-large device will have a column size of 4.

### Utilities

**break** or **break-left**: Will force an element to clear the current line and drop to the left of its parent.

**break-right**: Will force an element to clear the current line and drop to the right of its parent.

**push**: Columns can be pushed from the left a set amount of columns.

> Ex: 'md-push-2' will push the column over 2 columns on medium size devices and up.

**pull**: Columns can be pulled left and right for each screen size.

> Ex: 'md-right lg-left' will cause the element to pull to the right of its parent on medium size devices, while large screen sizes and up will pull the element back to the left of its parent.

### Margins

**SS** = Screen Size, **X** = X-axis (left and right), **Y** = Y-axis (top and bottom)

**\#** = level of margin. By default the max margin level is 25.

**SS-margin-Y-X**: Adds a specified level of margin to the top and bottom and left and right of an element. Y and X are equal to the level set, times the set margin-step. By default, the margin step is equal to 5px.

> Ex: xs-margin-2-8 will give the element a margin of 10px on the top and bottom, and a margin of 40px on its left and right sides.

> Margins from xs and up will be affected, unless a larger device margin size is set.

**SS-margin-x-#**: Adds a specified level of margin to the left and right of an element.

> Ex: 'xs-margin-y-5' will add a 25px margin to the top and bottom of the element on extra small devices and up.

**SS-margin-y-#**: Adds a specified level of margin to the top and bottom of an element.

### Padding

**\#** = level of padding. By default the max padding level is 25.

**SS-pad-Y-X**: Adds a specified level of padding to the top and bottom and left and right of an element. Y and X are equal to the level set, times the set margin-step. By default, the pad step is equal to 5px.

> Ex: xs-pad-2-0 lg-pad-3-2</p>
> 'xs-pad-2-0' will give the element a padding of 10px on the top and bottom, and a padding of 0px on its left and right sides. Because there is a padding setting for large devices, the element will only hold the setting for extra-small devices until it hits the large device.
> 'lg-pad-3-2' will give the element a padding of 15px on the top and bottom, and a padding of 10px on its left and right sides.

**SS-pad-x-#**: Adds a specified level of padding to the left and right of an element.
**SS-pad-y-#**: Adds a specified level of padding to the top and bottom of an element.

### Nav

**\#** = size of nav. Size settings are 'sm', 'md', and 'lg'</p>

**SS-nav-#**: Sets the size of the nav for each specified screen size.</p>

### Keep in mind

slate.css is currently in Beta development. Use at your own risk.

License MIT
