/**
 *The Control object represents a control on a script dialog; it lets you read and modify a control's value (and contents).
 */
class Control {
	/**
	 * <p>Set or query the color used for the background (fill) of this control.
	 *       This is in the format <em>#RRGGBB</em> (hexadecimal) or
	 *       <em>RRR,GGG,BBB</em> (decimal).<br>&nbsp;</p>
	 *       <p>Currently only <em>static text</em> and <em>list view</em> controls are
	 *       supported for this property.</p>
	 * @returns {string}
	 */

	bg;
	/**
	 * <p>For a <em>list view</em> control, returns a  {@link DialogListColumns}&nbsp;object
	 *       that lets you query or modify the columns in <em>Details</em>
	 *   mode.</p>
	 * @returns {DialogListColumns}
	 */

	columns;
	/**
	 * <p>Returns the number of items contained in the control (e.g. in a
	 *       <em>combo box</em>, <em>list box </em>or <em>list view</em>, returns the
	 *       number of items in the list).</p>
	 * @returns {int}
	 */

	count;
	/**
	 * <p>Set or query the width of the control, in pixels.</p>
	 * @returns {int}
	 */

	cx;
	/**
	 * <p>Set or query the height of the control, in pixels.</p>
	 * @returns {int}
	 */

	cy;
	/**
	 * <p>Set or query the enabled state of the control. Returns
	 *       <strong>True</strong> if the control is enabled, <strong>False</strong> if
	 *       it's disabled. You can set this property to change the state.</p>
	 * @returns {boolean}
	 */

	enabled;
	/**
	 * <p>Set or query the color used for the text (foreground) of this control.
	 *       This is in the format <em>#RRGGBB</em> (hexadecimal) or
	 *       <em>RRR,GGG,BBB</em> (decimal).<br>&nbsp;</p>
	 *       <p>Currently only <em>static text</em> and <em>list view</em> controls are
	 *       supported for this property.</p>
	 * @returns {string}
	 */

	fg;
	/**
	 * <p>Set or query the input focus state of the control. Returns
	 *       <strong>True</strong> if the control currently has input focus,
	 *       <strong>False</strong> if it doesn't. Set to <strong>True</strong> to give
	 *       the control input focus.</p>
	 * @returns {boolean}
	 */

	focus;
	/**
	 * <p>Set or query the control's label or title. Not all controls have labels
	 *       - this will have no effect on controls (like the <em>list view</em>) that
	 *       don't.<br>&nbsp;</p>
	 *       <p>Note that for <em>combo box </em>controls, this property is only valid
	 *       for an editable combo - that is, one that you can type your own text into.
	 *       You can use this property to set or query the current value of the
	 *       editable text.<br>&nbsp;</p>
	 *       <p>For a static control set to "image" mode, you can also provide an  {@link Image}&nbsp;object that you obtained
	 *       from the <strong><a href="DOpus.htm">DOpus</a>.LoadImage </strong>or
	 *       <strong><a href="Script.htm">Script</a>.LoadImage
	 *   </strong>methods.</p>
	 * @returns {string|Image}
	 */

	label;
	/**
	 * <p>For a <em>list view </em>control, lets you&nbsp;change or query the
	 *       current view mode. Valid values are <strong>icon</strong>,
	 *       <strong>details</strong>, <strong>smallicon</strong>,
	 *       <strong>list</strong>.</p>
	 * @returns {string}
	 */

	mode;
	/**
	 * <p>Set or query the <em>read only</em> state of an <em>edit</em>
	 *       control.</p>
	 * @returns {boolean}
	 */

	readonly;
	/**
	 * <p>For a <em>static text</em> control set to "image" mode, you can set
	 *       this property to rotate the displayed image. The value provided is the
	 *       number of degrees from the image's initial orientation.</p>
	 * @returns {int}
	 */

	rotate;
	/**
	 * <p>Set or query the font styles used to display this control's label. The
	 *       string consists of zero or more characters; valid characters are
	 *       <strong>b</strong> for bold and <strong>i</strong> for
	 *       italics.<br>&nbsp;</p>
	 *       <p>Currently only <em>static text </em>controls are supported for this
	 *       property.</p>
	 * @returns {string}
	 */

