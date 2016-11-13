# Slate

## The easy to modify framework that works with you.

Default device screen sizes:

- xs = extra-small (0px up to 543px)
- sm = small (544px up to 767px)
- md = medium (768px up to 992px)
- lg = large (992px up to 1139px)
- xl = extra-large (1140px and up)

By default, Slate is mobile-first with a standard floating grid<br>
The default maximum column size value is 12. Therefore, a column value of 12 will make it 100% width for the specified device.

>Note: Because Slate is mobile-first, setting the columns 'xs' column size value will affect all screen sizes up until the next screen-size column size value set. If 'xs-4' is set, medium devices up to extra-large devices will have a column size value of 4 also. If you set 'xs-4' and 'lg-6', small and medium devices will retain the size of 4, while xl will retain the size of 6.

Column sizes are set by screen size and value

>Ex: \<div class='xs-12 md-6 xl-4'\>

This will give extra-small (xs) devices such as smaller phones, a column size of 12. While medium screen size devices will have a column size of 6 and an extra-large device will have a column size of 4.

---

## Column Pushing

Columns can be pushed from the left a set amount of columns.

>Ex: 'md-push-2' will push the column over 2 columns on medium size devices and up.

### Currently in Beta development. Use at your own risk.

License MIT
