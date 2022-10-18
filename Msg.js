/**
 *The Msg object represents a script dialog input event message. It’s returned by the Dialog.GetMsg method which you call when running the message loop for a detached dialog.
 */
class Msg {
	/**
	 * <p>Returns <b style="mso-bidi-font-weight: normal">True</b> if the message
	 *       is valid, or <b style="mso-bidi-font-weight: normal">False</b> if the
	 *       dialog has been closed (which means you should exit your message
	 *     loop).</p>
	 * @returns {boolean}
	 */

	_default_value
	/**
	 * <p>If the event type is <strong>checked</strong>, this indicates the check
	 *       state of the item. If checkboxes are used in&nbsp;automatic mode, this
	 *       will be the <strong>new</strong> check state of the item. In manual mode,
	 *       this will indicate the <strong>existing</strong> state and it's up to you
	 *       to change the state if desired.<br>&nbsp;</p>
	 *       <p>Check states are <strong>0</strong> (unchecked), <strong>1</strong>
	 *       (checked), <strong>2</strong> (indeterminate), <strong>3</strong>
	 *       (unchecked/disabled), <strong>4</strong> (checked/disabled),
	 *       <strong>5</strong> (indeterminate/disabled).</p>
	 * @returns {int}
	 */

	checked;
	/**
	 * <p>Returns the name of the control involved in the event. You can get a {@link Control} object representing the
	 *       control by passing this string to the <strong><a href="Dialog.htm">Dialog</a>.Control </strong>method.</p>
	 *       <p>For a <strong>timer</strong> event this returns the name of the timer
	 *       that was triggered. For a <strong>hotkey</strong> event this returns the
	 *       name of the hotkey. For a <strong>drop</strong> event this returns the
	 *       name of the control that the files were dropped on.</p>
	 *       <p>For a <strong>tab </strong>event this tells you which monitored tab the
	 *       event occurred in (either the ID you assigned in the <strong><a href="Dialog.htm">Dialog</a></strong><strong>.WatchTab</strong> method, or
	 *       the numeric handle of the tab if you didn't assign an ID).</p>
	 * @returns {string}
	 */

	control;
	/**
	 * <p>For <strong>resize</strong> events, this property returns the new width
	 *       of the dialog.</p>
	 * @returns {int}
	 */

	cx;
	/**
	 * <p>For <strong>resize</strong> events, this property returns the new
	 *       height of the dialog.</p>
	 * @returns {int}
	 */

	cy;
	/**
	 * <p>If the event type is <strong>focus</strong>, indicates the new focus
	 *       state of the control - <strong>True</strong> if the control has gained the
	 *       focus, or <strong>False</strong> if it's lost it.</p>
	 *       <p>For a <em>combo box</em> or <em>list box</em> control: If the event
	 *       type is <strong>selchange</strong> or <strong>dblclk</strong>, returns the
	 *       data value associated with the selected item.</p>
	 *       <p>For a&nbsp;two-state <em>check box</em> control or <em>radio
	 *       button</em>: If the event type is <strong>click</strong>, returns a
	 *       <em>bool</em> indicating the current check state.</p>
	 *       <p>For a three-state <em>check box</em>: If the event type is
	 *       <strong>click</strong>, returns an <em>int</em> representing the current
	 *       state.</p>
	 *       <p>If the event type is <strong>timer</strong>, this value indicates the
	 *       number of milliseconds that have elapsed since the last time this timer
	 *       was triggered.</p>
	 *       <p>If the event type is <strong>tab</strong>, and the
	 *       <strong>value</strong> property is set
	 *       to&nbsp;<strong>filechange</strong>, this indicates which file change
	 *       events occurred in the monitored tab. <strong>1</strong> = add,
	 *       <strong>2</strong> = delete, <strong>4</strong> = change. The values will
	 *       be added together (so e.g. <strong>6</strong> indicates at least one item
	 *       was changed and at least one was deleted).</p>
	 * @returns {int|boolean}
	 */

	data;
	/**
	 * <p>Returns the name of the parent dialog.</p>
	 * @returns {string}
	 */