	style;
	/**
	 * <p>Set or query the color used for the text background (fill) of this
	 *       control. This is in the format <em>#RRGGBB</em> (hexadecimal) or
	 *       <em>RRR,GGG,BBB</em> (decimal).<br>&nbsp;</p>
	 *       <p>Currently only <em>list view</em> controls are supported for this
	 *       property.</p>
	 * @returns {string}
	 */

	textbg;
	/**
	 * <p>Alternative name for the <strong>label</strong> property. The term
	 *       <strong>title</strong> is used in the dialog editor and XML resources, and
	 *       can also be used here as a convenience.</p>
	 * @returns {string|Image}
	 */

	title;
	/**
	 * <p>Set or query the control's value. The meaning of this property depends
	 *       on the type of the control:</p>
	 *       <ul>
	 *         <li><strong>Edit control</strong>: Returns or accepts a string
	 *         representing the current contents of the edit control.
	 *         </li><li><strong>Check box</strong>: For a simple on/off check box, returns
	 *         or accepts a <em>bool</em> - <strong>True</strong> for checked and
	 *         <strong>False</strong> for unchecked. For a tri-state check box, returns
	 *         or accepts an <em>int</em> - <strong>0</strong> for unchecked,
	 *         <strong>1</strong> for checked and <strong>2</strong> for the
	 *         indeterminate state.
	 *         </li><li><strong>Radio button</strong>: Returns or accepts a <em>bool</em> -
	 *         <strong>True</strong> for checked and <strong>False</strong> for
	 *         unchecked.
	 *         </li><li><strong>Tab</strong>: Returns or accepts an <em>int</em> indicating
	 *         the currently selected page in the tab control.
	 *         </li><li><strong>List box / combo box / list view</strong>: Returns or
	 *         accepts a {@link DialogListItem}
	 *         representing the selected item. When setting the value it also accepts
	 *         an <em>int</em> representing the 0-based index of the selected
	 *         item.<br>&nbsp; </li></ul>
	 *       <p>Note that for a multiple-selection <em>list box </em>or <em>list
	 *       view</em>, this value will return a {@link DialogListItem}
	 *       </strong>objects, representing all currently selected items.</p>
	 * @returns {string|boolean|int|DialogListItem|Vector}
	 */

	value;
	/**
	 * <p>Set or query the visible state of the control. Returns
	 *       <strong>True</strong> if the control is visible and <strong>False</strong>
	 *       if it's hidden. You can set this property to hide or show the
	 *     control.</p>
	 * @returns {boolean}
	 */

	visible;
	/**
	 * <p>Set or query the left (x) position of the control, in pixels.</p>
	 * @returns {int}
	 */

	x;
	/**
	 * <p>Set or query the top (y) position of the control, in
	 *   pixels.</p>
	 * @returns {int}
	 */

	y;
	/**
	 * <p>Adds a new group to a <em>list view</em> control. Items you add to the
	 *       list can optionally be placed in groups. Each group must have a unique
	 *       ID.<br>&nbsp;</p>
	 *       <p>The optional flags are "c" (group is collapsible) and "d" (group starts
	 *       out collapsed). E.g. <strong>AddGroup("Unimportant", 100, "cd")</strong>
	 *       would add a group called <em>Unimportant</em> that is initially
	 *       collapsed.</p>
	 * @param {string} name
	 * @param {int} id
	 * @param {string} [flags]
	 * @returns {int}
	 */
	AddGroup(name, id, flags){}
	/**
	 * <p>Adds a new item to the control (<em>list box</em>, <em>combo box
	 *       </em>or <em>list view</em>). The first parameter is the item's name, and
	 *       the optional second parameter is a data value to associate with the
	 *       item.</p>
	 *       <p>&nbsp;</p>
	 *       <p>When adding to a grouped&nbsp;<em>list view</em>, the optional third
	 *       parameter provides the ID of the group you want to add the item to (the
	 *       second parameter must be provided in this case, and can be set to 0 if no
	 *       value is required).</p>
	 *       <p>&nbsp;</p>
	 *       <p>The&nbsp;item is added to the end of the list.<br><br>You can also pass
	 *       a <strong><a href="DialogListItem.htm">DialogListItem</a></strong> object
	 *       obtained from another control.<br>&nbsp;</p>
	 *       <p>The return value indicates the position in the list of the new
	 * item.</p>
	 *       <p>If you are adding to a listview control and need to add an item with
	 *       multiple columns, you can do it like this (JScript):</p>
	 *       <p>&nbsp;</p><pre>    var i = listview.AddItem("This is col 1");
	 *     listview.GetItemAt(i).subitems(0) = "This is col 2";
	 *     listview.GetItemAt(i).subitems(1) = "This is col 3";</pre>
	 * @param {string|object} name_or_item
	 * @param {int} [value]
	 * @param {int} [groupid]

	 * @returns {int}
	 */
	AddItem(name_or_item, value, groupid){}


