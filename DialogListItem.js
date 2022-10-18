/**
 *The DialogListItem object represents an item in a combo box or list box control in a script dialog. It's returned by the Control.GetItemAt and Control.GetItemByName methods.
 */
class DialogListItem {
	/**
	 * <p>Set or query the color used for the background (fill) of this item.
	 *       This is in the format <em>#RRGGBB</em> (hexadecimal) or
	 *       <em>RRR,GGG,BBB</em> (decimal).<br>&nbsp;</p>
	 *       <p>Currently only items in&nbsp;<em>list view</em>&nbsp;controls are
	 *       supported for this property.</p>
	 * @returns {string}
	 */

	bg;
	/**
	 * <p>For a <em>list view</em> control with checkboxes enabled, returns or
	 *       sets the check state of the item. <br>&nbsp;</p>
	 *       <p>Check states are <strong>0</strong> (unchecked), <strong>1</strong>
	 *       (checked), <strong>2</strong> (indeterminate), <strong>3</strong>
	 *       (unchecked/disabled), <strong>4</strong> (checked/disabled),
	 *       <strong>5</strong> (indeterminate/disabled).</p>
	 * @returns {int}
	 */

	checked;
	/**
	 * <p>Returns or sets the optional data value associated with this
	 *     item.</p>
	 * @returns {int}
	 */

	data;
	/**
	 * <p>For a <em>list view </em>control, returns or sets the disable state of
	 *       this item. When a <em>list view</em> item is disabled it appears ghosted
	 *       and can't be selected or right-clicked.</p>
	 * @returns {boolean}
	 */

	disabled;
	/**
	 * <p>Set or query the color used for the text (foreground) of this control.
	 *       This is in the format <em>#RRGGBB</em> (hexadecimal) or
	 *       <em>RRR,GGG,BBB</em> (decimal).<br>&nbsp;</p>
	 *       <p>Currently only items in <em>list view </em>controls are supported for
	 *       this property.</p>
	 * @returns {string}
	 */

	fg;
	/**
	 * <p>Returns or sets the <em>list view</em> group that this item is a member
	 *       of.</p>
	 * @returns {int}
	 */

	group;
	/**
	 * <p>For a <em>list view</em> control, returns or sets the icon associated
	 *       with this item. You can specify the path of a file or folder to use its
	 *       icon, or a file extension (e.g. ".txt") to use a generic filetype icon.
	 *       You can also set it to "dir", "file", "ftp" and "ftps" to use generic
	 *       icons.&nbsp;You can also extract an icon from a DLL or EXE by providing
	 *       the path of the file followed by a comma and then the icon index within
	 *       the file.</p>
	 * @returns {string}
	 */

	icon;
	/**
	 * <p>Returns the 0-based index of this item within the control.<br><br>For a
	 *       combo edit box, this will return <strong>-1</strong> if the user typed in
	 *       a string rather than selecting one from the list. The string they entered
	 *       can be retrieved from the <strong>name</strong> property.</p>
	 * @returns {index}
	 */

	index;
	/**
	 * <p>Returns or sets the item's name.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Returns or sets the item's selection state. Mostly useful with
	 *       multiple-selection <em>list box</em> controls.</p>
	 * @returns {boolean}
	 */

	selected;
	/**
	 * <p>Returns or sets the text style this item will be displayed in. You
	 *       should provide a string containing one or more of the following flags: "b"
	 *       (bold), "i" (italics), "u" (underline).<br>&nbsp;</p>
	 *       <p>Currently only items in <em>list view </em>controls are supported for
	 *       this property.</p>
	 * @returns {string}
	 */

	style;
	/**
	 * <p>For a list view control in <em>Details</em> mode, returns a
	 *       collection&nbsp;of strings that lets you query or change the text of the
	 *       item's sub-items. There will be one&nbsp;string in the&nbsp;collection for
	 *       each column in the list, excluding the first column.</p>
	 *       <p>&nbsp;</p>
	 *       <p>For example, assuming the list has three columns in total,
	 *       the&nbsp;string for the first column would be set using the
	 *       <strong>name</strong> property above. The strings for the second and third
	 *       columns would be set with&nbsp;<strong>subitems(0)</strong> and
	 *       <strong>subitems(1)</strong>.&nbsp;</p>
	 * @returns {string[]}
	 */

	subitems;
} //end class
