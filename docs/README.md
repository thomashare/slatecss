# Getting Started
Slate.css is an unopinionated CSS framework for rapid web layouts.
Slate is not a bunch of components, but rather utilities to help designers build faster :zap:

This framework will help minimize the amount of classes needed in your HTML.
It is not a replacement for writing CSS; Slate was made to help designers that know CSS and are tired of recreating the wheel.

Slate uses a large screen first design structure with the use of [breaks](#breaks).

<div class="flex items-center">
  <span>CDN:</span>
  <input class="ml2 p2" type="text" value="https://unpkg.com/slatecss@latest/slate.css" style="border: solid #B0B0B0 1px; border-radius: 3px; width: 300px;" onClick="this.setSelectionRange(0, this.value.length);">
</div>

## Grid
Any element can become a grid with the ```.grid``` class. Grid elements have 16 columns by default.
Below is an example of a common header, content, sidebar, and footer layout using Slate.

```HTML
<div class="grid">
  <header></header>
  <main class="s13"></main>
  <aside class="s3"></aside>
  <footer></footer>
</div>
```

### Span Sizes
Grid elements can span from 1 to 16 columns. An element with a class of ```.s1``` will span 1 column wide, whereas ```.s8``` will span half of the full width.

::: tip
If you want an element to start on column 4 and span full width. Simply add a trailing hyphen.<br>
Ex: ```.s4-```
:::

### Grid Item Alignment
Vertically center items inside a grid element with the ```.center``` class. Align grid items to the bottom with the ```.bottom``` class.

## Complex Grid Layouts
Sure columns are easy to deal with when you have them side-by-side.
What if you need your content to start on the fourth column of the grid?

Sure you could add an empty div of ```s4``` before the element, but that defeats the purpose of grid.

This is where the **from** element comes in handy.

### From
With the From class you can tell the element to start on a specific column of a grid and span the rest of the width.

Ex: ```.s4-```. This is telling the element to start on the fourth column and span the rest of the width.

The *dash* means you want to start the element on that specific column.
Without it, Slate will interpret the element as a span element and make it span 4 columns.

```HTML
<div class="grid">
  <header></header>
  <main class="s4-"></main>
  <footer></footer>
</div>
```

<div class="grid render">
  <header></header>
  <main class="s4-"></main>
  <footer></footer>
</div>

### From and To
Now, what if you need the element to span **from** and **to**? Simply append the end track number.

Ex: ```.s4-9```

```HTML
<div class="grid">
  <header></header>
  <main class="s4-13"></main>
  <footer></footer>
</div>
```

<div class="grid render">
  <header></header>
  <main class="s4-13"></main>
  <footer></footer>
</div>

### Custom Grid Columns
If 16 columns seems overkill for your grid element, you can specifiy the column count using a level modifier.
For instance, if you only require 4 columns of data, use ```.grid4```. This way you don't have to specifiy ```.s4``` on each element.

```HTML
<div class="grid4">
  <img src="...">
  <img src="...">
  <img src="...">
  <img src="...">
</div>
```

<div class="grid4">
  <img alt="" src="https://source.unsplash.com/350x400?person">
  <img alt="" src="https://source.unsplash.com/350x400?person?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?random?random">
</div>

### Grid Gaps
You can add spacing around your grid elements with the ```.gap``` class.

```HTML
<div class="grid3 gap">
  <img alt="" src="...">
  <img alt="" src="...">
  <img alt="" src="...">
</div>
```

<div class="grid3 gap">
  <img alt="" src="https://source.unsplash.com/350x400?person?person?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?person?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?random?person?random?random">
</div>

You can also use levels of 2 to 10 for grid gaps. Below is an example of a grid with a ```.gap5``` class added.

```HTML
<div class="grid3 gap5">
  <img alt="" src="...">
  <img alt="" src="...">
  <img alt="" src="...">
</div>
```

<div class="grid3 gap5">
  <img alt="" src="https://source.unsplash.com/350x400?person?person?random?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?person?random?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?random?person?random?random?random">
</div>

### Column and Row Gaps
In the case you need separate column and row gaps, use the ```.cgap``` and ```.rgap``` classes. Each of these can also handle levels between 2 to 10.<br>

Ex: ```.cgap5``` and ```.rgap3```

Row gap classes are helpful when paired with the grid break classes.
When your columns break into rows, you may require a row gap to help separate your content.

```HTML
<div class="grid3 md-break rgap3">
  <img alt="" src="...">
  <img alt="" src="...">
  <img alt="" src="...">
</div>
```

<div class="grid3 md-break rgap3">
  <img alt="" src="https://source.unsplash.com/350x400?person?person?random?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?person?random?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?random?person?random?random?random">
</div>

## Flex
Give an element a flex display with the ```.flex``` class.
Flex is useful for side-by-side elements such as a header navigation or an inline strip of data components.

### Justification
With flex, you can align items so all items have equal space around them with ```.around```. Use the ```.between``` class to give equal space between items.
Use the ```.center``` class to align all items together in the center of the grid. The ```.end``` class will place all items at the end of the container.

### Alignment
Flex container children can be aligned center and at the end of the container.
Use the ```.items-center``` class to center align all items. If you need items to align at the end of the container, use ```.items-end``` class.<br>

::: tip
When using the ```.column``` class in a flex element, ```.items-center``` will center align children horizontally.
Additionally, the ```.items-end``` children will be aligned to the bottom of a flex column element.
:::

### Column
By default, flex alignment flows horizontally in the row direction.
Use the ```.column``` class to make a flex item flow vertically in the column direction.<br>

When using the column class with flex, you can place your last element at the end of the container by giving it the ```.bottom``` class.

::: warning
If you have a ```.bottom``` element inside your flex container, the item justifications will have no effect on your flex container.
:::

### Wrap
Use the ```.wrap``` class along with the ```.flex``` class to make inside elements wrap.
This is useful if you require multiple elements to be a specific minimum width.

### Break
If you ever need to break an item in a row of elements, use the ```.break``` class on the element.
By default, ```.flex``` items won't wrap. You can set your flex items to wrap by adding the ```.wrap``` class to the flex container.

## Render
When creating a new layout, it can be difficult to see where the elements will be positioned without content. Use the ```.render``` class on the parent element to give all children a subtle grey background and border.

Here's an example of a grid element with the ```.render``` class added.

```HTML
<div class="grid render">
  <header></header>
  <main class="s13"></main>
  <aside class="s3"></aside>
  <footer></footer>
</div>
```

<div class="grid render">
  <header></header>
  <main class="s13"></main>
  <aside class="s3"></aside>
  <footer></footer>
</div>

At times you may require different height elements to better preview your design.
These elements will provide more or less height in your render elements.
```.sm``` ```.md``` ```.lg``` ```.xl```.

Each modifier class will give the element a different minimum height.

- ```.sm``` = 100px
- ```.md``` = 250px
- ```.lg``` = 500px
- ```.xl``` = 750px

Here's what the render element will look like with these additions.

```HTML
<div class="grid render">
  <header></header>
  <aside class="s3"></aside>
  <main class="s10 md"></main>
  <aside class="s3"></aside>
  <footer class="sm"></footer>
</div>
```

<div class="grid render">
  <header></header>
  <main class="s3"></main>
  <main class="s10 md"></main>
  <aside class="s3"></aside>
  <footer class="sm"></footer>
</div>

::: tip
Add a size modifier class to the render element to give all children that minimum height.<br>
Ex: ```<div class="render lg"></div>```
:::

## Display
You can change the display of any element using the ```.inline``` ```.iblock``` and ```.block``` classes.

::: tip
Append the ```-children``` modifier to any display class to target the elements' children.
A good example of this would be if you needed multiple images side-by-side.<br>

Below is an example of using the ```.iblock-children``` class to achieve that.
:::

```HTML
<nav class="iblock-children p2-children">
  <a href="#">Home</a>
  <a href="#">What We Do</a>
  <a href="#">Recent Work</a>
  <a href="#">Contact Us</a>
</nav>
```

<nav class="iblock-children p2-children">
  <a href="#">Home</a>
  <a href="#">What We Do</a>
  <a href="#">Recent Work</a>
  <a href="#">Contact Us</a>
</nav>

## Text
Let's begin with font sizes. Font sizes range from 1 to 24; ```.fs1``` being equal to 0.5rem and ```.fs24``` being equal to 6.25rem.
The font sizes move in incremenets of 0.25rem.

### Font Weight
Slate provides 5 font weight classes ```.fw-thin```, ```.fw-light```, ```.fw-normal```, ```.fw-bold```, and ```.fw-black```.

Here is what each class uses for font weight.
If your font doesn't support a specified weight, it will use the next supported font weight in ascending order.

- <span class="fw-thin">.fw-thin</span> = 100
- <span class="fw-light">.fw-light</span> = 300
- <span class="fw-normal">.fw-normal</span> = 400
- <span class="fw-bold">.fw-bold</span> = 600
- <span class="fw-black">.fw-black</span> = 800

### Text Alignment
Use the ```.text-center``` class for center-aligned text. Use the ```.text-right``` class for right-aligned text.

::: warning Keep in Mind
Elements using the ```.text-center``` and ```.text-right``` classes will become block display.
:::

### Line Height
Easily modify text line height using the line height levels 2 to 5.<br>

Ex: ```.lh2```

This class will multiply the element's default line height by 1.3em.

## Margins
To set an all-around margin use ```.m``` class. Margins can also be defined in levels like grid spans. These levels range from 2 to 10.

```HTML
<div>
  <button class="m">Submit</button>
  <button class="m">Clear Form</button>
</div>
```
<div>
  <button class="m">Submit</button>
  <button class="m">Clear Form</button>
</div>

::: tip
Notice that both elements have the ```.m``` class. A better way of achieving this would be to add a ```.m-children``` to the parent div.
:::

```HTML
<div class="m-children">
  <button>Submit</button>
  <button>Clear Form</button>
</div>
```
<div class="m-children">
  <button>Submit</button>
  <button>Clear Form</button>
</div>

### Side Margins
Set just the top margin with the ```.mt``` class. Use ```.mr``` for right margin, ```.mb``` for bottom margin, and ```.ml``` for left margin.

### No Margin
Use the ```.m0``` class to remove all margins from an element.<br>

You can remove margin from each side using top, right, bottom, and left modifiers.<br>
Ex: ```.mt0``` to remove the top margin and ```.mr0``` to remove the right margin.

### No End Margins
If you add the ```.m0-ends``` class to a parent element, the left padding of the first child and the right padding of the last child will be removed.<br>

This is useful if you need the text in your navigation to align to the absolute left or right of a container.<br>

Use the ```.m0-ends-v``` class for vertical content; such as content with multiple paragraph tags.

```HTML
<div class="p5 m0-ends-v">
  <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
  <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
</div>
```

Here is the result. Go ahead and inspect element on this nav to see the margins.

<div class="render">
  <div class="p5 m0-ends-v">
    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
    <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
  </div>
</div>

::: tip
You can append the ```-children``` modifier to any of these margin classes to affect the children elements.
:::

## Padding
Much like margins, padding levels can range from a level of 2 to 10. Ex: ```.p3```. You can also use ```.p``` to give an all around padding.

### X and Y Axis Padding
Easily pad the top and bottom (Y axis) of any element with the ```.py``` class. Add a level modifier of 2 to 10 to increase this padding.<br>

Ex: ```.py5```

You can also use ```.px``` the same way to target the left and right (X axis) of an element.

### No Padding
Use the ```.p0``` class to remove all padding from an element.

::: tip
You can append the ```-children``` modifier to any of these padding classes to affect the children elements.
:::

### No End Padding
If you add the ```.p0-ends``` class to a parent element, the left padding of the first child and the right padding of the last child will be removed.<br>

This is useful if you need the text in your navigation to align to the absolute left or right of a container.

```HTML
<nav class="flex p2-children p0-ends">
  <a href="#">Facebook</a>
  <a href="#">Instagram</a>
  <a href="#">Twitter</a>
</nav>
```

Here is the result. Go ahead and inspect element on this nav to see the padding.

<nav class="flex m2-children px-children p0-ends iblock-children">
  <a href="#">Facebook</a>
  <a href="#">Instagram</a>
  <a href="#">Twitter</a>
</nav>

## Breaks
On smaller devices it helps to break multiple columns into rows.
Use the screen size selector along with ```-break``` to force a break on the columns.

Screen selectors breaks are as follows:
- ```sm``` = up to 767px
- ```md``` = up to 991px
- ```lg``` = up to 1199px
- ```xl``` = up to 1399px

Ex: ```.md-break``` will break elements on screen sizes smaller than 991px.

Below is a typical example of a multi-column break on medium screens.

```HTML
<div class="grid3 md-break">
  <img alt="" src="...">
  <img alt="" src="...">
  <img alt="" src="...">
</div>
```

<div class="grid3 md-break">
  <img alt="" src="https://source.unsplash.com/350x400?person?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?random">
  <img alt="" src="https://source.unsplash.com/350x400?person?random?random?random">
</div>

## Media

### Cover
You can set an image to fill up it's parent element.
By adding the ```.cover``` class to the image, the image will fill the entire parent space.

Here's an example of a 500x500 image beside some text content. Notice with the ```.cover``` class, the image maintains the aspect no matter the width.

```HTML
<div class="grid render lg-break">
  <img alt="example image" class="s4 cover minh10" src="https://source.unsplash.com/500x500?random">
  <div class="s5- p5">
    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
    <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
  </div>
</div>
```

<div class="grid render lg-break">
  <img alt="example image" class="s4 cover minh10" src="https://source.unsplash.com/500x500?random">
  <div class="s5- p5 m0-ends-v">
    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
    <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
  </div>
</div>

## Heights and Widths
Easily set a max width or height of an element using one of the min/maxheight and width classes.
Minimum height classes begin with ```.minh``` and are appended with a level between 1 and 10. Each level is multiplied by 10ch.<br>

Ex: ```.minh3``` would be the equivelent of ```min-height: 30ch```.<br>

Much like height classes, width classes are defined as ```.minw``` and are appended with a level between 1 and 10.<br>

Ex: an element with ```.minw8``` would have a minimum width of 80ch.