	/**
	 * <p>This method is mainly for use with multiple-selection <em>list box</em>
	 *       and <em>list view</em> controls. It lets you deselect individual items in
	 *       the control while leaving other items selected (or
	 *       unaffected).<br>&nbsp;</p>
	 *       <p>You can specify either the index of the item to select&nbsp;(0 means
	 *       the first item, 1 means the second and so on) or a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--> <!--?xml:namespace prefix = "c1" /-->{@link DialogListItem} object
	 *       obtained from the <strong>GetItemAt</strong> or
	 *       <strong>GetItemByName</strong> methods.<br>&nbsp;</p>
	 *       <p>You can also specify <strong>-1</strong> to deselect all items in the
	 *       list box.</p>
	 * @param {int|object} position_or_item
	 * @returns {int}
	 */
	DeselectItem(position_or_item){}
	/**
	 * <p>Only applies to <em>list view</em> controls. By default group view is
	 *       off; after adding groups with the <strong>AddGroup</strong> method, use
	 *       <strong>EnableGroupView</strong> to turn group view on.</p>
	 * @param {boolean} enable
	 *
	 */
	EnableGroupView(enable){}
	/**
	 * <p>Returns a <a href="DialogListGroup.htm"><strong>DialogListGroup
	 *       </strong></a>object representing the group with the specified ID that
	 *       you've previous added to a <em>list view</em> control using the
	 *       <strong>AddGroup</strong> method.</p>
	 * @param {int} id
	 * @returns {DialogListGroup}
	 */
	GetGroupById(id){}
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link DialogListItem} object
	 *       representing the item contained in the control at the specified index
	 *       (<em>list box</em>, <em>combo box </em>or <em>list view</em>). Item 0
	 *       represents the first item in the list, item 1 the second, and so
	 *   on.</p>
	 * @param {int} position
	 * @returns {DialogListItem}
	 */
	GetItemAt(position){}
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link DialogListItem} object
	 *       representing the item contained in the control with the specified name
	 *       (<em>list box, combo box or list view</em>). This method has two names
	 *       (...<em>Label</em> and ...<em>Name</em>)<em> </em>for historical reasons,
	 *       you can use either method name interchangeably).</p>
	 * @param {string} name
	 * @returns {DialogListItem}
	 */
	GetItemByLabelGetItemByName(name){}
	/**
	 * <p>Inserts a new item in the control (<em>list box, combo box or list
	 *       view</em>). The first parameter is the position to insert the item at (0
	 *       means the beginning of the list, 1 means the second position and so on).
	 *       The second parameter is the item's name, and the optional&nbsp;third
	 *       parameter is a data value to associate with the item.</p>
	 *       <p>&nbsp;</p>
	 *       <p>When adding to a grouped&nbsp;<em>list view</em>, the optional fourth
	 *       parameter provides the ID of the group you want to add the item to (the
	 *       third parameter must be provided in this case, and can be set to 0 if no
	 *       value is required).</p>
	 *       <p><br>Instead of the <em>name</em> and <em>value</em> you can also pass a
	 *       <strong><!--?xml:namespace prefix = "c1" /--><a href="DialogListItem.htm">DialogListItem</a></strong> object obtained from
	 *       another control.<br>&nbsp;</p>
	 *       <p>The return value indicates the position in the list of the new
	 *     item.</p>
	 * @param {int} position
	 * @param {string} name
	 * @param {int} [value]
	 * @param {int} [groupid]
	 * @returns {int}
	 */
	InsertItemAt(position, name, value, groupid){}

	/**
	 *
	 * @param {int} position
	 * @param {object} item
	 * @constructor
	 */
	InsertItemAt(position, item){}
	/**
	 * <p>Moves an existing item to a new location (<em>list box</em>, <em>combo
	 *       box</em> or <em>list view</em>). The first parameter is the item to move
	 *       (you can pass either its index or a <strong><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><a href="DialogListItem.htm">DialogListItem</a></strong> object), and the
	 *       second parameter is the new position the item should be moved to.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The return value indicates the position in the list of the moved
	 *       item.</p>
	 * @param {int|object} position_or_item
	 * @param {int} newposition
	 * @returns {int}
	 */
	MoveItem(position_or_item, newposition){}
	/**
	 * <p>Removes the specified group from a <em>list view</em>
	 * control.</p>
	 * @param {int} id
	 *
	 */
	RemoveGroup(id){}
	/**
	 * <p>Removes an item from the control (<em>list box, combo box or list
	 *       view</em>). You can provide either the index of the item to remove (0
	 *       means the first item, 1 means the second and so on) or a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link DialogListItem} object
	 *       obtained from the <strong>GetItemAt</strong> or
	 *       <strong>GetItemByName</strong> methods.</p>
	 *       <p>&nbsp;</p>
	 *       <p>You can also specify <strong>-1</strong> to completely clear the
	 *       contents of the control, removing all items at once.</p>
	 * @param {int|object} position_or_item
	 *
	 */
	RemoveItem(position_or_item){}
	/**
	 * <p>Selects an item in the control. For a <em>list box, combo box or list
	 *       view</em>, you can specify either the index of the item to select&nbsp;(0
	 *       means the first item, 1 means the second and so on) or a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--> {@link DialogListItem} object
	 *       obtained from the <strong>GetItemAt</strong> or
	 *       <strong>GetItemByName</strong> methods.<br>&nbsp;</p>
	 *       <p>For a multiple-selection <em>list box</em> or <em>list view</em> you
	 *       can also specify <strong>-1</strong> to select all items in the
	 *       control.<br>&nbsp;</p>
	 *       <p>For a <em>tab control</em>, you can change which page is visible by
	 *       specifying the name of the page (i.e. the name of the child dialog) to
	 *       show.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The return value indicates the new selected index.</p>
	 * @param {int|object|object} position_or_item_or_tab
	 * @returns {int}
	 */
	SelectItem(position_or_item_or_tab){}
	/**
	 * <p>Selects text within an <em>edit control</em> (or the edit field in a
	 *       <em>combo box</em> control). The two parameters represent the start and
	 *       end position of the desired selection. To select the entire contents, use
	 *       <strong>0</strong> for the start and <strong>-1</strong> for the
	 *       end.<br>&nbsp;</p>
	 *       <p>The return value is a  {@link Vector}&nbsp;with two members that
	 *       provide the current start and end of the selection. To query the range
	 *       without changing it, simply call the <strong>SelectRange</strong> method
	 *       with no arguments.</p>
	 *       <p>&nbsp;</p>
	 *       <p>In a <em>list box</em> or <em>list view</em> control, this method
	 *       selects a range of items.</p>
	 * @param {int|object} start_or_item1
	 * @param {int|object} end_or_item2
	 * @returns {Vector}
	 */
	SelectRange(start_or_item1, end_or_item2){}
	/**
	 * <p>Sets the position of this control. The x and y coordinates are
	 *       specified in pixels.</p>
	 * @param {int} x
	 * @param {int} y
	 *
	 */
	SetPos(x, y){}
	/**
	 * <p>Sets the position and size of the control, in a single operation. All
	 *       coordinates are specified in pixels.</p>
	 * @param {int} x
	 * @param {int} y
	 * @param {int} cx
	 * @param {int} cy
	 *
	 */
	SetPosAndSize(x, y, cx, cy){}
	/**
	 * <p>Sets the size of this control. The cx (width) and cy (height) values
	 *       are specified in pixels.</p>
	 * @param {int} cx
	 * @param {int} cy
	 *
	 */
	SetSize(cx, cy){}
} //end class