	dialog;
	/**
	 * <p>Returns a string indicating the event that occurred. Currently defined
	 *       events are:</p>
	 *       <ul>
	 *         <li><strong>invalid</strong>: The dialog has been closed.
	 *         </li><li><strong>checked</strong>: For a listview control with the
	 *         <em><strong>Checkboxes</strong></em> property enabled, indicates that
	 *         the checkbox of a list item has been clicked.
	 *         </li><li><strong>click</strong>: The control was clicked (e.g. a button,
	 *         check box, radio button or static control with <em><strong>Notify
	 *         Clicks</strong></em> property enabled).
	 *         </li><li><strong>dblclk</strong>: An item in the list was double-clicked
	 *         (list box, combo box or list view) or the control was double-clicked
	 *         (static control with <em><strong>Notify
	 *         Clicks</strong>&nbsp;</em>property enabled).
	 *         </li><li><strong>rclick</strong>: An item in the list was right-clicked (list
	 *         box, list view) or the control was right-clicked (static control with
	 *         <em><strong>Notify Clicks</strong>&nbsp;</em>property enabled).
	 *         </li><li><strong>drop</strong>: Files were dropped onto your dialog. The
	 *         dialog template must have its <strong><em>Accept Drops
	 *         </em></strong>property set to <strong>True </strong>to enable drag &amp;
	 *         drop support.
	 *         </li><li><strong>editchange</strong>: The contents of an edit field were
	 *         modified. For a list view this event indicates that the label of a list
	 *         item was edited.
	 *         </li><li><strong>focus</strong>: The control gained or lost focus.
	 *         </li><li><strong>hotkey</strong>: A key combination added as a hotkey with
	 *         the <strong><a href="Dialog.htm">Dialog</a>.AddHotkey </strong>method
	 *         has been pressed.
	 *         </li><li><strong>resize</strong>: The dialog was resized by the user. Only
	 *         generated if the <!--?xml:namespace prefix = "c1" /-->{@link Dialog}<strong>.want_resize</strong>
	 *         property has been set to <strong>True</strong>. Don't mix manual and
	 *         automatic resizing with the same control: If you move or resize a
	 *         control in response to this event, the control should not have any of
	 *         the <strong>resize</strong> flags set in the dialog editor.
	 *         </li><li><strong>selchange</strong>:&nbsp;The selection was changed (list
	 *         box, combo box, list view&nbsp;or tab).
	 *         </li><li><strong>timer</strong>: A periodic timer created with the <strong><a href="Dialog.htm">Dialog</a>.SetTimer </strong>method has elapsed.
	 *         </li><li><strong>tab</strong>: An event has occurred in a tab monitored using
	 *         the <strong><a href="Dialog.htm">Dialog</a>.WatchTab </strong>method.
	 *         </li><li><strong>drag</strong>: The user has initiated a drag and drop from a
	 *         static or list view control. You can respond by calling the <strong><a href="Dialog.htm">Dialog</a></strong><strong>.Drag</strong> method. The
	 *         <em><strong>Drag Source</strong></em> property must be enabled on the
	 *         control for this event to be generated.
	 *         </li><li><strong>close</strong>: The user clicked the dialog's close button.
	 *         Only generated if the <!--?xml:namespace prefix = "c1" /-->{@link Dialog}<strong>.want_close</strong>
	 *         property has been set to <strong>True</strong>. You'll need to close the
	 *         dialog manually using the  {@link Dialog}<strong>.EndDlg
	 *         </strong>method. </li></ul>
	 * @returns {string}
	 */

	event;
	/**
	 * <p>Returns <strong>True</strong> if the control had focus when the message
	 *       was generated.</p>
	 * @returns {boolean}
	 */

	focus;
	/**
	 * <p>Returns the current selection index for a <em>combo box</em>, <em>list
	 *       box</em> or <em>tab control</em>.</p>
	 * @returns {int}
	 */

	index;
	/**
	 * <p>Returns the horizontal position of the mouse cursor when the message
	 *       was generated.</p>
	 * @returns {int}
	 */

	mousex;
	/**
	 * <p>Returns the vertical position of the mouse cursor when the message was
	 *       generated.</p>
	 * @returns {int}
	 */

	mousey;
	/**
	 * <p>For a <strong>drop</strong> event, this property returns a <strong><a href="Vector.htm">Vector</a> </strong>of <strong><a href="Item.htm">Item</a> </strong>objects, representing the files that
	 *       were dropped onto your dialog.</p>
	 * @returns {variant}
	 */

	object;
	/**
	 * <p>Returns a string indicating the qualifier keys (if any) that were held
	 *       down when the message was generated. <br>&nbsp;</p>
	 *       <p>The string can contain any or all of the following: <em>shift,
	 *       </em><em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em></p>
	 *       <p>If no qualifiers were down, the string will be: <em>none</em></p>
	 * @returns {string}
	 */

	qualifiers;
	/**
	 * <p>Returns <b style="mso-bidi-font-weight: normal">True</b> if the message
	 *       is valid, or <b style="mso-bidi-font-weight: normal">False</b> if the
	 *       dialog has been closed.</p>
	 * @returns {boolean}
	 */

	result;
	/**
	 * <p>For a dialog tab control, returns the name of the parent tab (if the
	 *       control is on a dialog that's inside a tab control).</p>
	 *       <p>If the event type is <strong>tab</strong>, this returns a {@link Tab} object representing the monitored
	 *       tab that the event occurred in. Calling this repeatedly may be
	 *       inefficient.</p>
	 * @returns {string}
	 */

	tab;
	/**
	 * <p>For the <strong>dblclk</strong>, <strong>editchange</strong>&nbsp;and
	 *       <strong>selchange</strong> events, returns the current contents of the
	 *       edit field (or selected item label).</p>
	 *       <p>For the <strong>tab</strong> event,&nbsp;indicates which event occurred
	 *       in the monitored tab. Possible values are <strong>select</strong>,
	 *       <strong>navigate</strong>, <strong>filechange</strong>,
	 *       <strong>activate</strong>, <strong>srcdst</strong>, <strong>view</strong>,
	 *       <strong>flat</strong>, and <strong>close</strong> (sent if the tab is
	 *       closed while you are monitoring it).</p>
	 *       <p>For the <strong>drag</strong> event, this indicates which button is
	 *       being used to drag (<strong>left</strong> or
	 *     <strong>right</strong>).</p>
	 * @returns {string}
	 */

	value;
} //end class
